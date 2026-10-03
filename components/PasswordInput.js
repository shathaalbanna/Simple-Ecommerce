"use client";

import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import FloatingInput from "./FloatingInput";

export default function PasswordInput({ label, value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <FloatingInput
      label={label}
      type={show ? "text" : "password"}
      value={value}
      onChange={onChange}
    >
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        aria-label={show ? "Hide password" : "Show password"}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-800"
      >
        {show ? <LuEye size={20} /> : <LuEyeOff size={20} />}
      </button>
    </FloatingInput>
  );
}