interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
      <span className="h-px w-6 bg-accent" />
      {label}
    </p>
  );
}
