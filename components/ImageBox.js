import Image from "next/image";
import { LuImage } from "react-icons/lu";

export default function ImageBox({
  src,
  alt = "",
  className = "",
  fit = "object-contain p-3",
  scale,
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="300px"
          className={fit}
          style={scale ? { transform: `scale(${scale})` } : undefined}
        />
      ) : (
        <LuImage
          size={28}
          className="absolute inset-0 m-auto text-neutral-300"
        />
      )}
    </div>
  );
}
