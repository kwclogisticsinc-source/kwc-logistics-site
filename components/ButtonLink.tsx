import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-brand-red text-white hover:bg-red-700"
      : "border border-brand-navy bg-white text-brand-navy hover:bg-brand-pale";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
