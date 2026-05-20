import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, SECTION, INNER } from "./Primitives";

const PAIN_POINTS = [
  "Saisie chronophage", "Gestion RH / Paie", "Visibilité Cash-flow",
  "TVA & déclarations", "Reporting & KPIs", "Facturation clients",
  "Notes de frais",
];
const CHANNELS = [
  "Service B2B", "E-commerce (Amazon, Shopify)", "Boutique physique",
  "Marketplace", "Abonnement / SaaS",
];
const CERTIF_LEVELS = [
  "Assistance simple au dépôt", "Signature Expert-Comptable France", "Pas encore défini",
];
const STRUCTURES = ["SAS / SASU", "SARL / EURL", "SA", "Auto-entrepreneur", "Autre"];

const Chip = ({ active, onClick, children, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[13px] sm:text-[14px] font-normal transition-all duration-200 cursor-pointer ${
      active
        ? "bg-brand-navy text-white shadow-[0_4px_12px_-4px_oklch(0.2_0.06_250/0.4)] ring-1 ring-brand-navy font-medium"
        : "bg-white text-brand-navy/70 border border-brand-navy/[0.08] shadow-[0_2px_6px_-2px_oklch(0.2_0.06_250/0.05)] hover:bg-brand-green-pale/40 hover:text-brand-navy hover:border-brand-navy/20 hover:scale-[1.01]"
    } ${className ?? ""}`}
  >
    <span>{children}</span>
    {active && <Check className="h-3.5 w-3.5 text-white shrink-0" strokeWidth={3} />}
  </button>
);

const getBadgeCls = (num) => {
  if (num === "03") return "bg-violet-100 text-violet-700 ring-1 ring-violet-200/50";
  if (num === "06") return "bg-orange-100 text-orange-700 ring-1 ring-orange-200/50";
  return "bg-brand-green-pale/80 text-brand-green-deep ring-1 ring-brand-green/20";
};

const Field = ({ number, label, children, featured, className }) => (
  <div
    className={`relative rounded-[28px] bg-white/95 backdrop-blur-sm p-6 ring-1 ring-brand-navy/[0.06] shadow-[0_2px_8px_-2px_oklch(0.2_0.06_250/0.08),0_24px_60px_-24px_oklch(0.2_0.06_250/0.22)] ${
      featured ? "ring-brand-green/20" : ""
    } ${className ?? ""}`}
  >
    <div className="mb-4 flex items-center gap-3">
      <span className={`text-[10px] font-bold h-5.5 w-5.5 rounded-full flex items-center justify-center shrink-0 ${getBadgeCls(number)}`}>
        {number}
      </span>
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-navy/85">{label}</span>
    </div>
    {children}
  </div>
);

const inputCls = "w-full rounded-full border border-brand-navy/[0.08] bg-white px-5 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/40 shadow-[0_2px_6px_-2px_oklch(0.2_0.06_250/0.05)] focus:bg-white focus:border-brand-green focus:outline-none transition-all";

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

            <div className="grid gap-6 md:grid-cols-3 lg:gap-10 relative z-10">
              {/* Colonne Gauche */}
              <div className="flex flex-col gap-8 md:pt-16">
                <Field number="02" label="Données de volume">
                  <div className="flex flex-col gap-3 items-start">
                    <input type="text" inputMode="numeric" value={factures} onChange={(e) => setFactures(e.target.value)} placeholder="Factures / mois" className={`${inputCls} w-full sm:w-[170px]`} />
                    <input type="text" inputMode="numeric" value={effectif} onChange={(e) => setEffectif(e.target.value)} placeholder="Effectif" className={`${inputCls} w-full sm:w-[170px]`} />
                    <input type="text" value={ca} onChange={(e) => setCa(e.target.value)} placeholder="CA annuel" className={`${inputCls} w-full sm:w-[170px]`} />
                  </div>
                </Field>
                <Field number="03" label="Points de douleur prioritaires">
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {PAIN_POINTS.map((p) => (
                      <Chip key={p} active={pains.includes(p)} onClick={() => toggle(pains, setPains, p)}>{p}</Chip>
                    ))}
                  </div>
                </Field>
              </div>

              {/* Colonne Centrale */}
              <div className="flex flex-col gap-12">
                <Field number="01" label="Structure / Entreprise" className="md:scale-110 shadow-2xl z-20" featured>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {STRUCTURES.map((s) => (
                      <Chip key={s} active={structure === s} onClick={() => setStructure(s)}>{s}</Chip>
                    ))}
                  </div>
                </Field>
                <Field number="05" label="Niveau de certification">
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {CERTIF_LEVELS.map((c) => (
                      <Chip key={c} active={certif === c} onClick={() => setCertif(c)}>{c}</Chip>
                    ))}
                  </div>
                </Field>
              </div>

              {/* Colonne Droite */}
              <div className="flex flex-col gap-8 md:pt-24">
                <Field number="04" label="Canaux de distribution">
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {CHANNELS.map((c) => (
                      <Chip key={c} active={channels.includes(c)} onClick={() => toggle(channels, setChannels, c)}>{c}</Chip>
                    ))}
                  </div>
                </Field>
                <Field number="06" label="Vos coordonnées">
                  <div className="flex flex-col gap-3 items-start w-full">
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Nom de la société" className={`${inputCls} w-full`} />
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@société.com" className={`${inputCls} w-full`} />
                    <p className="mt-2 text-xs text-brand-navy/50 leading-relaxed">Réponse personnalisée sous 48h,<br />sans engagement.</p>
                  </div>
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
