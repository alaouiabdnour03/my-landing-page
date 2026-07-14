import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, Check, Hotel, Waves, Compass, Cloud, Store, Sliders, MapPin, Search, Rocket, GraduationCap, Video, Trophy, Globe, Building, TrendingUp } from "lucide-react";
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
              <div className="text-xs tracking-[0.22em] text-brand-navy font-bold">LA MEC CONSEILS</div>
              <div className="text-xs tracking-[0.22em] text-amber-500 font-bold">L'EXPERTISE COMPTABLE</div>
            </div>
          </Reveal>



          <Reveal delay={3} className="mt-12 max-w-[850px]">
            <h1 className="font-display text-[clamp(36px,5.5vw,70px)] font-bold leading-[1.1] text-brand-navy">
              Le Nouveau Moteur de <span className="text-amber-500">Croissance</span>
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




        </motion.div>
      </section>

      {/* ───────── LE COÛT DE L'INACTION ───────── */}
      <section className={`relative ${SECTION} py-10 sm:py-14`}>
        <div className={INNER}>
          <Reveal>
            <div className="rounded-2xl bg-white ring-1 ring-black/[0.06] shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-[1fr_auto_1fr] items-stretch">
                {/* Left — stat */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-brand-navy">
                    Le Coût de l'Inaction Commerciale
                  </h2>
                  <div className="mt-4 text-[clamp(72px,14vw,110px)] font-black leading-none text-amber-500 tracking-tight">
                    85%
                  </div>
                  <p className="mt-2 text-base font-semibold text-brand-navy">
                    des demandes sans réponse sont perdues
                  </p>
                </div>

                {/* Vertical divider */}
                <div className="hidden md:flex items-center px-0">
                  <div className="w-px h-[70%] bg-brand-green/40" />
                </div>
                {/* Horizontal divider on mobile */}
                <div className="md:hidden mx-8">
                  <div className="h-px w-full bg-brand-green/30" />
                </div>

                {/* Right — explanation */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-4">
                    L'Exigence Absolue d'Immédiateté
                  </h3>
                  <p className="text-brand-navy/75 leading-relaxed text-sm">
                    En 2025, <strong>85% des voyageurs</strong> se tournent instantanément vers le concurrent direct si leur premier contact (WhatsApp, téléphone, email) ne reçoit pas de réponse qualifiée en moins de 30 secondes.
                  </p>
                  <p className="mt-4 text-brand-navy/75 leading-relaxed text-sm">
                    De plus, la commission des agences en ligne internationales (OTA) dépasse en moyenne <strong>15% à 25%</strong> de votre chiffre d'affaires, rognant votre rentabilité directe.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── L'ÉCOSYSTÈME DE VENTE DIRECTE ───────── */}
      <section className={`relative ${SECTION} py-12 sm:py-16 bg-gradient-to-b from-transparent via-gray-50/60 to-transparent`}>
        <div className={INNER}>
          <Reveal>
            <h2 className="text-center text-[clamp(16px,2.2vw,22px)] font-bold uppercase tracking-[0.15em] text-brand-navy">
              L'Écosystème de Vente Directe Connecté
            </h2>
          </Reveal>

          <Reveal delay={1} className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Card 1 — APIs */}
            <div className="flex gap-5 rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-black/[0.06] shadow-md">
              <div className="shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-pale/80 text-brand-green-deep ring-1 ring-brand-green/10">
                  <Cloud className="h-7 w-7 stroke-[1.5]" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-3">Interconnexion APIs Performante</h3>
                <p className="text-brand-navy/70 text-sm leading-relaxed">
                  Nous intégrons vos canaux de réservation et d'animation directement avec les grandes plateformes de distribution connectée internationalement.
                </p>
                <p className="mt-3 text-brand-navy/70 text-sm leading-relaxed">
                  Visez l'excellence technique et transformez décentralisément pour optimiser l'expérience et vos taux de succès.
                </p>
              </div>
            </div>

            {/* Card 2 — Boutiques */}
            <div className="flex gap-5 rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-black/[0.06] shadow-md">
              <div className="shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-pale/80 text-brand-green-deep ring-1 ring-brand-green/10">
                  <Store className="h-7 w-7 stroke-[1.5]" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-3">Boutiques &amp; Vitrines Préétablies</h3>
                <p className="text-brand-navy/70 text-sm leading-relaxed">
                  Nous déployons des vitrines digitales sur-mesure et des boutiques de commerce en ligne pour votre structure.
                </p>
                <p className="mt-3 text-brand-navy/70 text-sm leading-relaxed">
                  Mettez en avant l'essence unique de votre offre et offrez une interface claire, attractive et aide conversion.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── PLATEFORMES D'ANIMATION PRÊTES À VENDRE ───────── */}
      <section className={`relative ${SECTION} py-12 sm:py-16`}>
        <div className={INNER}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
            {/* Left Content */}
            <div>
              <div className="w-12 h-1 bg-amber-500 rounded-full mb-6" />
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-bold uppercase tracking-wide text-brand-navy leading-tight">
                Plateformes d'Animation <br />
                <span className="text-amber-500">Prêtes à Vendre</span>
              </h2>
              
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy mt-6 mb-3">
                Une Expérience Client sans Friction
              </h3>
              <p className="text-brand-navy/70 text-sm sm:text-base leading-relaxed mb-6">
                Nos solutions unifient l'image et l'acte d'achat d'un prospect voyageur pour transformer l'intention en profit instantané.
              </p>
              
              <ul className="space-y-4">
                {[
                  {
                    title: "Showrooms Web Prédéfinis",
                    desc: "Des vitrines esthétiques, fluides et optimisées pour le SEO et l'usage mobile."
                  },
                  {
                    title: "E-Boutiques de Loisirs",
                    desc: "Réservation de créneaux, cours collectifs, excursions ou packages en temps réel."
                  },
                  {
                    title: "Passerelles de Paiement",
                    desc: "Intégration locale et internationale pour un encaissement direct sur votre compte."
                  }
                ].map((item, i) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-amber-500 text-amber-500 mt-1">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <p className="text-brand-navy/75 text-sm sm:text-base leading-relaxed">
                      <strong className="font-semibold text-brand-navy">{item.title} :</strong> {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image with dotted decoration */}
            <div className="relative">
              {/* Top Right Dot Grid Decoration */}
              <div className="absolute -top-6 -right-6 -z-10 w-32 h-32 bg-[radial-gradient(#f59e0b_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-25" />
              {/* Bottom Left Dot Grid Decoration */}
              <div className="absolute -bottom-6 -left-6 -z-10 w-32 h-32 bg-[radial-gradient(#f59e0b_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-25" />
              
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
                <img
                  src="/team_meeting.png"
                  alt="Une Expérience Client sans Friction"
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SOLUTIONS ADAPTÉES À VOTRE SECTEUR ───────── */}
      <section className={`relative ${SECTION} py-12 sm:py-16 bg-gradient-to-b from-transparent via-gray-50/40 to-transparent`}>
        <div className={INNER}>
          <Reveal>
            <div className="text-center">
              <h2 className="text-[clamp(18px,2.5vw,24px)] font-bold uppercase tracking-[0.15em] text-brand-navy">
                Solutions Adaptées à Votre Secteur
              </h2>
              <div className="mx-auto mt-4 w-12 h-1 bg-amber-500 rounded-full" />
            </div>
          </Reveal>

          <Reveal delay={1} className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* Card 1 — Hébergements & Riads */}
            <div className="flex gap-4 rounded-2xl bg-white p-6 sm:p-7 ring-1 ring-black/[0.06] shadow-md hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-500 ring-1 ring-amber-500/10">
                  <Hotel className="h-6 w-6 stroke-[1.5]" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-2">Hébergements &amp; Riads</h3>
                <p className="text-brand-navy/70 text-xs sm:text-sm leading-relaxed">
                  Vitrines de prestige, centralisation multicanale et excellence commerciale via la liaison pour capter et fidéliser directeurs de talents.
                </p>
              </div>
            </div>

            {/* Card 2 — Surf Camps & Loisirs */}
            <div className="flex gap-4 rounded-2xl bg-white p-6 sm:p-7 ring-1 ring-black/[0.06] shadow-md hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-500 ring-1 ring-amber-500/10">
                  <Sliders className="h-6 w-6 stroke-[1.5]" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-2">Surf Camps &amp; Loisirs</h3>
                <p className="text-brand-navy/70 text-xs sm:text-sm leading-relaxed">
                  Vente de cours à la carte, gestion de stocks d'équipements et coordination de sessions en direct via des espaces dynamiques et engageants.
                </p>
              </div>
            </div>

            {/* Card 3 — Agences & Excursions */}
            <div className="flex gap-4 rounded-2xl bg-white p-6 sm:p-7 ring-1 ring-black/[0.06] shadow-md hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-500 ring-1 ring-amber-500/10">
                  <MapPin className="h-6 w-6 stroke-[1.5]" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-2">Agences &amp; Excursions</h3>
                <p className="text-brand-navy/70 text-xs sm:text-sm leading-relaxed">
                  Catalogues interactifs d'expériences, plannings dynamiques des guides, et suivi personnalisés des réservations en temps réel.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── ATTRACTIVITÉ & AUTORITÉ ───────── */}
      <section className={`relative ${SECTION} py-12 sm:py-16`}>
        <div className={INNER}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
            {/* Left Content */}
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-lg bg-amber-50 border border-amber-200/50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                  <Trophy className="h-3.5 w-3.5 text-amber-500 fill-amber-500/20" />
                  Attractivité &amp; Autorité
                </div>
                
                <h2 className="mt-6 text-[clamp(24px,3.5vw,36px)] font-bold uppercase tracking-wide text-brand-navy leading-tight">
                  L'ALLURE D'UNE <br />
                  ENSEIGNE <span className="text-amber-500">D'EXCEPTION</span>
                </h2>
                
                <h3 className="text-lg sm:text-xl font-bold text-brand-navy mt-6 mb-3">
                  Sublimez Votre Spot Touristique
                </h3>
                <p className="text-brand-navy/70 text-sm sm:text-base leading-relaxed mb-6">
                  Le coup de cœur d'un voyageur s'établit sur la preuve visuelle. Nous mettons en œuvre notre compétence de création artistique de classe internationale.
                </p>
                
                <div className="flex gap-4 items-center rounded-2xl bg-amber-50/70 border border-amber-500/10 p-5">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                    <Video className="h-6 w-6 fill-amber-500/20" />
                  </div>
                  <p className="text-brand-navy/75 text-xs sm:text-sm leading-relaxed">
                    <strong className="font-semibold text-brand-navy">Contenus RVA &amp; Drone 4K :</strong> Shootings aériens professionnels, images vitrines de caractère et clips montés spécifiquement pour déclencher l'acte d'achat sur vos réseaux.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Image with dotted decoration */}
            <div className="relative">
              {/* Top Right Dot Grid Decoration */}
              <div className="absolute -top-6 -right-6 -z-10 w-32 h-32 bg-[radial-gradient(#f59e0b_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-25" />
              
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
                <img
                  src="/drone_aerial_resort.png"
                  alt="L'ALLURE D'UNE ENSEIGNE D'EXCEPTION"
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PLAN DE DÉPLOIEMENT STRATÉGIQUE ───────── */}
      <section className={`relative ${SECTION} py-12 sm:py-16 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent`}>
        <div className={INNER}>
          <Reveal>
            <div className="rounded-[28px] bg-white ring-1 ring-black/[0.05] shadow-lg p-6 sm:p-10 lg:p-12">
              <div className="text-center">
                <h2 className="text-[clamp(18px,2.5vw,24px)] font-bold uppercase tracking-[0.15em] text-brand-navy">
                  Plan de Déploiement Stratégique
                </h2>
                <div className="mx-auto mt-4 w-12 h-1 bg-amber-500 rounded-full" />
              </div>

              {/* Desktop Timeline */}
              <div className="hidden md:block relative mt-16">
                {/* Horizontal Dashed Line */}
                <div className="absolute top-6 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-amber-400 z-0" />

                <div className="grid grid-cols-4 gap-4 relative z-10">
                  {[
                    {
                      w: "S1 – S2",
                      icon: Search,
                      desc: "Audit UX, audit sémantique de l'audience et lancement de l'étude d'objets."
                    },
                    {
                      w: "S3 – S5",
                      icon: (props) => (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
                          <circle cx="12" cy="12" r="2.5" />
                          <line x1="12" y1="9.5" x2="12" y2="4.5" />
                          <line x1="12" y1="14.5" x2="12" y2="19.5" />
                          <line x1="9.5" y1="12" x2="4.5" y2="12" />
                          <line x1="14.5" y1="12" x2="19.5" y2="12" />
                          <path d="M10 4.5h4" />
                          <path d="M10 19.5h4" />
                          <path d="M4.5 10v4" />
                          <path d="M19.5 10v4" />
                        </svg>
                      ),
                      desc: "Shooting drone & sol, développement et fiabilité de l'image et enrichissement API et vitrines."
                    },
                    {
                      w: "S6 – S7",
                      icon: Rocket,
                      desc: "Déploiement des VPN dédiés et intégrations des paiements et tests de reconnaissance des APIs."
                    },
                    {
                      w: "S8",
                      icon: GraduationCap,
                      desc: "Go-Live global, formation des équipes locales et révision finale des APIs."
                    }
                  ].map((step, idx) => {
                    const IconComponent = step.icon;
                    return (
                      <Reveal key={step.w} delay={idx} className="flex flex-col items-center">
                        {/* Circle marker */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-amber-500 text-amber-500 shadow-sm hover:scale-110 transition-transform duration-200 cursor-default">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        
                        {/* Title */}
                        <div className="mt-4 text-sm font-bold text-amber-500 tracking-wider">
                          {step.w}
                        </div>
                        
                        {/* Card */}
                        <div className="mt-4 w-full rounded-xl bg-white p-4 text-center ring-1 ring-black/[0.04] shadow-sm flex flex-col justify-center min-h-[110px] hover:shadow-md transition-shadow">
                          <p className="text-brand-navy/70 text-xs sm:text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Vertical Timeline */}
              <div className="block md:hidden relative mt-12 pl-6">
                {/* Vertical Dashed Line */}
                <div className="absolute left-6 top-6 bottom-6 w-px border-l border-dashed border-amber-400 z-0" />

                <div className="space-y-6 relative z-10">
                  {[
                    {
                      w: "S1 – S2",
                      icon: Search,
                      desc: "Audit UX, audit sémantique de l'audience et lancement de l'étude d'objets."
                    },
                    {
                      w: "S3 – S5",
                      icon: (props) => (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
                          <circle cx="12" cy="12" r="2.5" />
                          <line x1="12" y1="9.5" x2="12" y2="4.5" />
                          <line x1="12" y1="14.5" x2="12" y2="19.5" />
                          <line x1="9.5" y1="12" x2="4.5" y2="12" />
                          <line x1="14.5" y1="12" x2="19.5" y2="12" />
                          <path d="M10 4.5h4" />
                          <path d="M10 19.5h4" />
                          <path d="M4.5 10v4" />
                          <path d="M19.5 10v4" />
                        </svg>
                      ),
                      desc: "Shooting drone & sol, développement et fiabilité de l'image et enrichissement API et vitrines."
                    },
                    {
                      w: "S6 – S7",
                      icon: Rocket,
                      desc: "Déploiement des VPN dédiés et intégrations des paiements et tests de reconnaissance des APIs."
                    },
                    {
                      w: "S8",
                      icon: GraduationCap,
                      desc: "Go-Live global, formation des équipes locales et révision finale des APIs."
                    }
                  ].map((step, idx) => {
                    const IconComponent = step.icon;
                    return (
                      <Reveal key={step.w} delay={idx} className="flex gap-4 items-start">
                        {/* Circle marker */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-amber-500 text-amber-500 shadow-sm">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        
                        {/* Card Content */}
                        <div className="flex-1 rounded-xl bg-white p-4 ring-1 ring-black/[0.04] shadow-sm">
                          <div className="text-sm font-bold text-amber-500 tracking-wider mb-1">
                            {step.w}
                          </div>
                          <p className="text-brand-navy/70 text-xs sm:text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── MAXIMISEZ VOS MARGES ───────── */}
      <section className={`relative ${SECTION} py-12 sm:py-16`}>
        <div className={INNER}>
          <Reveal>
            <div>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-bold uppercase tracking-wide text-brand-navy leading-tight">
                MAXIMISEZ VOS MARGES : <br className="hidden sm:inline" />
                <span className="text-amber-500">LE MATCH DES CANAUX</span>
              </h2>
              <div className="mt-4 w-12 h-1 bg-amber-500 rounded-full" />
            </div>
          </Reveal>

          <div className="mt-14 max-w-5xl space-y-10 sm:space-y-12">
            
            {/* Canal 1 */}
            <Reveal delay={0}>
              <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
                {/* Icon + text */}
                <div className="flex items-center gap-4 md:w-[320px] shrink-0">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
                    <Globe className="h-7 w-7 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-navy">Canal Connecté Direct</h3>
                    <p className="text-brand-navy/60 text-sm mt-0.5">(Votre Solution)</p>
                  </div>
                </div>
                {/* Bar */}
                <div className="flex-1 w-full hidden md:block">
                  <div className="h-4 w-full rounded-full bg-amber-50 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 w-[90%] shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                  </div>
                </div>
                {/* Percentage */}
                <div className="md:w-[220px] shrink-0 md:text-right">
                  <span className="text-xl sm:text-2xl font-bold text-amber-500">90%</span>
                  <span className="text-sm font-semibold text-brand-navy ml-2">Marge Conservée</span>
                </div>
              </div>
            </Reveal>

            {/* Canal 2 */}
            <Reveal delay={1}>
              <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
                {/* Icon + text */}
                <div className="flex items-center gap-4 md:w-[320px] shrink-0">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
                    <Building className="h-7 w-7 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-navy">Canal Hybride</h3>
                    <p className="text-brand-navy/60 text-sm mt-0.5">(Opération Partagée)</p>
                  </div>
                </div>
                {/* Bar */}
                <div className="flex-1 w-full hidden md:block">
                  <div className="h-4 w-full rounded-full bg-amber-50 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 w-[60%] shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                  </div>
                </div>
                {/* Percentage */}
                <div className="md:w-[220px] shrink-0 md:text-right">
                  <span className="text-xl sm:text-2xl font-bold text-amber-500">60%</span>
                  <span className="text-sm font-semibold text-brand-navy ml-2">Marge Conservée</span>
                </div>
              </div>
            </Reveal>

            {/* Canal 3 */}
            <Reveal delay={2}>
              <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
                {/* Icon + text */}
                <div className="flex items-center gap-4 md:w-[320px] shrink-0">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
                    <TrendingUp className="h-7 w-7 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-navy">Canal OTA Classique</h3>
                    <p className="text-brand-navy/60 text-sm mt-0.5">(Booking, Expedia, Airbnb)</p>
                  </div>
                </div>
                {/* Bar */}
                <div className="flex-1 w-full hidden md:block">
                  <div className="h-4 w-full rounded-full bg-amber-50 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 w-[70%] shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                  </div>
                </div>
                {/* Percentage */}
                <div className="md:w-[220px] shrink-0 md:text-right flex flex-col justify-center">
                  <div>
                    <span className="text-xl sm:text-2xl font-bold text-amber-500">70%</span>
                    <span className="text-sm font-semibold text-brand-navy ml-2">Marge Conservée</span>
                  </div>
                  <div className="text-xs text-brand-navy/70 mt-0.5 md:mr-[30px]">(15-25% de frais)</div>
                </div>
              </div>
            </Reveal>

            {/* Bottom Callout Box */}
            <Reveal delay={3} className="pt-8">
              <div className="rounded-2xl bg-[#fffaf5] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-5xl mx-auto shadow-sm">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-amber-500 text-amber-500">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed pt-1 text-center sm:text-left">
                  En privilégiant vos canaux directs, vous récupérez jusqu'à <strong className="text-amber-500 font-bold">25% de revenus supplémentaires</strong> à chaque vente et renforcez votre rentabilité entre <strong className="text-amber-500 font-bold">10%</strong> dès la première saison.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>



      {/* ───────── PRICING ───────── */}
      <PricingSection />



      {/* ───────── DIAGNOSTIC ───────── */}
      <DiagnosticSection />

      {/* ───────── FOOTER ───────── */}
      <FooterSection />
    </main>
  );
};
