"use client";

import { useState } from "react";
import { FaApple } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import ImageBox from "@/components/ImageBox";
import { brands } from "@/lib/homeData";

const PAGE_SIZE = 3;

const marks = {
  IPHONE: <span className="grid h-14 w-14 place-items-center rounded-xl bg-white"><FaApple size={34} className="text-black" /></span>,
  REALME: <span className="bg-[#ffc915] px-2 py-1 text-xl font-bold text-neutral-900">realme</span>,
  XIAOMI: <span className="grid h-14 w-14 place-items-center rounded-xl bg-[#ff6900] text-2xl font-bold text-white">mi</span>,
};

const pages = Array.from({ length: Math.ceil(brands.length / PAGE_SIZE) }, (_, i) =>
  brands.slice(i * PAGE_SIZE, i * PAGE_SIZE + PAGE_SIZE)
);

export default function BrandSection() {
  const [page, setPage] = useState(0);

  return (
    <section id="brands" className="mx-auto max-w-7xl scroll-mt-4 px-5 pt-12">
      <SectionHeader title="Top Electronics" highlight="Brands" />

      <div className="mt-6 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((group, n) => (
            <div key={n} className="grid w-full shrink-0 gap-5 md:grid-cols-3">
              {group.map((b) => (
                <article key={b.name} className={`relative flex h-40 items-center justify-between overflow-hidden rounded-xl px-5 ${b.bg} ${b.text}`}>
                  <div className="z-10 flex flex-col items-start gap-3">
                    <span className={`rounded-md px-3 py-1 text-[11px] tracking-widest ${b.chip}`}>{b.name}</span>
                    {marks[b.name] ?? <span className="text-xl font-bold">{b.name}</span>}
                    <p className="text-lg font-medium">UP to 80% OFF</p>
                  </div>
                  <ImageBox src={b.image} scale={b.scale} className="h-full w-1/2" fit="object-contain py-3" />
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-1.5">
        {pages.map((_, n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            aria-label={`Page ${n + 1}`}
            className={`h-1.5 rounded-full transition-all ${n === page ? "w-5 bg-[#0090cf]" : "w-1.5 bg-neutral-300"}`}
          />
        ))}
      </div>
    </section>
  );
}