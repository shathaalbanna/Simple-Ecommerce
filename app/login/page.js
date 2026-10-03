import Logo from "@/components/Logo";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Logo className="absolute right-6 top-8 md:right-24" />

      <div className="mx-auto w-full max-w-[410px] px-5 pb-12 pt-32">
        <h1 className="text-[32px] font-semibold text-neutral-800">Login</h1>
        <p className="mt-6 text-sm text-neutral-600">
          Login to access your MegaMart account
        </p>

        <LoginForm />
      </div>
    </main>
  );
}