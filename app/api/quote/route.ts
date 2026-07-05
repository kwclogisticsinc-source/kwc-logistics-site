import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type QuotePayload = {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  pickupLocation: string;
  deliveryLocation: string;
  shipmentDetails: string;
  preferredDate: string;
  message: string;
};

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

async function getWeb3FormsAccessKey() {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const cloudflareEnv = env as CloudflareEnv & { WEB3FORMS_ACCESS_KEY?: string };

    if (cloudflareEnv.WEB3FORMS_ACCESS_KEY) {
      return cloudflareEnv.WEB3FORMS_ACCESS_KEY;
    }
  } catch {
    // Local Next.js builds do not always have a Cloudflare runtime context.
  }

  return process.env.WEB3FORMS_ACCESS_KEY;
}

function createWeb3FormsPayload(accessKey: string, quote: QuotePayload) {
  const payload = new FormData();

  payload.append("access_key", accessKey);
  payload.append("subject", "New quote request from KWC Logistics website");
  payload.append("from_name", "KWC Logistics Website");
  payload.append("name", quote.name);
  payload.append("Company Name", quote.companyName);
  payload.append("Phone", quote.phone);
  payload.append("email", quote.email);
  payload.append("Pickup Location", quote.pickupLocation);
  payload.append("Delivery Location", quote.deliveryLocation);
  payload.append("Shipment Details", quote.shipmentDetails);
  payload.append("Preferred Date", quote.preferredDate);
  payload.append("Message", quote.message);
  payload.append("Send To", "kwclogisticsinc@gmail.com");

  return payload;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  if (getString(formData, "botcheck")) {
    return NextResponse.json({ success: true });
  }

  const quote: QuotePayload = {
    name: getString(formData, "Name"),
    companyName: getString(formData, "Company Name"),
    phone: getString(formData, "Phone"),
    email: getString(formData, "Email"),
    pickupLocation: getString(formData, "Pickup Location"),
    deliveryLocation: getString(formData, "Delivery Location"),
    shipmentDetails: getString(formData, "Shipment Details"),
    preferredDate: getString(formData, "Preferred Date"),
    message: getString(formData, "Message")
  };

  const requiredFields = [
    quote.name,
    quote.phone,
    quote.email,
    quote.pickupLocation,
    quote.deliveryLocation,
    quote.shipmentDetails,
    quote.preferredDate
  ];

  if (requiredFields.some((field) => !field)) {
    return NextResponse.json({ success: false, error: "Missing required quote fields." }, { status: 400 });
  }

  const accessKey = await getWeb3FormsAccessKey();

  if (!accessKey) {
    return NextResponse.json({ success: false, error: "Quote form is not configured." }, { status: 500 });
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: createWeb3FormsPayload(accessKey, quote)
    });
    const result = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { success: false, error: result.message ?? "Unable to send quote request." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Unable to send quote request." }, { status: 502 });
  }
}
