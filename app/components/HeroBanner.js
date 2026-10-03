"use client";

import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import ImageBox from "@/components/ImageBox";
import { slides } from "@/lib/homeData";

const arrow = "absolute top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-[#eaf6fb] text-[#0090cf]";

export default function HeroBanner() {
  const [i, setI] = useState(0);
  const go = (d) => setI((p) => (p + d + slides.length) % slides.length);
  const s = slides[i];

  return (
    <section className="mx-auto max-w-7xl px-8 pt-4">
      <div className="relative">
        <div className="relative flex min-h-[230px] items-center justify-between overflow-hidden rounded-xl bg-[#1f2547] px-12 text-white md:px-24">
          <div>
            <p className="text-lg md:text-xl">{s.title}</p>
            <h2 className="mt-2 text-3xl font-medium uppercase md:text-5xl">{s.headline}</h2>
            <p className="mt-2 text-lg">{s.offer}</p>
          </div>
          <ImageBox src={s.image} className="hidden h-52 w-52 md:block" />
          <div className="absolute bottom-6 left-12 flex gap-1.5 md:left-24">
            {slides.map((_, n) => (
              <span key={n} className={`h-2 rounded-full bg-white ${n === i ? "w-6" : "w-2"}`} />
            ))}
          </div>
        </div>
        <button onClick={() => go(-1)} aria-label="Previous" className={`${arrow} -left-7`}>
          <LuChevronLeft size={20} />
        </button>
        <button onClick={() => go(1)} aria-label="Next" className={`${arrow} -right-7`}>
          <LuChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}