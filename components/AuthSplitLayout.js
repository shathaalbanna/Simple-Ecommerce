import Image from "next/image";

const fits = {
  contain: "object-contain scale-125",
  cover: "object-cover",
};

export default function AuthSplitLayout({ image, fit = "contain", children }) {
  return (
    <main className="grid min-h-screen md:grid-cols-2">
      <section className="flex flex-col justify-center px-8 py-12 md:px-16">
        <div className="w-full max-w-[410px]">{children}</div>
      </section>

      <div className="hidden items-center justify-center p-8 md:flex">
        <div className="relative h-[min(78vh,560px)] w-full max-w-[460px] overflow-hidden rounded-3xl bg-[#f1f1f4]">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="460px"
            className={`${fits[fit]} mix-blend-multiply`}
          />
        </div>
      </div>
    </main>
  );
}