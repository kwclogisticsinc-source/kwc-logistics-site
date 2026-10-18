import test from 'node:test';
import assert from 'node:assert/strict';
import { handleQuote } from '../lib/quote-handler.ts';
const valid = { Name: 'Test Shipper', Email: 'shipper@example.com', Phone: '416-555-0100', Service: 'Freight Brokerage', 'Transport Mode': 'Rail', 'Pickup Location': 'Kitchener, ON, Canada', 'Delivery Location': 'Chicago, IL, USA', 'Preferred Date': '2026-11-20', Frequency: 'One-time shipment', 'Freight Type': 'Machine parts', 'Shipment Details': 'Two pallets, dry freight', Weight: '500 kg', Dimensions: '48 x 40 x 50 in', 'Item Count': '2' };
function req(values = valid) { const body = new FormData(); for (const [key, value] of Object.entries(values)) body.set(key, value); return new Request('https://kwclogistics.ca/api/quote', { method: 'POST', body, headers: { origin: 'https://kwclogistics.ca' } }); }
function deps(overrides = {}) { return { environment: async () => ({ WEB3FORMS_ACCESS_KEY: 'test-only', QUOTE_RATE_LIMITER: { limit: async () => ({ success: true }) } }), send: async () => Response.json({ success: true }), log: () => {}, ...overrides }; }
test('accepted brokerage submission preserves mode, locations and measurements', async () => {
  let sent;
  const result = await handleQuote(req(), deps({ send: async (url, options) => { assert.equal(url, 'https://api.web3forms.com/submit'); sent = JSON.parse(options.body); return Response.json({ success: true }); } }));
  assert.equal(result.status, 200); assert.equal((await result.json()).success, true);
  for (const key of ['Transport Mode', 'Service', 'Delivery Location', 'Weight', 'Dimensions']) assert.equal(sent[key], valid[key]);
  assert.equal(sent.email, valid.Email); assert.equal(sent['Send To'], undefined);
});
test('invalid fields never call provider', async () => {
  const result = await handleQuote(req({ ...valid, Email: 'invalid', 'Item Count': '-2', 'Preferred Date': '2026-02-30', Service: 'invented' }), deps({ send: async () => assert.fail('provider called') }));
  assert.equal(result.status, 400); const { errors } = await result.json(); for (const key of ['Email', 'Item Count', 'Preferred Date', 'Service']) assert.ok(errors[key]);
});
test('refrigerated requests require temperature and valid date order', async () => {
  const result = await handleQuote(req({ ...valid, Service: 'Frozen & Refrigerated Freight', 'Delivery Date': '2026-11-19' }), deps());
  const { errors } = await result.json(); assert.ok(errors.Temperature); assert.ok(errors['Delivery Date']);
});
test('honeypot skips delivery', async () => { const response = await handleQuote(req({ botcheck: 'filled' }), deps({ send: async () => assert.fail() })); assert.equal(response.status, 200); });
test('missing configuration reports unavailable without success', async () => { const response = await handleQuote(req(), deps({ environment: async () => ({}) })); assert.equal(response.status, 503); assert.equal((await response.json()).success, false); });
test('rate limit rejects before provider', async () => { const response = await handleQuote(req(), deps({ environment: async () => ({ WEB3FORMS_ACCESS_KEY: 'test', QUOTE_RATE_LIMITER: { limit: async () => ({ success: false }) } }), send: async () => assert.fail() })); assert.equal(response.status, 429); assert.equal(response.headers.get('retry-after'), '60'); });
for (const [name, send] of [ ['rejection', async () => Response.json({ success: false, message: 'private upstream detail' }, { status: 400 })], ['invalid JSON', async () => new Response('bad')], ['timeout', async () => { throw new Error('timeout'); }] ]) test(`provider ${name} is not success and details are not leaked`, async () => { const response = await handleQuote(req(), deps({ send })); assert.equal(response.status, 502); assert.doesNotMatch(await response.text(), /private upstream detail|test-only/); });
test('cross-origin request rejected', async () => { const r = req(); r.headers.set('origin', 'https://other.example'); assert.equal((await handleQuote(r, deps())).status, 403); });
test('malformed multipart is handled', async () => { const r = new Request('https://kwclogistics.ca/api/quote', { method: 'POST', body: 'broken', headers: { 'content-type': 'multipart/form-data' } }); assert.equal((await handleQuote(r, deps())).status, 400); });
test('body limit enforced without Content-Length', async () => { assert.equal((await handleQuote(new Request('https://kwclogistics.ca/api/quote', { method: 'POST', body: new URLSearchParams({ ...valid, 'Shipment Details': 'x'.repeat(25000) }) }), deps())).status, 413); });
test('duplicate form fields rejected', async () => { const body = new FormData(); for (const [k,v] of Object.entries(valid)) body.append(k,v); body.append('Email','other@example.com'); const r = new Request('https://kwclogistics.ca/api/quote', { method: 'POST', body }); assert.equal((await handleQuote(r, deps())).status, 400); });
