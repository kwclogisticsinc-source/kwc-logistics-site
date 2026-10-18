// Future pricing boundary. The request UI does not calculate or promise a price.
export type PricingRequest = {
  pickup: string;
  destination: string;
  weightKg?: number;
  dimensionsCm?: [number, number, number];
  requestedDate: string;
};
export type PricingResult =
  | { status: "manual-review"; reason: string }
  | {
      status: "priced";
      quoteId: string;
      subtotalCents: number;
      taxCents: number;
      totalCents: number;
      currency: "CAD";
      expiresAt: string;
    };
export const pricingRequirements = [
  "Approved service boundaries",
  "Address validation and road distance provider",
  "Approved vehicle and package eligibility",
  "Minimums and base rates",
  "Urgency, stops, waiting and handling charges",
  "Tax rules",
  "Quote expiry",
  "Capacity and availability source",
  "Server-side recalculation before booking",
] as const;
export async function requestPrice(
  _request: PricingRequest,
): Promise<PricingResult> {
  return {
    status: "manual-review",
    reason: "KWC reviews availability and pricing before booking.",
  };
}
