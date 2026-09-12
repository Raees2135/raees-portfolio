import { profile } from "../../data/profile";
import { Eyebrow } from "../ui/Eyebrow";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function Statement() {
  const { statement } = profile;

  return (
    <section className="mx-auto max-w-375 px-6 py-24 text-center md:px-10 md:py-32">
      <RevealOnScroll className="mx-auto flex max-w-2xl flex-col items-center">
        <Eyebrow text={statement.eyebrow} />
        <h2 className="mt-6 text-[clamp(2.75rem,7vw,5.7rem)] font-bold leading-[1.05] tracking-[-0.02em] font-display text-fg">
          {statement.heading}
          <br />
          <span className="text-accent italic">{statement.headingAccent}</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-fg/60 md:text-lg">
          {statement.body}
        </p>
      </RevealOnScroll>
    </section>
  );
}
