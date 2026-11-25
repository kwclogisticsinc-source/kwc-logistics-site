import test from "node:test";
import assert from "node:assert/strict";
import { handleQuote } from "../lib/quote-handler.ts";
import { validateQuote, fieldsFor, courierConfig } from "../lib/quote.ts";
import { requestPrice } from "../lib/pricing.ts";
const valid = {
  Name: "Preview Test",
  Email: "sender@example.com",
  Service: "B2B bulk package delivery",
  "Pickup Location": "Kitchener, ON",
  "Delivery Location": "Waterloo, ON",
  "Preferred Date": "2026-11-20",
  "Freight Type": "Retail orders",
  "Item Count": "12",
  "Service Preference": "Scheduled / flexible",
};
function req(values = valid) {
  const body = new FormData();
  for (const [k, v] of Object.entries(values)) body.set(k, v);
  return new Request("https://kwclogistics.ca/api/quote", {
    method: "POST",
    body,
    headers: { origin: "https://kwclogistics.ca" },
  });
}
function deps(overrides = {}) {
  return {
    environment: async () => ({
      WEB3FORMS_ACCESS_KEY: "test-only",
      QUOTE_RATE_LIMITER: { limit: async () => ({ success: true }) },
    }),
    send: async () => Response.json({ success: true }),
    log: () => {},
    ...overrides,
  };
}
test("courier request sends only validated fields and preserves measurements", async () => {
  let sent;
  const response = await handleQuote(
    req({
      ...valid,
      Weight: "4 kg",
      Dimensions: "30 x 20 x 10 cm",
      "Unexpected private field": "do not forward",
    }),
    deps({
      send: async (url, options) => {
        assert.equal(url, "https://api.web3forms.com/submit");
        sent = JSON.parse(options.body);
        return Response.json({ success: true });
      },
    }),
  );
  assert.equal(response.status, 200);
  assert.equal(sent.Weight, "4 kg");
  assert.equal(sent.email, valid.Email);
  assert.equal(sent["Unexpected private field"], undefined);
  assert.equal(sent["Send To"], undefined);
});
test("optional phone is not required for an individual", async () => {
  assert.equal((await handleQuote(req(), deps())).status, 200);
});
test("invalid dates, package count, email and service are rejected before provider", async () => {
  const response = await handleQuote(
    req({
      ...valid,
      Email: "bad",
      "Item Count": "-2",
      "Preferred Date": "2026-02-30",
      Service: "Rail",
    }),
    deps({ send: async () => assert.fail() }),
  );
  assert.equal(response.status, 400);
  const { errors } = await response.json();
  for (const key of ["Email", "Item Count", "Preferred Date", "Service"])
    assert.ok(errors[key]);
});
test("freight requires temperature when requested and validates delivery order", async () => {
  const response = await handleQuote(
    req({
      ...valid,
      Service: "Freight & specialized delivery",
      "Temperature Service": "Refrigerated / frozen capacity requested",
      "Delivery Date": "2026-11-19",
    }),
    deps({ send: async () => assert.fail() }),
  );
  const { errors } = await response.json();
  assert.ok(errors.Temperature);
  assert.ok(errors["Delivery Date"]);
});
test("regular enquiry requires frequency and volume, not a package count", async () => {
  const response = await handleQuote(
    req({
      ...valid,
      Service: "Regular deliveries",
      "Item Count": "",
      Frequency: "Weekly",
      "Approximate Volume": "20 customer orders",
    }),
    deps(),
  );
  assert.equal(response.status, 200);
  const missing = await handleQuote(
    req({ ...valid, Service: "Regular deliveries" }),
    deps(),
  );
  const { errors } = await missing.json();
  assert.ok(errors.Frequency);
  assert.ok(errors["Approximate Volume"]);
});
test("inactive freight questions do not block courier enquiries", () => {
  const body = new FormData();
  for (const [k, v] of Object.entries({
    ...valid,
    "Temperature Service": "Refrigerated / frozen capacity requested",
  }))
    body.set(k, v);
  assert.deepEqual(validateQuote(body).errors, {});
});
test("all flows have four clear steps", () => {
  for (const kind of ["courier", "freight", "regular", "logistics"])
    assert.equal(fieldsFor(kind).length, 4);
});
test("missing runtime key or limiter fails closed without provider", async () => {
  for (const env of [{}, { WEB3FORMS_ACCESS_KEY: "test" }]) {
    const response = await handleQuote(
      req(),
      deps({ environment: async () => env, send: async () => assert.fail() }),
    );
    assert.equal(response.status, 503);
    assert.equal((await response.json()).success, false);
  }
});
test("rate limit rejects before provider", async () => {
  const response = await handleQuote(
    req(),
    deps({
      environment: async () => ({
        WEB3FORMS_ACCESS_KEY: "test",
        QUOTE_RATE_LIMITER: { limit: async () => ({ success: false }) },
      }),
      send: async () => assert.fail(),
    }),
  );
  assert.equal(response.status, 429);
  assert.equal(response.headers.get("retry-after"), "60");
});
for (const [name, send] of [
  [
    "rejected",
    async () =>
      Response.json(
        { success: false, message: "private provider detail" },
        { status: 400 },
      ),
  ],
  ["invalid JSON", async () => new Response("bad")],
  [
    "timeout",
    async () => {
      throw Error("timeout");
    },
  ],
])
  test(`provider ${name} preserves a failure response without leaking detail`, async () => {
    const response = await handleQuote(req(), deps({ send }));
    assert.equal(response.status, 502);
    assert.doesNotMatch(
      await response.text(),
      /private provider detail|test-only/,
    );
  });
