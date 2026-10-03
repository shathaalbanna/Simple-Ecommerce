import SectionHeader from "./SectionHeader";
import ImageBox from "@/components/ImageBox";
import { categories } from "@/lib/homeData";

export default function CategorySection() {
  return (
    <section id="categories" className="mx-auto max-w-7xl scroll-mt-4 px-5 pt-12">
      <SectionHeader title="Shop From" highlight="Top Categories" />
      <ul className="mt-6 flex gap-6 overflow-x-auto p-2">
        {categories.map((c) => (
          <li key={c.name} className="group flex w-28 shrink-0 flex-col items-center gap-3 text-xs text-neutral-800">
            <ImageBox
              src={c.image}
              className="h-28 w-28 rounded-full bg-neutral-100 ring-1 ring-transparent transition group-hover:shadow-lg group-hover:ring-[#0090cf]"
              fit="object-contain p-4"
            />
            {c.name}
          </li>
        ))}
      </ul>
    </section>
  );
}