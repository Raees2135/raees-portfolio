interface EyebrowProps {
  text: string;
  className?: string;
}

export function Eyebrow({ text, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-fg/70 uppercase ${className}`}
    >
      <span className="size-1.5 rounded-full bg-accent" />
      {text}
    </span>
  );
}
