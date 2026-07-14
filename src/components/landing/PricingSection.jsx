import React from "react";
import { Monitor, Rocket, Lightbulb, CheckCircle2 } from "lucide-react";
import { Reveal, SectionLabel, SECTION, INNER } from "./Primitives";

export const PricingSection = () => {
  return (
    <section id="offres" className={`relative ${SECTION} py-12 sm:py-16`}>
      <div className={INNER}>
        
        {/* Top Split Layout */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.8fr] items-start">
          
          {/* Left Card: Offre Spéciale */}
          <Reveal>
            <div className="rounded-[32px] bg-[#fffaf5] border border-amber-500/10 p-8 sm:p-10 flex flex-col items-start shadow-sm h-full relative overflow-hidden">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-white px-4 py-1.5 text-xs font-bold text-amber-500 uppercase tracking-wider mb-8 shadow-sm">
                <Rocket className="h-4 w-4 stroke-[2.5]" />
                LANCEMENT SAISON 2026
              </div>

              {/* Title */}
              <h2 className="text-[clamp(32px,3.5vw,42px)] font-bold leading-tight tracking-tight text-brand-navy mb-6">
                Offre Spéciale<br />
                <span className="text-amber-500">Premium</span>
              </h2>

              {/* Text */}
              <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed mb-10 max-w-sm">
                Afin de propulser notre écosystème, les <strong className="text-amber-500 font-bold">2 premiers</strong> opérateurs touristiques validés bénéficieront d'une priorité d'exécution absolue sous <strong className="text-amber-500 font-bold">15 jours</strong> et de la gratuité complète du premier mois de maintenance IA.
              </p>

              {/* Button */}
              <a href="#diagnostic" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-amber-600 shadow-lg shadow-amber-500/25 mt-auto">
                <span>Découvrir les offres</span>
                <span className="font-sans">→</span>
              </a>
            </div>
          </Reveal>

          {/* Right Column: Headers + Table Card */}
          <div className="flex flex-col gap-8">
            <Reveal delay={1}>
              <SectionLabel>NOS OFFRES</SectionLabel>
              <h2 className="mt-6 text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight text-brand-navy max-w-2xl">
                05. Bénéficiez d'un reste à charge de 10% <br className="hidden sm:block" />
                <span className="brand-gradient-text">grâce à notre étude d'éligibilité.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm sm:text-base text-brand-navy/70 leading-relaxed">
                Prestations et solutions subventionnées à hauteur de 90% pour accélérer votre transition numérique avec notre cabinet partenaire.
              </p>
            </Reveal>

            {/* Table Card */}
            <Reveal delay={2}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 border border-black/5">
                {/* Table Header */}
                <div className="hidden md:grid grid-cols-[2.2fr_1fr_1.2fr] bg-amber-500 px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-white">
                  <div>PRESTATION / SOLUTION</div>
                  <div className="text-center">VALEUR RÉELLE</div>
                  <div className="text-right">
                    RESTE À CHARGE
                    <div className="text-[9px] font-medium tracking-normal mt-0.5 opacity-90">(10% SEULEMENT)</div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-black/5 px-2">
                  {/* Row 1 */}
                  <div className="flex flex-col md:grid md:grid-cols-[2.2fr_1fr_1.2fr] md:items-center p-4 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                        <Monitor className="h-6 w-6 stroke-[1.5]" />
                      </div>
                      <div>
                        <div className="font-bold text-brand-navy text-sm">Pack 1 : Immersion Digitale</div>
                        <div className="mt-0.5 text-xs text-brand-navy/60 leading-tight">Audit UX + Agent Conversationnel WhatsApp</div>
                      </div>
                    </div>
                    <div className="flex justify-between md:block text-center font-semibold text-brand-navy/60 text-sm">
                      <span className="md:hidden text-xs uppercase tracking-wider">Valeur réelle:</span>
                      30 000 MAD HT
                    </div>
                    <div className="flex justify-between md:block text-right font-bold text-amber-500 text-sm sm:text-base">
                      <span className="md:hidden text-xs uppercase tracking-wider text-brand-navy/60">Reste à charge:</span>
                      3 000 MAD HT
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col md:grid md:grid-cols-[2.2fr_1fr_1.2fr] md:items-center p-4 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                        <Rocket className="h-6 w-6 stroke-[1.5]" />
                      </div>
                      <div>
                        <div className="font-bold text-brand-navy text-sm">Pack 2 : Excellence Visuelle & Omnicanal</div>
                        <div className="mt-0.5 text-xs text-brand-navy/60 leading-tight">Pack IA + Shooting Drone + Synchro Calendriers</div>
                      </div>
                    </div>
                    <div className="flex justify-between md:block text-center font-semibold text-brand-navy/60 text-sm">
                      <span className="md:hidden text-xs uppercase tracking-wider">Valeur réelle:</span>
                      45 000 MAD HT
                    </div>
                    <div className="flex justify-between md:block text-right font-bold text-amber-500 text-sm sm:text-base">
                      <span className="md:hidden text-xs uppercase tracking-wider text-brand-navy/60">Reste à charge:</span>
                      4 450 MAD HT
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Callout */}
        <Reveal delay={2} className="mt-10">
          <div className="rounded-2xl bg-[#fffaf5] p-6 sm:p-8 sm:px-10 border border-amber-500/10 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full">
            
            {/* Left Lightbulb */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-amber-500/20 bg-amber-50 text-amber-500 md:self-center">
              <Lightbulb className="h-10 w-10 stroke-[1.5]" />
            </div>

            {/* Right List Items */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 w-full">
              {/* Item 1 */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-amber-500">Pourquoi ce tarif est possible ?</h3>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500 mt-0.5 stroke-[1.5]" />
                  <p className="text-sm text-brand-navy/80 leading-relaxed">
                    Notre cabinet prend en charge intégralement le montage de votre dossier auprès des programmes nationaux d'aide à la transition numérique.
                  </p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex gap-3 items-start md:pt-[42px]">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500 mt-0.5 stroke-[1.5]" />
                <p className="text-sm text-brand-navy/80 leading-relaxed">
                  Si votre entreprise remplit les critères de taille, d'activité et d'enregistrement, l'accompagnement est <strong className="text-amber-500 font-bold">subventionné à hauteur de 90%.</strong>
                </p>
              </div>
              
              {/* Item 3 */}
              <div className="flex gap-3 items-start md:pt-[42px]">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500 mt-0.5 stroke-[1.5]" />
                <p className="text-sm text-brand-navy/80 leading-relaxed">
                  Il ne vous reste que <strong className="text-amber-500 font-bold">10%</strong> à la facturation de reste à charge, selon l'aide adaptée à vos accès éligibles.
                </p>
              </div>
            </div>
            
          </div>
          
          <p className="text-center text-xs italic text-brand-navy/60 mt-6 max-w-2xl mx-auto">
            *Sous réserve d'éligibilité et décision de validation par l'Agence concernée.
          </p>
        </Reveal>

      </div>
    </section>
  );
};
