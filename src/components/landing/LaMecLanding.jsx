import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { Reveal, SectionLabel, FeatureCard, SECTION, INNER } from "./Primitives";
import { PricingSection } from "./PricingSection";
import { DiagnosticSection } from "./DiagnosticSection";
import { FooterSection } from "./FooterSection";

import iconZero from "@/assets/icon-zero.svg";
import iconTrending from "@/assets/icon-trending.png";
import iconShield from "@/assets/icon-shield.svg";
import iconDatabase from "@/assets/icon-database.svg";
import iconUsers from "@/assets/icon-users.svg";
import iconLandmark from "@/assets/icon-landmark.svg";
import iconNetwork from "@/assets/icon-network.svg";
// partner-setup-bg.jpg is served from /public

export const LaMecLanding = () => {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <main className="relative overflow-hidden bg-brand-bg text-brand-navy">
      {/* ───────── HERO ───────── */}
      <section className={`relative ${SECTION} pt-[clamp(80px,12vh,140px)] pb-[clamp(80px,12vh,140px)] flex flex-col`}>
        <AnimatedBackground />
        <motion.div style={{ y: heroParallax }} className={`relative ${INNER} flex flex-col`}>
          <Reveal className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="La MEC Conseils"
              className="h-12 w-auto object-contain"
            />
            <span className="h-10 w-px bg-black/15" />
            <div className="font-display font-semibold leading-tight">
              <div className="text-xs tracking-[0.22em] text-brand-navy">LA MAISON DE</div>
              <div className="text-xs tracking-[0.22em] text-brand-green-deep">L'EXPERTISE COMPTABLE</div>
            </div>
          </Reveal>



          <Reveal delay={3} className="mt-12 max-w-[850px]">
            <h1 className="font-display text-[clamp(36px,5.5vw,70px)] font-bold leading-[1.1] text-brand-navy">
              Le Nouveau Moteur de <span className="brand-gradient-text">Croissance</span>
              <br />
              de Votre Activité Touristique
            </h1>
          </Reveal>

          <Reveal delay={4} className="mt-6 max-w-[620px] text-lg text-brand-muted leading-relaxed">
            Connectez votre offre locale de tourisme et d'animation aux plateformes mondiales. Maximisez vos profits en direct.
          </Reveal>

          <Reveal delay={5} className="mt-8">
            <div className="w-16 h-1 bg-amber-500 rounded-full" />
          </Reveal>

          <Reveal delay={6} className="mt-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-sm font-bold tracking-wider text-brand-navy">HAKIMI IBRAHIMI</span>
              <span className="text-brand-green">|</span>
              <span className="text-sm text-brand-muted">Manager-Associé</span>
            </div>
            <a href="mailto:contact@lameconseil.com" className="mt-1 inline-block text-sm font-medium text-brand-muted hover:text-brand-green-deep transition-colors">
              contact@lameconseil.com
            </a>
          </Reveal>


        </motion.div>
      </section>

      {/* ───────── LE COÛT DE L'INACTION ───────── */}
      <section className={`relative ${SECTION}`}>
        <div className={INNER}>
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full shrink-0" />
              <h2 className="text-[clamp(22px,3vw,32px)] font-bold uppercase tracking-wide text-brand-navy">
                Le Coût de l'Inaction Commerciale
              </h2>
            </div>
          </Reveal>

          <Reveal delay={1} className="mt-16 grid gap-12 md:grid-cols-2 items-center">
            {/* Big stat left */}
            <div className="text-center md:text-left">
              <div className="text-[clamp(100px,18vw,160px)] font-black leading-none text-amber-500 tracking-tight">
                85%
              </div>
              <p className="mt-4 text-xl font-semibold text-brand-navy">
                des demandes sans réponse sont perdues
              </p>
            </div>

            {/* Right content */}
            <div>
              <h3 className="text-[clamp(20px,2.5vw,26px)] font-bold text-brand-navy mb-4">
                L'Exigence Absolue d'Immédiateté
              </h3>
              <p className="text-brand-navy/80 leading-relaxed text-sm sm:text-base">
                En 2026, <strong>85% des voyageurs et sportifs</strong> abandonnent leur processus d'achat si leur premier contact (WhatsApp, Instagram, Web) ne reçoit pas de réponse qualifiée en moins de 30 secondes.
              </p>
              <p className="mt-4 text-brand-navy/80 leading-relaxed text-sm sm:text-base">
                De plus, les commissions des agences en ligne internationales (OTAs) s'accaparent entre <strong>15% et 25%</strong> de votre chiffre d'affaires, rognant votre rentabilité directe.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── L'ÉCOSYSTÈME DE VENTE DIRECTE ───────── */}
      <section className={`relative ${SECTION} bg-gradient-to-b from-transparent via-brand-green-pale/30 to-transparent`}>
        <div className={INNER}>
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full shrink-0" />
              <h2 className="text-[clamp(22px,3vw,32px)] font-bold uppercase tracking-wide text-brand-navy">
                L'Écosystème de Vente Directe Connecté
              </h2>
            </div>
          </Reveal>

          <Reveal delay={1} className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <div className="glass-card rounded-[28px] p-8 ring-1 ring-black/[0.05] shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Interconnexion APIs Performante</h3>
              <p className="text-brand-navy/75 text-sm leading-relaxed">
                Nous intégrons vos calendriers de réservation et d'animation directement avec les plus grands moteurs et plateformes de distribution commerciale internationaux.
              </p>
              <p className="mt-4 text-brand-navy/75 text-sm leading-relaxed italic">
                Votre inventaire physique se synchronise automatiquement pour éradiquer l'overbooking en moins de 60 secondes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card rounded-[28px] p-8 ring-1 ring-black/[0.05] shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Boutiques &amp; Vitrines Préétablies</h3>
              <p className="text-brand-navy/75 text-sm leading-relaxed">
                Nous déployons des vitrines digitales sur-mesure et des boutiques de commerce en ligne pour votre structure.
              </p>
              <p className="mt-4 text-brand-navy/75 text-sm leading-relaxed italic">
                Vendez vos chambres, vos excursions, vos cours de surf ou votre matériel sans intermédiaire et encaissez directement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── INFRASTRUCTURE ───────── */}
      <section className={`relative ${SECTION} bg-gradient-to-b from-transparent via-brand-green-pale/40 to-transparent`}>
        <div className={INNER}>
          <Reveal><SectionLabel>Notre Infrastructure</SectionLabel></Reveal>
          <Reveal delay={1} className="mt-4">
            <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.05]">
              Infrastructure Odoo <span className="brand-gradient-text">&amp; Paie</span>
            </h2>
            <p className="mt-4 text-brand-muted">Cockpit complet déployé en 48h.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal className="relative rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <img src="/SOLUTION ODOO IC.svg" alt="" className="h-16 w-16 object-contain" />
                  <span className="text-2xl lowercase" style={{ color: "#8F5849", fontFamily: "'Nunito', system-ui, sans-serif", fontWeight: 600 }}>odoo</span>
                </div>
                <h4 className="mt-4 font-semibold text-brand-navy">Solution Odoo</h4>
                <p className="mt-1 text-sm text-brand-muted">Suite tout-en-un modulaire et évolutive pour centraliser vos opérations.</p>
              </Reveal>
              {[
                { icon: "/Localisation IC.svg", title: "Localisation France", text: "Plan Comptable Général (PCG) et paramétrage des cotisations." },
                { icon: "/SNYC IC.svg", title: "Sync Bancaire", text: "Lien API direct avec vos comptes pour un suivi quotidien des flux." },
                { icon: "/FRICTION IC.svg", title: "Zéro Friction", text: "Nous gérons l'intégralité du paramétrage technique et social." },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i + 1} className="glass-card rounded-2xl p-6">
                  <div className="mb-4 inline-flex items-center justify-center text-brand-green-deep">
                    <img src={c.icon} alt="" className="h-16 w-16 object-contain" />
                  </div>
                  <h4 className="mb-1 font-semibold text-brand-navy">{c.title}</h4>
                  <p className="text-sm text-brand-muted">{c.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={2} className="relative">
              <div className="glass-card relative h-full rounded-2xl p-8">
                <img src="/GESTION IC.svg" alt="" className="mb-5 h-20 w-20 object-contain" />
                <h3 className="mb-4 text-2xl font-bold">Gestion Sociale Intégrée</h3>
                <ul className="space-y-3">
                  {["Émission des bulletins.", "Déclarations sociales (DSN) et gestion des congés centralisées.", "Cohérence parfaite entre vos données RH et votre comptabilité analytique."].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-deep" />
                      <span className="text-sm text-brand-navy/80">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── PRICING ───────── */}
      <PricingSection />

      {/* ───────── PARTENAIRES ───────── */}
      <section className={`relative ${SECTION} overflow-hidden`}>
        <div className="absolute inset-0 -z-10"><AnimatedBackground variant="soft" /></div>
        <div className={INNER}>
          <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
            <Reveal className="flex flex-col justify-center">
              <SectionLabel>Partenaires</SectionLabel>
              <h2 className="mt-6 text-[clamp(36px,5vw,64px)] font-bold leading-[1.02]">
                Partenaires<br /><span className="brand-gradient-text">Domiciliation</span>
              </h2>
              <p className="mt-5 max-w-[420px] text-brand-muted">Un programme gagnant-gagnant qui crée de la valeur pour chacun.</p>
            </Reveal>
            <Reveal delay={1}>
              <div className="relative overflow-hidden rounded-[28px] bg-white p-7 sm:p-9 ring-1 ring-black/5 shadow-xl min-h-[340px]">
                <img src="/partner-setup-bg.jpg" alt="" aria-hidden loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
                <div className="relative">
                  <h3 className="text-[clamp(24px,2.6vw,34px)] font-bold leading-[1.1] text-brand-navy">
                    Frais de setup 150€ <span className="text-brand-green-deep">offerts</span><br className="hidden sm:inline" /> pour tous nos résidents.
                  </h3>
                  <p className="mt-4 max-w-[440px] text-sm text-brand-muted">Disponible pour toute nouvelle inscription de partenaire éligible au réseau.</p>
                  <a href="mailto:contact@lameconseil.com" className="group mt-7 inline-flex items-center gap-4 rounded-full bg-brand-navy pl-8 pr-2 py-2 text-base font-semibold text-white shadow-[0_20px_50px_-15px_oklch(0.2_0.06_250/0.5)] transition-all hover:bg-brand-green hover:text-brand-navy">
                    <span className="py-2">Demander l'offre</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/30 transition-transform group-hover:translate-x-0.5 group-hover:ring-brand-navy/30">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { title: "Valeur Ajoutée", text: "Offrez à vos clients bien plus qu'une adresse : un soutien humain et réactif.", pct: null },
              { title: "Apporteur 15%", text: "Un complément de revenu transparent et équitable pour nos consultants.", pct: "15%" },
              { title: "Wholesale 25%", text: "Solution marque blanche. Intégrez nos services dans vos forfaits.", pct: "25%" },
            ].map((card, idx) => (
              <Reveal key={card.title} delay={idx + 2}>
                <div className="relative h-full overflow-hidden rounded-[28px] bg-white p-7 ring-1 ring-black/5 shadow-xl">
                  {card.pct && (
                    <div aria-hidden className="pointer-events-none absolute -top-4 right-4 select-none text-[140px] font-black leading-none text-brand-green/15 tracking-tight">
                      {card.pct}
                    </div>
                  )}
                  <div className="relative">
                    <div className="h-[2px] w-10 bg-brand-green" />
                    <h3 className="mt-6 text-xl font-bold text-brand-navy">{card.title}</h3>
                    <p className="mt-3 max-w-[280px] text-sm text-brand-muted">{card.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── DIAGNOSTIC ───────── */}
      <DiagnosticSection />

      {/* ───────── FOOTER ───────── */}
      <FooterSection />
    </main>
  );
};
