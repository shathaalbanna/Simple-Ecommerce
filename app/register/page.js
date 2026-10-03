import Logo from "@/components/Logo";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Logo className="absolute right-6 top-8 md:right-24" />

      <div className="mx-auto w-full max-w-[410px] px-5 pb-12 pt-24">
        <h1 className="text-[32px] font-semibold text-neutral-800">Sign up</h1>
        <p className="mt-6 text-sm text-neutral-600">
          Let&apos;s get you all set up so you can access your personal account.
        </p>

        <RegisterForm />
      </div>
    </main>
  );
}