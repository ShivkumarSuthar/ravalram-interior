export default function SectionTitle({
  subtitle,
  title,
  description,
  center = true,
  className = "",
}) {
  return (
    <div
      className={`${center ? "text-center" : "text-left"} ${className}`}
    >
      {subtitle && (
        <span className="inline-block text-sm font-medium uppercase tracking-[4px] text-amber-500 mb-4">
          {subtitle}
        </span>
      )}

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-neutral-900 dark:text-white">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400 ${
            center ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}