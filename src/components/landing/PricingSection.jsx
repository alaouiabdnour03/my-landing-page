import React from "react";
import { Monitor, Rocket, Lightbulb, CheckCircle2 } from "lucide-react";
import { Reveal, SECTION, INNER } from "./Primitives";

export const PricingSection = () => {
  return (
    <section id="offres" className={`relative ${SECTION} py-12 sm:py-16`}>
      <div className={INNER}>
        
        {/* Top Split Layout */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
          
          {/* Left Text */}
          <Reveal className="pt-2">
            <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-4 flex flex-col gap-2">
              NOS OFFRES
              <div className="w-8 h-1 bg-amber-500 rounded-full" />
            </h3>
            <h2 className="mt-6 text-[clamp(28px,4vw,38px)] font-bold leading-tight tracking-tight text-brand-navy">
              Bénéficiez d'un reste à charge de 10% <br />
              <span className="text-amber-500">grâce à notre étude d'éligibilité.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm sm:text-base text-brand-navy/70 leading-relaxed">
              Prestations et solutions subventionnées à hauteur de 90% pour accélérer votre transition numérique avec notre cabinet partenaire.
            </p>
          </Reveal>

          {/* Right Table Card */}
          <Reveal delay={1}>
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
                      <div className="mt-0.5 text-xs text-brand-navy/60 leading-tight">Audit UX + API + Connectivité et WhatsApp</div>
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
                      <div className="mt-0.5 text-xs text-brand-navy/60 leading-tight">Visuels Touristiques Pro + Spectacles Chartres</div>
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
