import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const providers = [
  { name: "Facebook", icon: <FaFacebook size={22} className="text-[#1877f2]" /> },
  { name: "Google", icon: <FcGoogle size={22} /> },
  { name: "Apple", icon: <FaApple size={22} className="text-neutral-900" /> },
];

export default function SocialLogin({ label = "Or login with" }) {
  return (
    <>
      <div className="my-8 flex items-center gap-3 text-xs text-neutral-400">
        <span className="h-px flex-1 bg-neutral-200" />
        {label}
        <span className="h-px flex-1 bg-neutral-200" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {providers.map(({ name, icon }) => (
          <button
            key={name}
            type="button"
            aria-label={`Login with ${name}`}
            className="flex h-12 items-center justify-center rounded-sm border border-indigo-500 transition hover:bg-indigo-50"
          >
            {icon}
          </button>
        ))}
      </div>
    </>
  );
}