import SectionHeader from "./SectionHeader";
import ImageBox from "@/components/ImageBox";
import { phones } from "@/lib/homeData";

export default function ProductSection() {
  return (
    <section id="smartphones" className="mx-auto max-w-7xl scroll-mt-4 px-5 pt-12">
      <SectionHeader title="Grab the best deal on" highlight="Smartphones" />
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {phones.map((p, i) => (
          <article key={i} className="relative overflow-hidden rounded-lg border border-neutral-200 bg-white transition hover:border-[#0090cf] hover:shadow-lg">
            <span className="absolute right-0 top-0 z-10 rounded-bl-lg bg-[#0090cf] px-3 py-2 text-center text-[11px] font-medium leading-tight text-white">
              {p.off}%<br />OFF
            </span>
            <ImageBox src={p.image} className="h-40 bg-neutral-100" />
            <div className="p-3 text-xs">
              <h3 className="text-neutral-800">{p.name}</h3>
              <p className="mt-2 border-b border-neutral-200 pb-2">
                <b className="text-sm">₹{p.price}</b> <s className="ml-1 text-neutral-500">₹{p.old}</s>
              </p>
              <p className="mt-2 text-green-600">Save - ₹{p.old - p.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}