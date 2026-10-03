import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";

export default function BackLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-xs text-neutral-800 hover:underline"
    >
      <LuChevronLeft size={14} />
      {children}
    </Link>
  );
}