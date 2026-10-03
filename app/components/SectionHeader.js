import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

export default function SectionHeader({ title, highlight }) {
  return (
    <div className="flex items-end justify-between border-b border-neutral-200">
      <h2 className="-mb-px border-b-2 border-[#0090cf] pb-2 text-lg font-medium text-neutral-600">
        {title} <span className="text-[#0090cf]">{highlight}</span>
      </h2>
      <Link href="#" className="flex items-center gap-1 pb-2 text-xs text-neutral-800">
        View All <LuChevronRight size={14} className="text-[#0090cf]" />
      </Link>
    </div>
  );
}