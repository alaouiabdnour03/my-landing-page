import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, SECTION, INNER } from "./Primitives";

const ACTIVITIES = [
  "Hôtel / Riad / Maison d'Hôte",
  "Agence de Voyages / Réceptif",
  "École de Surf / Club Nautique & Loisirs"
];

const NEEDS = [
  "Répondre instantanément sur WhatsApp aux demandes",
  "Avoir des photos/vidéo professionnelles et vues de drone",
  "Éviter les erreurs d'overbooking entre Booking et Airbnb"
];

const PACKS = [
  { id: "pack1", label: "PACK I : IMMERSION DIGITALE (Reste à charge : 3 000 MAD HT)" },
  { id: "pack2", label: "PACK II : EXCELLENCE VISUELLE (Reste à charge : 4 500 MAD HT)" }
];

const CheckboxOption = ({ label, checked, onChange }) => (
  <label className="flex items-start gap-3 cursor-pointer group text-sm select-none">
    <div className="relative flex items-center justify-center mt-0.5">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div className={`h-5 w-5 rounded-md border transition-all duration-200 flex items-center justify-center shrink-0 ${
        checked
          ? "bg-brand-navy border-brand-navy shadow-sm"
          : "bg-white border-brand-navy/20 group-hover:border-brand-navy/40"
      }`}>
        {checked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
      </div>
    </div>
    <span className={`text-brand-navy/85 leading-tight transition-colors group-hover:text-brand-navy ${checked ? "font-medium text-brand-navy" : ""}`}>
      {label}
    </span>
  </label>
);

const RadioOption = ({ label, checked, onChange, name }) => (
  <label className="flex items-start gap-3 cursor-pointer group text-sm select-none">
    <div className="relative flex items-center justify-center mt-0.5">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div className={`h-5 w-5 rounded-full border transition-all duration-200 flex items-center justify-center shrink-0 ${
        checked
          ? "bg-brand-navy border-brand-navy shadow-sm"
          : "bg-white border-brand-navy/20 group-hover:border-brand-navy/40"
      }`}>
        {checked && (
          <div className="h-2 w-2 rounded-full bg-white" />
        )}
      </div>
    </div>
    <span className={`text-brand-navy/85 leading-tight transition-colors group-hover:text-brand-navy ${checked ? "font-medium text-brand-navy" : ""}`}>
      {label}
    </span>
  </label>
);

export const DiagnosticSection = () => {
  const [raisonSociale, setRaisonSociale] = useState("");
  const [ice, setIce] = useState("");
  const [cnssEffectif, setCnssEffectif] = useState("");
  const [caAnnuel, setCaAnnuel] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedNeeds, setSelectedNeeds] = useState([]);
  const [selectedPack, setSelectedPack] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);


  const toggleActivity = (act) => {
    setSelectedActivities(prev =>
      prev.includes(act) ? prev.filter(a => a !== act) : [...prev, act]
    );
  };

  const toggleNeed = (need) => {
    setSelectedNeeds(prev =>
      prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]
    );
  };

  const submit = (e) => {
    e.preventDefault();
    
    // Show success instantly — don't make user wait for FormSubmit server
    setSent(true);

    // Fire-and-forget: send in background
    fetch("https://formsubmit.co/ajax/alaouiabdnour03@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "📋 Formulaire d'Éligibilité — La MEC Conseils",
        _captcha: "false",
        _template: "table",
        _replyto: email,
        "Raison Sociale": raisonSociale,
        "ICE (Identifiant Fiscal)": ice,
        "N° CNSS & Effectif": cnssEffectif,
        "Tranche CA Annuel": caAnnuel,
        "Typologie de l'activité": selectedActivities.join(", ") || "Aucune",
        "Besoins immédiats & prioritaires": selectedNeeds.join(", ") || "Aucun",
        "Pack Sélectionné": selectedPack || "Aucun",
        "Email": email,
        "Téléphone": phone,
      }),
    })
    .then(r => r.json())
    .then(d => console.log("✅ FormSubmit:", d))
    .catch(e => console.error("❌ FormSubmit:", e));
  };

  return (
    <section id="diagnostic" className={`relative ${SECTION}`}>
      <div className={INNER}>
        <Reveal><SectionLabel>Éligibilité</SectionLabel></Reveal>
        
        <Reveal delay={1} className="mx-auto mt-6 max-w-[900px] text-center">
          <h2 className="font-bold leading-[1.05] text-[clamp(32px,4.5vw,56px)] tracking-tight text-brand-navy">
            06. Formulaire d'Éligibilité<br />
            <span className="brand-gradient-text">& Sélection du Pack</span>
          </h2>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-brand-muted max-w-2xl mx-auto">
            Remplissez ces informations pour que notre expert valide votre dossier d'aide sous 48h
          </p>
        </Reveal>

        <Reveal delay={2} className="mt-12">
          <form onSubmit={submit} className="relative mx-auto max-w-[1000px] rounded-[32px] bg-white p-6 sm:p-10 ring-1 ring-brand-navy/[0.06] shadow-[0_2px_8px_-2px_oklch(0.2_0.06_250/0.08),0_24px_60px_-24px_oklch(0.2_0.06_250/0.15)]">
            {/* Mesh highlights inside form background */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[32px]">
              <div className="absolute -left-20 -top-20 h-[280px] w-[280px] rounded-full bg-amber-500/10 blur-[90px]" />
              <div className="absolute -right-20 -bottom-20 h-[280px] w-[280px] rounded-full bg-orange-300/10 blur-[90px]" />
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              
              {/* Left Column */}
              <div className="space-y-8 md:pr-6 md:border-r border-brand-navy/[0.06]">
                
                {/* 1. Identification Section */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-brand-navy mb-5 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-navy" />
                    1. Identification de l'établissement
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Raison Sociale */}
                    <div className="grid grid-cols-[1fr_2.2fr] items-center gap-3">
                      <label className="text-sm font-medium text-brand-navy/80 text-left">Raison Sociale :</label>
                      <input 
                        type="text" 
                        required
                        value={raisonSociale} 
                        onChange={(e) => setRaisonSociale(e.target.value)} 
                        className="w-full rounded-xl border border-brand-navy/[0.1] bg-brand-bg px-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/30 focus:bg-white focus:border-brand-navy focus:outline-none transition-all"
                      />
                    </div>

                    {/* ICE */}
                    <div className="grid grid-cols-[1fr_2.2fr] items-center gap-3">
                      <label className="text-sm font-medium text-brand-navy/80 text-left">ICE (Identifiant Fiscal) :</label>
                      <input 
                        type="text" 
                        required
                        value={ice} 
                        onChange={(e) => setIce(e.target.value)} 
                        className="w-full rounded-xl border border-brand-navy/[0.1] bg-brand-bg px-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/30 focus:bg-white focus:border-brand-navy focus:outline-none transition-all"
                      />
                    </div>

                    {/* N° CNSS & Effectif */}
                    <div className="grid grid-cols-[1fr_2.2fr] items-center gap-3">
                      <label className="text-sm font-medium text-brand-navy/80 text-left">N° CNSS & Effectif :</label>
                      <input 
                        type="text" 
                        required
                        value={cnssEffectif} 
                        onChange={(e) => setCnssEffectif(e.target.value)} 
                        className="w-full rounded-xl border border-brand-navy/[0.1] bg-brand-bg px-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/30 focus:bg-white focus:border-brand-navy focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email de contact */}
                    <div className="grid grid-cols-[1fr_2.2fr] items-center gap-3">
                      <label className="text-sm font-medium text-brand-navy/80 text-left">Email de contact :</label>
                      <input 
                        type="email" 
                        required
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full rounded-xl border border-brand-navy/[0.1] bg-brand-bg px-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/30 focus:bg-white focus:border-brand-navy focus:outline-none transition-all"
                      />
                    </div>

                    {/* Téléphone */}
                    <div className="grid grid-cols-[1fr_2.2fr] items-center gap-3">
                      <label className="text-sm font-medium text-brand-navy/80 text-left">Téléphone :</label>
                      <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        className="w-full rounded-xl border border-brand-navy/[0.1] bg-brand-bg px-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/30 focus:bg-white focus:border-brand-navy focus:outline-none transition-all"
                      />
                    </div>

                    {/* Tranche CA Annuel */}
                    <div className="pt-2">
                      <label className="text-sm font-semibold text-brand-navy/85 block mb-2">Tranche CA Annuel :</label>
                      <div className="flex gap-6">
                        <RadioOption 
                          label="< 10M MAD" 
                          checked={caAnnuel === "< 10M MAD"} 
                          onChange={() => setCaAnnuel("< 10M MAD")} 
                          name="caAnnuel"
                        />
                        <RadioOption 
                          label="> 10M MAD" 
                          checked={caAnnuel === "> 10M MAD"} 
                          onChange={() => setCaAnnuel("> 10M MAD")} 
                          name="caAnnuel"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Typologie de l'activité */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-brand-navy mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-navy" />
                    2. Typologie de l'activité (Cocher)
                  </h3>
                  
                  <div className="space-y-3">
                    {ACTIVITIES.map((act) => (
                      <CheckboxOption
                        key={act}
                        label={act}
                        checked={selectedActivities.includes(act)}
                        onChange={() => toggleActivity(act)}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column */}
              <div className="space-y-8 flex flex-col justify-between">
                
                {/* 3. Vos Besoins */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-amber-500 mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    3. Vos besoins immédiats & prioritaires
                  </h3>
                  
                  <div className="space-y-3">
                    {NEEDS.map((need) => (
                      <CheckboxOption
                        key={need}
                        label={need}
                        checked={selectedNeeds.includes(need)}
                        onChange={() => toggleNeed(need)}
                      />
                    ))}
                  </div>
                </div>

                {/* 4. Sélection du Pack */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-amber-500 mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    4. Sélection du pack d'accompagnement
                  </h3>
                  
                  <div className="space-y-3">
                    {PACKS.map((pack) => (
                      <RadioOption
                        key={pack.id}
                        label={pack.label}
                        checked={selectedPack === pack.label}
                        onChange={() => setSelectedPack(pack.label)}
                        name="packSelection"
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom Disclaimer & Submit */}
                <div className="pt-4 border-t border-brand-navy/[0.06] space-y-6">
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full border border-amber-500 text-amber-500 mt-0.5">
                      <span className="text-xs sm:text-sm font-serif italic font-bold">i</span>
                    </div>
                    <p className="text-sm leading-relaxed text-brand-navy/70">
                      En soumettant ce formulaire, vous mandatez <br className="hidden lg:block" />
                      LA MEC CONSEILS pour instruire gratuitement votre <br className="hidden lg:block" />
                      dossier d'éligibilité au <strong className="text-amber-500 font-bold">financement de 90%</strong>.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-stretch sm:items-start gap-3">
                    <button
                      type="submit"
                      disabled={sent}
                      className="group inline-flex items-center justify-center gap-4 rounded-full bg-brand-navy pl-8 pr-2 py-2 text-base font-semibold text-white shadow-[0_20px_50px_-15px_oklch(0.2_0.06_250/0.5)] transition-all hover:bg-amber-500 hover:text-white cursor-pointer w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="py-2">
                        {sent ? "✓ Envoyé !" : "Valider mon dossier d'éligibilité"}
                      </span>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full ring-1 ring-white/30 transition-transform group-hover:translate-x-0.5 group-hover:ring-white/50">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </button>
                    {sent && <div className="text-sm font-semibold text-amber-500 mt-2">✓ Merci ! Votre formulaire d'éligibilité a été envoyé. Notre expert vous contactera sous 48h.</div>}
                  </div>
                </div>

              </div>

            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
