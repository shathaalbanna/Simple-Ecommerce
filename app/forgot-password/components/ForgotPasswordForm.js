"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FloatingInput from "@/components/FloatingInput";
import SocialLogin from "@/components/SocialLogin";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: ابعتي الإيميل للـ API ليرسل كود التحقق
    router.push("/verify-code");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <FloatingInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="h-10 w-full rounded-sm bg-[#0090cf] text-sm font-medium text-white transition hover:bg-[#007db5]"
        >
          Submit
        </button>
      </form>

      <SocialLogin label="Or login with" />
    </>
  );
}