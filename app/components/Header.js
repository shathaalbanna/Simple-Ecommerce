import Link from "next/link";
import {
  LuMenu,
  LuSearch,
  LuList,
  LuUser,
  LuShoppingCart,
} from "react-icons/lu";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3">
        <button
          aria-label="Menu"
          className="grid h-10 w-10 place-items-center rounded-md bg-[#eaf6fb] text-[#0090cf]"
        >
          <LuMenu size={20} />
        </button>
        <Logo />
        <div className="mx-auto hidden w-full max-w-xl items-center gap-2 rounded-md bg-[#f1f7fb] px-3 py-2.5 md:flex">
          <LuSearch size={16} className="text-[#0090cf]" />
          <input
            placeholder="Search essentials, groceries and more..."
            className="w-full bg-transparent text-xs outline-none placeholder:text-neutral-400"
          />
          <LuList size={16} className="text-[#0090cf]" />
        </div>
        <nav className="ml-auto flex items-center gap-5 text-sm font-medium text-neutral-700">
          <Link href="/login" className="flex items-center gap-2">
            <LuUser size={18} className="text-[#0090cf]" />
            <span className="hidden sm:inline">Sign Up/Sign In</span>
          </Link>
          <span className="hidden h-5 w-px bg-neutral-200 sm:block" />
          <button className="flex items-center gap-2">
            <LuShoppingCart size={18} className="text-[#0090cf]" />
            <span className="hidden sm:inline">Cart</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
