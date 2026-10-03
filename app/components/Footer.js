import { FaWhatsapp, FaApple, FaGooglePlay } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { popular, services } from "@/lib/homeData";

const Column = ({ title, items }) => (
  <div>
    <h3 className="inline-block border-b-2 border-white pb-1 text-sm font-medium">{title}</h3>
    <ul className="mt-5 space-y-3 text-xs">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span>•</span>
          {t}
        </li>
      ))}
    </ul>
  </div>
);

const Store = ({ icon, small, big }) => (
  <span className="flex items-center gap-2 rounded-md bg-black px-3 py-1.5">
    {icon}
    <span className="leading-tight">
      <span className="block text-[8px] uppercase">{small}</span>
      <span className="block text-base font-medium">{big}</span>
    </span>
  </span>
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0090cf] text-white">
      <span className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/20 bg-white/5" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-3xl font-semibold">MegaMart</p>
          <h3 className="mt-8 text-sm font-medium">Contact Us</h3>
          <div className="mt-3 space-y-4 text-xs">
            <p className="flex gap-2"><FaWhatsapp size={16} /><span>Whats App<br />+1 202-918-2132</span></p>
            <p className="flex gap-2"><LuPhone size={16} /><span>Call Us<br />+1 202-918-2132</span></p>
          </div>
          <h3 className="mt-6 text-sm font-medium">Download App</h3>
          <div className="mt-3 flex gap-3">
            <Store icon={<FaApple size={24} />} small="Download on the" big="App Store" />
            <Store icon={<FaGooglePlay size={20} />} small="Get it on" big="Google Play" />
          </div>
        </div>
        <Column title="Most Popular Categories" items={popular} />
        <Column title="Customer Services" items={services} />
      </div>
      <p className="relative border-t border-white/20 py-5 text-center text-sm">
        © 2022 All rights reserved. Reliance Retail Ltd.
      </p>
    </footer>
  );
}