"use client";
export function PrintTerms() {
  return (
    <button
      className="btn secondary print-terms"
      type="button"
      onClick={() => window.print()}
    >
      Print / Save as PDF ↓
    </button>
  );
}
