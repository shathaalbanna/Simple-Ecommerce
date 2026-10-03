"use client";

import { useState } from "react";
import Link from "next/link";
import FloatingInput from "@/components/FloatingInput";
import PasswordInput from "@/components/PasswordInput";
import SocialLogin from "@/components/SocialLogin";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [form, setForm] = useState(initialForm);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agree) {
      setError("Please agree to the Terms and Privacy Policies.");
      return;
    }

    setError("");
    // TODO: ابعتي البيانات للـ API
    console.log(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FloatingInput
            label="First Name"
            value={form.firstName}
            onChange={set("firstName")}
          />
          <FloatingInput
            label="Last Name"
            value={form.lastName}
            onChange={set("lastName")}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FloatingInput
            label="Email"
            type="email"
            value={form.email}
            onChange={set("email")}
          />
          <FloatingInput
            label="Phone Number"
            type="tel"
            value={form.phone}
            onChange={set("phone")}
          />
        </div>

        <PasswordInput
          label="Password"
          value={form.password}
          onChange={set("password")}
        />
        <PasswordInput
          label="Confirm Password"
          value={form.confirmPassword}
          onChange={set("confirmPassword")}
        />

        <label className="flex cursor-pointer items-center gap-2 pt-1 text-xs text-neutral-800">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="h-4 w-4 accent-[#0090cf]"
          />
          <span>
            I agree to all the{" "}
            <Link href="#" className="font-medium text-[#ff7f7f] hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="font-medium text-[#ff7f7f] hover:underline">
              Privacy Policies
            </Link>
          </span>
        </label>

        {error && (
          <p role="alert" className="text-xs text-red-500">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="!mt-8 h-10 w-full rounded-sm bg-[#0090cf] text-sm font-medium text-white transition hover:bg-[#007db5]"
        >
          Create account
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-neutral-900">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-[#ff7f7f] hover:underline">
          Login
        </Link>
      </p>

      <SocialLogin label="Or Sign up with" />
    </>
  );
}