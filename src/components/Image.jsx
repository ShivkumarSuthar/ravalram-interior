export default function Image({
  src,
  alt = "",
  fill,
  className = "",
  priority,
  referrerPolicy = "no-referrer",
  onError,
  ...props
}) {
  const fillClasses = fill ? "absolute inset-0 w-full h-full" : "";
  const combinedClasses = `${fillClasses} ${className}`.trim();

  return (
    <img
      src={src}
      alt={alt}
      className={combinedClasses}
      referrerPolicy={referrerPolicy}
      onError={(e) => {
        if (e.currentTarget.src !== "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop") {
          e.currentTarget.src = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop";
        }
        if (onError) onError(e);
      }}
      {...props}
    />
  );
}
