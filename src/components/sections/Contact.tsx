import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { profile } from "../../data/profile";
import { SectionLabel } from "../ui/SectionLabel";
import { SocialLink } from "../ui/SocialLink";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-divider mx-auto flex min-h-[min(100vh-78px,30rem)] max-w-375 flex-col justify-center px-6 py-24 text-center md:px-10 md:py-32"
    >
      <RevealOnScroll className="flex flex-col items-center">
        <SectionLabel label="05 / CONTACT" />
        <h2 className="mt-6 text-[clamp(3rem,8vw,6.9rem)] font-bold leading-[1.02] tracking-[-0.02em] font-display text-fg">
          {profile.contact.headingLine1}
          <br />
          {profile.contact.headingLine2}
        </h2>
        <p className="mt-4 max-w-lg text-base text-fg/60">
          {profile.contact.body}
        </p>

        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 border-b border-accent/30 pb-1 font-display text-[clamp(1.25rem,3vw,2.2rem)] font-semibold text-accent transition-colors hover:border-accent"
        >
          {profile.email}
          <ArrowUpRight className="size-6" />
        </a>
      </RevealOnScroll>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="mt-10 flex flex-wrap justify-center gap-3"
      >
        {profile.socials.map((social) => (
          <SocialLink key={social.label} social={social} />
        ))}
      </motion.div>
    </section>
  );
}
