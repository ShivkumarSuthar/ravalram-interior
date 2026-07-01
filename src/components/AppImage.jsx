import Image from "next/image";

export default function AppImage({
  alt,
  width = 1200,
  height = 800,
  sizes = "100vw",
  ...props
}) {
  return (
    <Image
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      unoptimized
      {...props}
    />
  );
}
