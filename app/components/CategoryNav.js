"use client";

import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { navCategories } from "@/lib/homeData";

export default function CategoryNav() {
  const [active, setActive] = useState(0);

  const goTo = (i, target) => {
    setActive(i);
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="border-b border-neutral-200 bg-white">
      <ul className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 py-3">
        {navCategories.map(({ label, target }, i) => (
          <li key={label}>
            <button
              onClick={() => goTo(i, target)}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-xs transition ${
                i === active ? "bg-[#0090cf] text-white" : "bg-[#eaf6fb] text-neutral-800 hover:bg-[#d6edf8]"
              }`}
            >
              {label}
              <LuChevronDown size={14} className={i === active ? "" : "text-[#0090cf]"} />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}