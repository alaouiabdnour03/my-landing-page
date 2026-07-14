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

const FileInput = ({ label, onChange, file }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-brand-navy/80 block text-left">{label}</label>
    <div className="relative flex items-center">
      <input
        type="file"
        onChange={onChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
      />
      <div className={`w-full rounded-xl border px-4 py-2.5 text-sm transition-all flex items-center justify-between ${file ? 'bg-amber-500/10 border-amber-500/30' : 'bg-brand-bg border-brand-navy/[0.1] hover:bg-white'}`}>
        <span className={file ? 'text-brand-navy font-medium truncate max-w-[85%]' : 'text-brand-navy/40'}>
          {file ? file.name : "Sélectionner un fichier (Optionnel)"}
        </span>
        <svg className={`w-4 h-4 shrink-0 ${file ? 'text-amber-600' : 'text-brand-navy/30'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {file ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          )}
        </svg>
      </div>
    </div>
  </div>
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [hasWebsite, setHasWebsite] = useState("");
  const [platforms, setPlatforms] = useState("");

  const [fileStatuts, setFileStatuts] = useState(null);
  const [fileRC, setFileRC] = useState(null);
  const [fileFiscale, setFileFiscale] = useState(null);
  const [fileCNSS, setFileCNSS] = useState(null);
  const [fileBilan, setFileBilan] = useState(null);  const toggleActivity = (act) => {
    setSelectedActivities(prev =>
      prev.includes(act) ? prev.filter(a => a !== act) : [...prev, act]
    );
  };

  const toggleNeed = (need) => {
    setSelectedNeeds(prev =>
      prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]
    );
  };

  const SUPABASE_URL = "https://whaackbwcuviosuulkoc.supabase.co";
  const SUPABASE_KEY = "sb_publishable_K1Pvu-Jnnej4msqPR3fH_g_w67z7RIx";

  const uploadToSupabase = async (file) => {
    if (!file) return null;
    const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const uniqueName = `${Date.now()}_${cleanName}`;
    const uploadUrl = `${SUPABASE_URL}/storage/v1/object/documents/${uniqueName}`;

    console.log("📤 Uploading to:", uploadUrl);

    const response = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_KEY,
        "Content-Type": file.type
      },
      body: file
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Supabase upload error:", response.status, errText);
      throw new Error(`[${response.status}] ${errText}`);
    }

    return `${SUPABASE_URL}/storage/v1/object/public/documents/${uniqueName}`;
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Upload files to Supabase and get their public URLs
      const [urlStatuts, urlRC, urlFiscale, urlCNSS, urlBilan] = await Promise.all([
        uploadToSupabase(fileStatuts),
        uploadToSupabase(fileRC),
        uploadToSupabase(fileFiscale),
        uploadToSupabase(fileCNSS),
        uploadToSupabase(fileBilan)
      ]);

      // 2. Submit textual data and Supabase links to Web3Forms
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "43f33592-ad19-442f-a18e-208a779f9a51",
          subject: "📋 Formulaire d'Éligibilité — La MEC Conseils",
          from_name: "La MEC Conseils Website",
          "Raison Sociale": raisonSociale,
          "ICE (Identifiant Fiscal)": ice,
          "N° CNSS & Effectif": cnssEffectif,
          "Tranche CA Annuel": caAnnuel,
          Email: email,
          "Téléphone": phone,
          "Typologie de l'activité": selectedActivities.join(", ") || "Aucune",
          "Besoins immédiats & prioritaires": selectedNeeds.join(", ") || "Aucun",
          "Pack Sélectionné": selectedPack || "Aucun",
          "A un site web ?": hasWebsite || "Non précisé",
          "Plateformes de vente": platforms || "Aucune",
          // Links to files
          "Lien Statuts": urlStatuts || "Non fourni",
          "Lien Registre de Commerce": urlRC || "Non fourni",
          "Lien Régularité Fiscale": urlFiscale || "Non fourni",
          "Lien Régularité CNSS": urlCNSS || "Non fourni",
          "Lien Bilan 2 ans": urlBilan || "Non fourni"
        })
      });

      const data = await res.json();
      console.log("✅ Web3Forms response:", data);
      
      if (data.success) {
        setSent(true);
      } else {
        alert("Erreur Web3Forms: " + (data.message || "Veuillez réessayer."));
      }
    } catch (err) {
      console.error("❌ Submission failed:", err);
      alert(`Erreur d'upload : ${err.message}\n\nVeuillez vérifier la configuration de votre bucket Supabase (doit être public et nommé "documents").`);
    } finally {
      setIsSubmitting(false);
    }
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

                {/* 3. Présence Digitale */}
                <div className="pt-4">
                  <h3 className="text-base font-bold uppercase tracking-wider text-brand-navy mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-navy" />
                    3. Présence Digitale
                  </h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="text-sm font-semibold text-brand-navy/85 block mb-3 text-left">Avez-vous un site web ?</label>
                      <div className="flex gap-6">
                        <RadioOption 
                          label="Oui" 
                          checked={hasWebsite === "Oui"} 
                          onChange={() => setHasWebsite("Oui")} 
                          name="hasWebsite"
                        />
                        <RadioOption 
                          label="Non" 
                          checked={hasWebsite === "Non"} 
                          onChange={() => setHasWebsite("Non")} 
                          name="hasWebsite"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-brand-navy/85 block mb-2 text-left">Plateformes de vente (Booking, Airbnb, etc.) :</label>
                      <input 
                        type="text" 
                        value={platforms} 
                        onChange={(e) => setPlatforms(e.target.value)} 
                        placeholder="Ex: Booking, Airbnb, Agence..."
                        className="w-full rounded-xl border border-brand-navy/[0.1] bg-brand-bg px-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/30 focus:bg-white focus:border-brand-navy focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column */}
              <div className="space-y-8 flex flex-col justify-between">
                
                {/* 4. Vos Besoins */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-amber-500 mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    4. Vos besoins immédiats & prioritaires
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

                {/* 5. Sélection du Pack */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-amber-500 mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    5. Sélection du pack d'accompagnement
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

                {/* 6. Pièces Jointes */}
                <div className="pt-2">
                  <h3 className="text-base font-bold uppercase tracking-wider text-amber-500 mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    6. Pièces jointes (Facultatif)
                  </h3>
                  
                  <div className="space-y-4">
                    <FileInput label="Statuts de l'entreprise" file={fileStatuts} onChange={(e) => setFileStatuts(e.target.files[0])} />
                    <FileInput label="Registre de commerce" file={fileRC} onChange={(e) => setFileRC(e.target.files[0])} />
                    <FileInput label="Régularité fiscale" file={fileFiscale} onChange={(e) => setFileFiscale(e.target.files[0])} />
                    <FileInput label="Régularité de soumission CNSS" file={fileCNSS} onChange={(e) => setFileCNSS(e.target.files[0])} />
                    <FileInput label="Bilan des 2 années passées" file={fileBilan} onChange={(e) => setFileBilan(e.target.files[0])} />
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
                      disabled={isSubmitting || sent}
                      className="group inline-flex items-center justify-center gap-4 rounded-full bg-brand-navy pl-8 pr-2 py-2 text-base font-semibold text-white shadow-[0_20px_50px_-15px_oklch(0.2_0.06_250/0.5)] transition-all hover:bg-amber-500 hover:text-white cursor-pointer w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="py-2">
                        {isSubmitting ? "Envoi en cours..." : sent ? "✓ Envoyé !" : "Valider mon dossier d'éligibilité"}
                      </span>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full ring-1 ring-white/30 transition-transform group-hover:translate-x-0.5 group-hover:ring-white/50">
                        {isSubmitting ? (
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <ArrowRight className="h-5 w-5" />
                        )}
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
