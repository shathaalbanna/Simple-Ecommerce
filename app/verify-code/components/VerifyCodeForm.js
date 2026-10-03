"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PasswordInput from "@/components/PasswordInput";

export default function VerifyCodeForm() {
  const router = useRouter();
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: تحققي من الكود عن طريق الـ API
    router.push("/reset-password");
  };

  const handleResend = () => {
    // TODO: اطلبي كود جديد من الـ API
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <PasswordInput
        label="Enter Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <p className="mt-3 text-xs text-neutral-900">
        Didn&apos;t receive a code?{" "}
        <button
          type="button"
          onClick={handleResend}
          className="font-medium text-[#ff7f7f] hover:underline"
        >
          Resend
        </button>
      </p>

      <button
        type="submit"
        className="mt-6 h-10 w-full rounded-sm bg-[#0090cf] text-sm font-medium text-white transition hover:bg-[#007db5]"
      >
        Verify
      </button>
    </form>
  );
}