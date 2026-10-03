"use client";

import { useState } from "react";
import Link from "next/link";
import FloatingInput from "@/components/FloatingInput";
import PasswordInput from "@/components/PasswordInput";
import SocialLogin from "@/components/SocialLogin";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: استبدليها بطلب تسجيل الدخول للـ API
    console.log({ email, password, remember });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-14 space-y-6">
        <FloatingInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between text-xs">
          <label className="flex cursor-pointer items-center gap-2 text-neutral-800">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 accent-[#0090cf]"
            />
            Remember me
          </label>
          <Link
            href="/forgot-password"
            className="font-medium text-[#ff7f7f] hover:underline"
          >
            Forgot Password
          </Link>
        </div>

        <button
          type="submit"
          className="h-10 w-full rounded-sm bg-[#0090cf] text-sm font-medium text-white transition hover:bg-[#007db5]"
        >
          Login
        </button>
      </form>

      <p className="mt-5 text-center text-xs text-neutral-900">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-[#ff7f7f] hover:underline"
        >
          Sign up
        </Link>
      </p>

      <SocialLogin label="Or login with" />
    </>
  );
}