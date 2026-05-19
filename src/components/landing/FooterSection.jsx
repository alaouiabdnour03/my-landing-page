import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Mail } from "lucide-react";
import { Reveal, SectionLabel, SECTION, INNER } from "./Primitives";
import teamIllustration from "@/assets/team-illustration.png";

export const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Send via Formsubmit
    fetch("https://formsubmit.co/ajax/alaouiabdnour03@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "🚀 Demande de démo — La MEC Conseils",
        Email: email,
        "Taille équipe": teamSize || "Non précisée",
      }),
    }).catch(() => {});
    setSent(true);
  };

  return (
    <>
      {/* CTA SECTION */}
      <section className={`relative ${SECTION} overflow-hidden`}>
        <div className={`${INNER} relative z-10`}>
          <Reveal>
            <div className="relative">
              <img
                src={teamIllustration}
                alt="Équipe La MEC"
                className="pointer-events-none relative z-10 mx-auto -mb-6 block w-full max-w-[920px] select-none object-contain"
                style={{ maxHeight: 180 }}
              />
            </div>
            <div className="relative overflow-hidden rounded-[32px] bg-brand-navy p-[clamp(28px,4vw,56px)] text-white shadow-[0_40px_120px_-40px_oklch(0.2_0.06_250/0.6)]">
              <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-green/30 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-brand-green-deep/25 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <SectionLabel><span className="text-brand-green">Contact</span></SectionLabel>
                  <h2 className="mt-4 font-display text-[clamp(28px,4vw,44px)] font-semibold leading-[1.05] tracking-[-0.02em]">
                    Prêt à accélérer votre croissance ?
                  </h2>
                  <p className="mt-4 max-w-md text-sm text-white/65">
                    Échangeons sur vos enjeux et découvrons comment l'Offre STAR peut transformer votre gestion d'entreprise.
                  </p>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@votre-domaine.com"
                    className="h-12 rounded-full bg-white px-5 text-sm text-brand-navy placeholder:text-brand-navy/40 outline-none ring-1 ring-transparent focus:ring-brand-green"
                  />
                  <div className="relative">
                    <select
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="h-12 w-full appearance-none rounded-full bg-white/10 px-5 pr-10 text-sm text-white outline-none ring-1 ring-white/15 focus:ring-brand-green"
                    >
                      <option value="" className="text-brand-navy">Combien de personnes dans votre équipe ?</option>
                      <option value="1-5" className="text-brand-navy">1 – 5</option>
                      <option value="6-20" className="text-brand-navy">6 – 20</option>
                      <option value="21-50" className="text-brand-navy">21 – 50</option>
                      <option value="50+" className="text-brand-navy">50+</option>
                    </select>
                    <ArrowUpRight className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-white/60" />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-7 text-sm font-semibold text-brand-navy transition-all hover:bg-white"
                  >
                    {sent ? "Envoyé ✓" : "Demander une démo"}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-brand-navy/10 bg-white px-[clamp(20px,5vw,80px)] py-10">
        <div className={INNER}>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <img
                src="https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/Tests/logoipsum-415.svg"
                alt="La MEC Conseils"
                style={{ filter: "brightness(0)", height: 28 }}
              />
              <span className="h-6 w-px bg-black/15" />
              <div className="font-display font-semibold leading-tight">
                <div className="text-xs tracking-[0.22em] text-brand-navy">LA MEC CONSEILS</div>
                <div className="text-xs tracking-[0.22em] text-brand-green-deep">L'EXPERTISE DIGITALE</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <a href="mailto:contact@lameconseil.com" className="inline-flex items-center gap-2 text-sm text-brand-navy/70 transition-colors hover:text-brand-green-deep">
                <Mail className="h-4 w-4" /> contact@lameconseil.com
              </a>
              <a href="https://www.linkedin.com/company/maison-d-expertise-comptable/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-white transition-colors hover:bg-brand-green-deep">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-brand-navy/10 pt-5 text-center text-[11px] text-brand-navy/40">
            © {new Date().getFullYear()} La MEC Conseils. Tous droits réservés.
          </div>
        </div>
      </footer>
    </>
  );
};
