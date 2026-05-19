import React from "react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export const Reveal = ({ children, delay = 0, className, as = "div" }) => {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
};

export const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3">
    <span className="h-[2px] w-10 bg-brand-green" />
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green-deep">
      {children}
    </span>
  </div>
);

export const FeatureCard = ({ icon, title, text, i = 0, bareIcon = false }) => (
  <Reveal delay={i} className="group relative">
    <div className="glass-card relative h-full rounded-2xl p-7 transition-transform duration-500 group-hover:-translate-y-1">
      {bareIcon ? (
        <div className="mb-6 inline-flex items-center justify-center text-brand-green-deep">
          {icon}
        </div>
      ) : (
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-green-pale text-brand-green-deep ring-1 ring-brand-green/15">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold text-brand-navy">{title}</h3>
      <p className="text-sm leading-relaxed text-brand-muted">{text}</p>
    </div>
  </Reveal>
);

export const SECTION = "py-[clamp(56px,9vh,120px)] px-[clamp(20px,5vw,80px)]";
export const INNER = "mx-auto w-full max-w-[1200px]";
export { fadeUp };
