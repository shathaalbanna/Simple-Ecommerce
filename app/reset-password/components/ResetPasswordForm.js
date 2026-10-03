"use client";

import { useState } from "react";
import PasswordInput from "@/components/PasswordInput";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    // TODO: ابعتي الباسورد الجديد للـ API (مع التوكن من رابط الإيميل)
    console.log({ password });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <PasswordInput
        label="Create Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <PasswordInput
        label="Re-enter Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />

      {error && (
        <p role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="h-10 w-full rounded-sm bg-[#0090cf] text-sm font-medium text-white transition hover:bg-[#007db5]"
      >
        Set password
      </button>
    </form>
  );
}