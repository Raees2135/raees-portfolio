import { profile } from "../../data/profile";

export function Footer() {
  return (
    <footer className="section-divider">
      <div className="mx-auto flex max-w-375 flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-fg/50 md:flex-row md:px-10">
        <p>{profile.footer.copyright}</p>
        <p>{profile.footer.tagline}</p>
      </div>
    </footer>
  );
}
