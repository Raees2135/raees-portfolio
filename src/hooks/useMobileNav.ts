import { useCallback, useEffect, useRef, useState } from "react";

export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        toggleRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (
        target instanceof Node &&
        !panelRef.current?.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        close();
      }
    };

    // Match the lg navigation breakpoint in Header.tsx.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const handleBreakpointChange = () => {
      if (desktop.matches) close();
    };
    handleBreakpointChange();
    desktop.addEventListener("change", handleBreakpointChange);
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktop.removeEventListener("change", handleBreakpointChange);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  return { isOpen, open, close, toggle, panelRef, toggleRef };
}
