interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative block h-5 overflow-hidden"
    >
      <span className="flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
        <span className="block h-5 text-sm leading-5 text-fg/70">
          {label}
        </span>
        <span className="block h-5 text-sm leading-5 text-accent">
          {label}
        </span>
      </span>
    </a>
  );
}
