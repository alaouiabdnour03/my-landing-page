import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, SECTION, INNER, fadeUp } from "./Primitives";

const PLANS = [
  {
    name: "STAR Starter",
    description: "L'essentiel pour démarrer votre comptabilité sereinement.",
    priceYearly: 129,
    priceMonthly: 129,
    ctaLabel: "Commencer",
    features: [
      "Tenue comptable BPO (15 factures)",
      "Paie en option",
      "Reporting trimestriel",
      "Lettrage hebdomadaire",
      "Assistance Dépôt",
      "Support email",
    ],
  },
  {
    name: "STAR Business",
    description: "Pilotez votre croissance avec un CFO dédié et un reporting mensuel.",
    priceYearly: 249,
    priceMonthly: 249,
    ctaLabel: "Choisir Business",
    inheritsFrom: "Starter",
    features: [
      "Tenue comptable (50 factures)",
      "Paie incluse — 5 salariés",
      "Reporting mensuel",
      "Lettrage quotidien",
      "Cockpit Odoo personnalisé",
      "Assistance Dépôt",
      "Support prioritaire",
    ],
  },
  {
    name: "STAR Premium",
    description: "Une gestion avancée, sans limite, avec accompagnement expert.",
    pricePrefix: "Dès",
    priceYearly: 490,
    priceMonthly: 490,
    ctaLabel: "Parlons-en",
    inheritsFrom: "Business",
    features: [
      "Factures illimitées",
      "Paie illimitée",
      "Dashboard hebdomadaire",
      "Lettrage temps réel",
      "Certification Expert France",
      "Cockpit Odoo personnalisé",
      "Support illimité",
    ],
  },
];

export const PricingSection = () => {
  const [billing] = useState("yearly");

  return (
    <section id="offres" className={`relative ${SECTION}`}>
      <div className={INNER}>
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <Reveal>
            <SectionLabel>Nos Offres</SectionLabel>
            <h2 className="mt-4 text-[clamp(36px,5vw,64px)] font-bold leading-[1.02] tracking-tight text-brand-navy">
              Pilotez votre croissance,<br />
              <span className="brand-gradient-text">à votre rythme.</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-brand-muted">
              Choisissez un pack, ajustez à tout moment. Transparence, valeur et accompagnement.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => {
            const price = billing === "yearly" ? plan.priceYearly : plan.priceMonthly;
            const isHi = !!plan.highlight;
            return (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                className={`relative flex flex-col rounded-[28px] p-8 transition-all hover:-translate-y-1 ${isHi
                  ? "bg-brand-navy text-white shadow-[0_30px_80px_-30px_oklch(0.22_0.05_250/0.55)]"
                  : "glass-card text-brand-navy"
                  }`}
              >
                <h3 className={`text-2xl font-bold tracking-tight ${isHi ? "text-brand-green" : "brand-gradient-text"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${isHi ? "text-white/75" : "text-brand-navy/70"}`}>
                  {plan.description}
                </p>
                <div className="mt-7 flex items-baseline gap-1">
                  {plan.pricePrefix && (
                    <span className={`text-sm font-medium ${isHi ? "text-white/60" : "text-brand-muted"}`}>
                      {plan.pricePrefix}
                    </span>
                  )}
                  <span className={`text-6xl font-bold tracking-tight ${isHi ? "text-white" : "text-brand-navy"}`}>
                    {price}€
                  </span>
                </div>
                <div className={`mt-2 text-xs ${isHi ? "text-white/55" : "text-brand-muted"}`}>€ HT / mois</div>
                <a
                  href="#diagnostic"
                  className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${isHi
                    ? "bg-brand-green text-white hover:bg-white hover:text-brand-navy"
                    : "border-2 border-brand-green-deep text-brand-green-deep hover:bg-brand-green-deep hover:text-white"
                    }`}
                >
                  {plan.ctaLabel}
                </a>
                <div className={`mt-7 text-xs font-medium ${isHi ? "text-white/60" : "text-brand-navy/60"}`}>
                  {plan.inheritsFrom ? `Tout ce qui est dans ${plan.inheritsFrom}, plus…` : "Démarrez avec…"}
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 leading-snug ${isHi ? "text-white/90" : "text-brand-navy/85"}`}>
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${isHi ? "text-brand-green" : "text-brand-green-deep"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
