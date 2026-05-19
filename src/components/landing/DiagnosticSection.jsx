import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, SECTION, INNER } from "./Primitives";

const PAIN_POINTS = [
  "Saisie chronophage", "Gestion RH / Paie", "Visibilité Cash-flow",
  "Clôtures mensuelles", "TVA & déclarations", "Reporting & KPIs",
  "Facturation clients", "Note de frais",
];
const CHANNELS = [
  "Service B2B", "E-commerce (Amazon, Shopify)", "Boutique physique",
  "Marketplace", "Abonnement / SaaS",
];
const CERTIF_LEVELS = [
  "Assistance simple au dépôt", "Signature Expert-Comptable France", "Pas encore défini",
];
const STRUCTURES = ["SAS / SASU", "SARL / EURL", "SA", "Auto-entrepreneur", "Autre"];

const Chip = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
      active
        ? "bg-brand-navy text-white shadow-[0_8px_24px_-10px_oklch(0.2_0.06_250/0.6)] ring-1 ring-brand-navy/40"
        : "bg-white text-brand-navy/70 ring-1 ring-brand-navy/10 hover:bg-brand-green-pale/60 hover:text-brand-navy"
    }`}
  >
    <span>{children}</span>
    {active && <Check className="h-3.5 w-3.5 text-brand-green" strokeWidth={3} />}
  </button>
);

const Field = ({ number, label, children, featured, className }) => (
  <div
    className={`relative rounded-[28px] bg-white/95 backdrop-blur-sm p-6 ring-1 ring-brand-navy/[0.06] shadow-[0_2px_8px_-2px_oklch(0.2_0.06_250/0.08),0_24px_60px_-24px_oklch(0.2_0.06_250/0.22)] ${
      featured ? "ring-brand-green/20" : ""
    } ${className ?? ""}`}
  >
    <div className="mb-4 flex items-center gap-3">
      <span className="text-sm font-semibold text-brand-green-deep">{number}</span>
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-navy/80">{label}</span>
    </div>
    {children}
  </div>
);

const inputCls = "w-full rounded-xl border-0 bg-brand-green-pale/40 px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 ring-1 ring-transparent focus:bg-white focus:ring-brand-green focus:outline-none transition-all";

export const DiagnosticSection = () => {
  const [structure, setStructure] = useState("");
  const [pains, setPains] = useState([]);
  const [channels, setChannels] = useState([]);
  const [certif, setCertif] = useState("");
  const [factures, setFactures] = useState("");
  const [effectif, setEffectif] = useState("");
  const [ca, setCa] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const toggle = (list, setList, value) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const submit = (e) => {
    e.preventDefault();
    // Send via Formsubmit
    fetch("https://formsubmit.co/ajax/alaouiabdnour03@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "📋 Nouveau diagnostic — La MEC Conseils",
        Société: company || "Non précisé",
        Email: email,
        Structure: structure || "—",
        "Points de douleur": pains.join(", ") || "—",
        "Factures/mois": factures || "—",
        Effectif: effectif || "—",
        "CA prévisionnel": ca || "—",
        Canaux: channels.join(", ") || "—",
        Certification: certif || "—",
      }),
    }).catch(() => {});
    setSent(true);
  };

  return (
    <section id="diagnostic" className={`relative ${SECTION}`}>
      <div className={INNER}>
        <Reveal><SectionLabel>Notre Approche</SectionLabel></Reveal>
        <Reveal delay={1} className="mx-auto mt-6 max-w-[900px] text-center">
          <h2 className="font-bold leading-[1.02] text-[clamp(36px,5.5vw,72px)] tracking-tight">
            Diagnostic{" "}
            <em className="font-serif italic font-normal text-brand-green-deep">intelligent</em>
            <br />de vos besoins
          </h2>
          <p className="mt-5 text-brand-muted">
            Remplissez ce diagnostic en 2 minutes — nous calibrons l'offre idéale selon votre budget et votre volume.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <form onSubmit={submit} className="relative mt-14">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -left-20 top-20 h-[380px] w-[380px] rounded-full bg-brand-green/25 blur-[120px]" />
              <div className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-violet-300/30 blur-[130px]" />
              <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-orange-200/25 blur-[120px]" />
            </div>

            <div className="space-y-12">
              <div className="grid gap-x-12 gap-y-12 md:grid-cols-3 md:items-center">
                <Field number="02" label="Données de volume">
                  <div className="flex flex-wrap gap-2">
                    <input type="text" inputMode="numeric" value={factures} onChange={(e) => setFactures(e.target.value)} placeholder="Factures / mois" className={`${inputCls} w-auto`} />
                    <input type="text" inputMode="numeric" value={effectif} onChange={(e) => setEffectif(e.target.value)} placeholder="Effectif" className={`${inputCls} w-auto`} />
                    <input type="text" value={ca} onChange={(e) => setCa(e.target.value)} placeholder="CA annuel" className={`${inputCls} w-auto`} />
                  </div>
                </Field>
                <Field number="01" label="Structure / Entreprise" featured>
                  <div className="flex flex-wrap gap-2">
                    {STRUCTURES.map((s) => (
                      <Chip key={s} active={structure === s} onClick={() => setStructure(s)}>{s}</Chip>
                    ))}
                  </div>
                </Field>
                <Field number="04" label="Canaux de distribution">
                  <div className="flex flex-wrap gap-2">
                    {CHANNELS.map((c) => (
                      <Chip key={c} active={channels.includes(c)} onClick={() => toggle(channels, setChannels, c)}>{c}</Chip>
                    ))}
                  </div>
                </Field>
              </div>

              <div className="grid gap-x-12 gap-y-12 md:grid-cols-3 md:items-center">
                <Field number="03" label="Points de douleur prioritaires">
                  <div className="flex flex-wrap gap-2">
                    {PAIN_POINTS.map((p) => (
                      <Chip key={p} active={pains.includes(p)} onClick={() => toggle(pains, setPains, p)}>{p}</Chip>
                    ))}
                  </div>
                </Field>
                <Field number="05" label="Niveau de certification">
                  <div className="flex flex-wrap gap-2">
                    {CERTIF_LEVELS.map((c) => (
                      <Chip key={c} active={certif === c} onClick={() => setCertif(c)}>{c}</Chip>
                    ))}
                  </div>
                </Field>
                <Field number="06" label="Vos coordonnées">
                  <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Nom de la société" className={inputCls} />
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@société.com" className={`${inputCls} mt-2`} />
                  <p className="mt-3 text-xs text-brand-navy/50">Réponse personnalisée sous 48h,<br />sans engagement.</p>
                </Field>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-3">
              <button
                type="submit"
                className="group inline-flex items-center gap-4 rounded-full bg-brand-navy pl-8 pr-2 py-2 text-base font-semibold text-white shadow-[0_20px_50px_-15px_oklch(0.2_0.06_250/0.5)] transition-all hover:bg-brand-green hover:text-brand-navy"
              >
                <span className="py-2">Envoyer mon diagnostic</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/30 transition-transform group-hover:translate-x-0.5 group-hover:ring-brand-navy/30">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </button>
              {sent && <div className="text-xs text-brand-green-deep">✓ Merci ! Votre diagnostic a été envoyé.</div>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
