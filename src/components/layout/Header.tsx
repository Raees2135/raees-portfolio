import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { profile } from "../../data/profile";
import { useMobileNav } from "../../hooks/useMobileNav";
import { NavLink } from "../ui/NavLink";

export function Header() {
  const { isOpen, toggle, close, panelRef } = useMobileNav();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-375 items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#home"
          className="font-display text-sm font-semibold tracking-[0.15em]"
        >
          {profile.logoText}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {profile.navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent/90 md:inline-flex"
        >
          {profile.ctaLabel}
          <ArrowUpRight className="size-4" />
        </a>

        <button
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-full border border-border p-2 text-fg md:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-nav-panel"
            ref={panelRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-border bg-bg md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {profile.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-lg px-2 py-3 text-sm text-fg/80 transition-colors hover:bg-surface hover:text-fg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={close}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg"
              >
                {profile.ctaLabel}
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
