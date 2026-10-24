import Link from "next/link";
export function PaymentSummary() {
  return (
    <section className="payment-summary" id="payment">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CLEAR BEFORE YOU BOOK</p>
          <h2>
            Payment, explained.
            <br />
            Fewer surprises later.
          </h2>
        </div>
        <Link className="text-link" href="/terms">
          Payment & shipment terms →
        </Link>
      </div>
      <div className="payment-cards">
        <article>
          <span className="payment-badge">NEW CUSTOMERS</span>
          <strong>Upfront payment</strong>
          <p>
            Payment is required before collection or service begins, unless KWC
            confirms a different arrangement in writing.
          </p>
          <Link className="text-link" href="/contact#quote">
            Request your shipment quote →
          </Link>
        </article>
        <article>
          <span className="payment-badge">APPROVED CREDIT ACCOUNTS</span>
          <strong>Net 30 days</strong>
          <p>
            Invoices are due within 30 calendar days of the invoice date. Credit
            terms apply only after written approval from KWC.
          </p>
          <a
            className="text-link"
            href="/forms/kwc-credit-application.pdf"
            download
          >
            Download credit application →
          </a>
        </article>
        <article>
          <span className="payment-badge">BEFORE COLLECTION</span>
          <strong>Confirm the details</strong>
          <p>
            Agree on the service, charges, payment arrangement and any special
            shipment requirements before your booking is finalized.
          </p>
          <Link className="text-link" href="/terms#shipment-care">
            Shipment care & liability →
          </Link>
        </article>
      </div>
      <p className="payment-footnote">
        Submitting a quote request or customer setup form does not establish
        credit, confirm a booking or authorize a charge. Payment instructions
        are provided directly with your quote or invoice.
      </p>
    </section>
  );
}
