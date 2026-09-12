import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
}

const baseClasses =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-accent text-bg hover:bg-accent/90",
  ghost:
    "border border-border bg-transparent text-fg hover:border-accent/60 hover:text-accent",
};

export function Button({
  variant = "primary",
  icon,
  iconPosition = "right",
  children,
  className = "",
  ...anchorProps
}: ButtonProps) {
  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...anchorProps}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </a>
  );
}