test("honeypot never sends mail or claims a successful submission", async () => {
  assert.equal(
    (
      await handleQuote(
        req({ botcheck: "filled" }),
        deps({ send: async () => assert.fail() }),
      )
    ).status,
    400,
  );
});
test("cross-origin posts are rejected", async () => {
  const r = req();
  r.headers.set("origin", "https://other.example");
  assert.equal((await handleQuote(r, deps())).status, 403);
});

test("regular deliveries retain stops, windows and handling without known measurements", async () => {
  let sent;
  const response = await handleQuote(
    req({
      ...valid,
      Service: "Regular deliveries",
      Weight: "Not sure",
      Dimensions: "Not sure",
      "Number of Stops": "Not sure",
      "Approximate Volume": "20 orders weekly",
      Frequency: "Not sure",
      "Route Schedule": "Tuesdays 9-12",
      "Handling Requirements": "Fragile packages; ambient temperature",
    }),
    deps({
      send: async (_, options) => {
        sent = JSON.parse(options.body);
        return Response.json({ success: true });
      },
    }),
  );
  assert.equal(response.status, 200);
  assert.equal(sent["Number of Stops"], "Not sure");
  assert.equal(sent["Route Schedule"], "Tuesdays 9-12");
  assert.equal(
    sent["Handling Requirements"],
    "Fragile packages; ambient temperature",
  );
  assert.equal(sent.Weight, "Not sure");
});
test("duplicate required fields are rejected", async () => {
  const body = new FormData();
  for (const [k, v] of Object.entries(valid)) body.set(k, v);
  body.append("Email", "other@example.com");
  assert.equal(
    (
      await handleQuote(
        new Request("https://kwclogistics.ca/api/quote", {
          method: "POST",
          body,
        }),
        deps(),
      )
    ).status,
    400,
  );
});
test("malformed multipart is handled", async () => {
  assert.equal(
    (
      await handleQuote(
        new Request("https://kwclogistics.ca/api/quote", {
          method: "POST",
          body: "broken",
          headers: { "content-type": "multipart/form-data" },
        }),
        deps(),
      )
    ).status,
    400,
  );
});
test("request body is bounded without relying on Content-Length", async () => {
  assert.equal(
    (
      await handleQuote(
        new Request("https://kwclogistics.ca/api/quote", {
          method: "POST",
          body: new URLSearchParams({
            ...valid,
            "Shipment Details": "x".repeat(25000),
          }),
        }),
        deps(),
      )
    ).status,
    413,
  );
});
test("no unapproved package limits or fabricated prices", async () => {
  assert.equal(courierConfig.maxWeightKg, null);
  assert.equal(courierConfig.maxDimensionsCm, null);
  assert.equal(
    (
      await requestPrice({
        pickup: "Kitchener",
        destination: "Waterloo",
        requestedDate: "2026-11-20",
      })
    ).status,
    "manual-review",
  );
});

