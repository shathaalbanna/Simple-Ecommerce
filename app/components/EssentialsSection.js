import SectionHeader from "./SectionHeader";
import ImageBox from "@/components/ImageBox";
import { essentials } from "@/lib/homeData";

export default function EssentialsSection() {
  return (
    <section id="essentials" className="mx-auto max-w-7xl scroll-mt-4 px-5 pt-12">
      <SectionHeader title="Daily" highlight="Essentials" />
      <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {essentials.map((e) => (
          <li key={e.name} className="group text-center">
            <ImageBox
              src={e.image}
              className="h-36 rounded-xl bg-neutral-100 ring-1 ring-transparent transition group-hover:shadow-lg group-hover:ring-[#0090cf]"
            />
            <p className="mt-3 text-xs text-neutral-600">{e.name}</p>
            <p className="text-sm font-semibold text-neutral-900">UP to 50% OFF</p>
          </li>
        ))}
      </ul>
    </section>
  );
}