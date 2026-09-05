export default function ImagePlaceholder({
  label,
  tone = "light",
  className = "",
}: {
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const textColor = tone === "dark" ? "text-white/60" : "text-black/40";
  const borderColor = tone === "dark" ? "border-white/25" : "border-black/15";

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed p-4 text-center ${borderColor} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className={`size-6 ${textColor}`}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
        />
        <circle cx="12" cy="13" r="3.2" />
      </svg>
      <span className={`text-xs leading-snug font-medium ${textColor}`}>
        Photo needed &mdash; {label}
      </span>
    </div>
  );
}
