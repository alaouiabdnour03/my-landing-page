import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, SECTION, INNER } from "./Primitives";

export const PricingSection = () => {
  return (
    <section id="offres" className={`relative ${SECTION}`}>
      <div className={INNER}>
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <Reveal>
            <SectionLabel>Nos Offres</SectionLabel>
            <h2 className="mt-4 text-[clamp(36px,5vw,64px)] font-bold leading-[1.02] tracking-tight text-brand-navy">
              Bénéficiez d'un reste à charge de 10%<br />
              <span className="brand-gradient-text">grâce à notre étude d'éligibilité.</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-brand-muted">
              Prestations et solutions subventionnées à hauteur de 90% pour accélérer votre transition numérique avec notre cabinet partenaire.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Left Column: Table */}
          <Reveal className="flex flex-col gap-6">
            <div className="overflow-x-auto w-full rounded-[28px] border border-brand-navy/[0.08] bg-white shadow-[0_4px_24px_-10px_oklch(0.2_0.06_250/0.1)]">
              <div className="min-w-[500px]">
                {/* Table Header */}
                <div className="grid grid-cols-[2.2fr_1fr_1.2fr] bg-brand-navy px-7 py-5 text-xs font-semibold uppercase tracking-wider text-white">
                  <div>Prestation / Solution</div>
                  <div className="text-center">Valeur Réelle</div>
                  <div className="text-right">Reste à charge (Éligible)</div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-brand-navy/[0.06]">
                  {/* Row 1 */}
                  <div className="grid grid-cols-[2.2fr_1fr_1.2fr] items-center px-7 py-6 text-sm">
                    <div>
                      <div className="font-bold text-brand-navy text-base">Pack I : Immersion Digitale</div>
                      <div className="mt-1 text-xs text-brand-muted">Audit UX + Agent Conversationnel WhatsApp</div>
                    </div>
                    <div className="text-center">
                      <span className="line-through text-brand-navy/40 font-medium">30 000</span>
                      <div className="text-[10px] uppercase tracking-wider text-brand-navy/40">MAD</div>
                    </div>
                    <div className="text-right font-bold text-brand-green-deep text-lg">
                      3 000 MAD HT
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-[2.2fr_1fr_1.2fr] items-center px-7 py-6 text-sm">
                    <div>
                      <div className="font-bold text-brand-navy text-base">Pack II : Excellence Visuelle & Omnicanal</div>
                      <div className="mt-1 text-xs text-brand-muted">Pack I + Shooting Drone + Synchro Calendriers</div>
                    </div>
                    <div className="text-center">
                      <span className="line-through text-brand-navy/40 font-medium">45 000</span>
                      <div className="text-[10px] uppercase tracking-wider text-brand-navy/40">MAD</div>
                    </div>
                    <div className="text-right font-bold text-brand-green-deep text-lg">
                      4 450 MAD HT
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs italic leading-relaxed text-brand-navy/60">
              *Les tarifs préférentiels indiqués ci-dessus sont conditionnés par l'obtention d'une validation d'éligibilité au programme d'accompagnement partenaire géré par notre cabinet.
            </p>
          </Reveal>

          {/* Right Column: Explanatory Box */}
          <Reveal delay={1}>
            <div className="h-full rounded-[28px] border-t-4 border-brand-green bg-white p-8 ring-1 ring-brand-navy/[0.06] shadow-[0_20px_50px_-20px_oklch(0.2_0.06_250/0.15)] flex flex-col justify-between">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-brand-navy sm:text-xl">
                  <span>💡</span> Pourquoi ce tarif est possible ?
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-brand-navy/80">
                  <p>
                    Notre cabinet prend en charge l'intégralité du montage de votre dossier auprès des programmes nationaux d'aide à la transition numérique.
                  </p>
                  <p>
                    Si votre entreprise remplit les critères de taille, d'activité et d'enregistrement, l'accompagnement est{" "}
                    <strong className="font-bold text-brand-navy">subventionné à hauteur de 90%</strong>. Nous ne facturons que le reste à charge de 10% après validation de votre éligibilité.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#diagnostic"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-green-deep text-brand-green-deep px-6 py-3.5 text-sm font-semibold transition-all hover:bg-brand-green-deep hover:text-white w-full"
                >
                  <span>Tester mon éligibilité</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
