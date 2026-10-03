import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      aria-label="MegaMart home"
      className={`text-2xl font-semibold text-[#0090cf] ${className}`}
    >
      MegaMart
    </Link>
  );
}