test("single parcels are rejected for current and older bulk-parcel forms", async () => {
  for (const Service of ["B2B bulk package delivery", "B2B bulk parcel delivery", "Courier delivery"]) {
    const response = await handleQuote(
      req({ ...valid, Service, "Item Count": "1" }),
      deps({ send: async () => assert.fail("Single parcels must not reach dispatch") }),
    );
    assert.equal(response.status, 400);
    assert.match((await response.json()).errors["Item Count"], /multiple packages/);
  }
});

test("driver application forwards only reviewed fields and a matching reference", async () => {
  let payload;
  const response = await handleQuote(
    req({
      "Request Type": "driver", Name: "Test Driver", Email: "driver@example.com",
      "Operating city": "Kitchener", "Application type": "Straight-truck driver",
      "Experience, equipment and availability": "Weekdays",
      "Licence number": "must not be forwarded",
    }),
    deps({ send: async (_, options) => {
      payload = JSON.parse(options.body);
      return Response.json({ success: true });
    } }),
  );
  assert.equal(response.status, 200);
  const { reference } = await response.json();
  assert.match(reference, /^KWC-[A-F0-9-]{36}$/);
  assert.equal(payload["Request Reference"], reference);
  assert.equal(payload["Licence number"], undefined);
  assert.match(payload.subject, /Drive with KWC application/);
});

test("customer requests require company details before reaching dispatch", async () => {
  const response = await handleQuote(
    req({ "Request Type": "customer", Name: "Test Customer", Email: "test@example.com" }),
    deps({ send: async () => assert.fail("Incomplete requests must not be sent") }),
  );
  assert.equal(response.status, 400);
  assert.ok((await response.json()).errors.Company);
});

test("partnership enquiries require a business type and deliver a separate capacity request", async () => {
  const fields = {
    "Request Type": "partnership",
    Name: "Test Dispatcher",
    Email: "dispatch@example.com",
    Company: "Test Forwarder",
    "Business type": "Freight forwarder",
    "Lanes and service areas": "GTA to Sudbury",
    "Equipment and handling requirements": "Liftgate",
    "Capacity needed": "Two pallets weekly, weekday delivery",
    "Insurance document": "ignored",
  };
  const invalid = await handleQuote(
    req({ ...fields, "Business type": "Invalid" }),
    deps({ send: async () => assert.fail("Invalid requests must not reach dispatch") }),
  );
  assert.equal(invalid.status, 400);
  assert.match((await invalid.json()).errors["Business type"], /business type/);

  let payload, accepted;
  const result = await handleQuote(req(fields), deps({
    send: async (_, options) => {
      payload = JSON.parse(options.body);
      return Response.json({ success: true });
    },
    recordAccepted: (kind) => { accepted = kind; },
  }));
  assert.equal(result.status, 200);
  const { reference } = await result.json();
  assert.equal(accepted, "partnership");
  assert.equal(payload["Request Reference"], reference);
  assert.equal(payload["Capacity needed"], fields["Capacity needed"]);
  assert.equal(payload["Insurance document"], undefined);
  assert.match(payload.subject, /Carrier capacity enquiry/);
});

test("retired newsletter subscriptions do not reach the delivery provider", async () => {
  const response = await handleQuote(
    req({ "Request Type": "newsletter", Email: "reader@example.com", "Newsletter consent": "yes" }),
    deps({ send: async () => assert.fail("Retired signup must not be forwarded") }),
  );
  assert.equal(response.status, 400);
});

test("accepts AZ and DZ applications with qualified role labels", async () => {
  for (const role of ["AZ driver", "DZ driver", "AZ owner-operator", "DZ owner-operator"]) {
    const result = await handleQuote(req({
      "Request Type": "driver",
      Name: "Test Applicant",
      Email: "driver@example.com",
      "Operating city": "Kitchener",
      "Application type": role,
      "Equipment operated or supplied": "Straight truck with liftgate",
      "Preferred lanes or service area": "Waterloo Region",
      "Experience, equipment and availability": "Local freight experience; weekdays",
    }), deps({
      send: async (_, options) => {
        const payload = JSON.parse(options.body);
        assert.equal(payload["Application type"], role);
        assert.equal(payload["Equipment operated or supplied"], "Straight truck with liftgate");
        assert.equal(payload["Preferred lanes or service area"], "Waterloo Region");
        return Response.json({ success: true });
      },
    }));
    assert.equal(result.status, 200);
  }
});
