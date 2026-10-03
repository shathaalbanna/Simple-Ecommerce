export default function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  children,
}) {
  return (
    <fieldset className="relative min-w-0 rounded-md border border-neutral-500 px-3 pb-0.5 focus-within:border-[#0090cf]">
      <legend className="ml-1 px-1 text-xs text-neutral-800">{label}</legend>
      <input
        type={type}
        value={value}
        onChange={onChange}
        aria-label={label}
        className="h-8 w-full bg-transparent text-sm text-neutral-900 outline-none"
      />
      {children}
    </fieldset>
  );
}