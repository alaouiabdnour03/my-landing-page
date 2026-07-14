import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, Check, Hotel, Waves, Compass, Cloud, Store, Sliders, MapPin } from "lucide-react";
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
      <section className={`relative ${SECTION}`}>
        <div className={INNER}>
          <Reveal className="flex flex-col gap-4">
            <span className="inline-block bg-amber-100/80 text-amber-800 border border-amber-200/50 rounded-lg px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider w-fit">
              Attractivité &amp; Autorité
            </span>
            <h2 className="text-[clamp(28px,4.5vw,52px)] font-bold leading-[1.1] text-brand-navy">
              L'ALLURE D'UNE ENSEIGNE D'EXCEPTION
            </h2>
          </Reveal>

          <Reveal delay={1} className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-[clamp(20px,2.5vw,28px)] font-bold text-brand-navy mb-4">
                Sublimez Votre Spot Touristique
              </h3>
              <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed mb-6">
                Le coup de cœur d'un voyageur s'établit sur la preuve visuelle. Nous mettons en œuvre nos compétences de captation artistique de calibre international.
              </p>
              <div className="rounded-2xl bg-brand-green-pale/40 border border-brand-green/10 p-5">
                <p className="text-brand-navy/85 text-sm sm:text-base leading-relaxed">
                  <strong className="font-semibold text-brand-navy">Contenu RAW &amp; Drone 4K :</strong> Shootings aériens professionnels, angles intérieurs de caractère et clips montés spécifiquement pour déclencher l'acte d'achat sur vos réseaux.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden rounded-[28px] border border-brand-navy/[0.08] bg-white p-2 shadow-xl">
              <img
                src="/drone_aerial_resort.png"
                alt="L'ALLURE D'UNE ENSEIGNE D'EXCEPTION"
                className="w-full h-auto rounded-[24px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── PLAN DE DÉPLOIEMENT STRATÉGIQUE ───────── */}
      <section className={`relative ${SECTION} bg-gradient-to-b from-transparent via-brand-green-pale/10 to-transparent`}>
        <div className={INNER}>
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full shrink-0" />
              <h2 className="text-[clamp(22px,3vw,32px)] font-bold uppercase tracking-wide text-brand-navy">
                Plan de Déploiement Stratégique
              </h2>
            </div>
          </Reveal>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative mt-24 pb-20">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-amber-400/80 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-4 gap-6 relative z-10">
              
              {/* S1 - S2 (Below Line) */}
              <div className="flex flex-col items-center">
                <div className="h-32" /> {/* empty space above the line */}
                {/* Circle marker */}
                <div className="w-6 h-6 rounded-full border-4 border-amber-400 bg-white shadow-md flex items-center justify-center my-4 animate-pulse" />
                {/* Card */}
                <Reveal delay={0} className="w-full">
                  <div className="glass-card rounded-2xl p-5 ring-1 ring-black/5 shadow-lg text-center min-h-[140px] hover:scale-[1.02] transition-transform">
                    <div className="text-amber-500 font-bold text-sm mb-2">S1 – S2</div>
                    <p className="text-brand-navy/80 text-xs sm:text-sm leading-relaxed">
                      Audit UX, audit sémantique de l'audience et lancement de l'étude d'éligibilité.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* S3 - S5 (Above Line) */}
              <div className="flex flex-col items-center">
                {/* Card */}
                <Reveal delay={1} className="w-full">
                  <div className="glass-card rounded-2xl p-5 ring-1 ring-black/5 shadow-lg text-center min-h-[140px] hover:scale-[1.02] transition-transform">
                    <div className="text-amber-500 font-bold text-sm mb-2">S3 – S5</div>
                    <p className="text-brand-navy/80 text-xs sm:text-sm leading-relaxed">
                      Shootings drone &amp; sol, développement de l'agent IA, intégration et maquettage vitrines.
                    </p>
                  </div>
                </Reveal>
                {/* Circle marker */}
                <div className="w-6 h-6 rounded-full border-4 border-amber-400 bg-white shadow-md flex items-center justify-center my-4 animate-pulse" />
                <div className="h-32" /> {/* empty space below the line */}
              </div>

              {/* S6 - S7 (Below Line) */}
              <div className="flex flex-col items-center">
                <div className="h-32" />
                {/* Circle marker */}
                <div className="w-6 h-6 rounded-full border-4 border-amber-400 bg-white shadow-md flex items-center justify-center my-4 animate-pulse" />
                {/* Card */}
                <Reveal delay={2} className="w-full">
                  <div className="glass-card rounded-2xl p-5 ring-1 ring-black/5 shadow-lg text-center min-h-[140px] hover:scale-[1.02] transition-transform">
                    <div className="text-amber-500 font-bold text-sm mb-2">S6 – S7</div>
                    <p className="text-brand-navy/80 text-xs sm:text-sm leading-relaxed">
                      Déploiement des VPN d'équipe, chiffrement, synchronisation et raccordement des APIs.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* S8 (Above Line) */}
              <div className="flex flex-col items-center">
                {/* Card */}
                <Reveal delay={3} className="w-full">
                  <div className="glass-card rounded-2xl p-5 ring-1 ring-black/5 shadow-lg text-center min-h-[140px] hover:scale-[1.02] transition-transform">
                    <div className="text-amber-500 font-bold text-sm mb-2">S8</div>
                    <p className="text-brand-navy/80 text-xs sm:text-sm leading-relaxed">
                      Go-Live global, formation des équipes locales et livraison finale des actifs.
                    </p>
                  </div>
                </Reveal>
                {/* Circle marker */}
                <div className="w-6 h-6 rounded-full border-4 border-amber-400 bg-white shadow-md flex items-center justify-center my-4 animate-pulse" />
                <div className="h-32" />
              </div>

            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="block md:hidden relative mt-12 pl-8 border-l-2 border-dashed border-amber-400/80 space-y-8">
            {[
              { w: "S1 – S2", desc: "Audit UX, audit sémantique de l'audience et lancement de l'étude d'éligibilité." },
              { w: "S3 – S5", desc: "Shootings drone & sol, développement de l'agent IA, intégration et maquettage vitrines." },
              { w: "S6 – S7", desc: "Déploiement des VPN d'équipe, chiffrement, synchronisation et raccordement des APIs." },
              { w: "S8", desc: "Go-Live global, formation des équipes locales et livraison finale des actifs." }
            ].map((step, idx) => (
              <Reveal key={step.w} delay={idx} className="relative">
                {/* Bullet */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-amber-400 bg-white shadow-sm flex items-center justify-center" />
                {/* Card */}
                <div className="glass-card rounded-2xl p-5 ring-1 ring-black/5 shadow-lg">
                  <div className="text-amber-500 font-bold text-sm mb-1">{step.w}</div>
                  <p className="text-brand-navy/80 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── MAXIMISEZ VOS MARGES ───────── */}
      <section className={`relative ${SECTION}`}>
        <div className={INNER}>
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full shrink-0" />
              <h2 className="text-[clamp(22px,3vw,32px)] font-bold uppercase tracking-wide text-brand-navy">
                Maximisez Vos Marges : Le Match des Canaux
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 max-w-4xl mx-auto space-y-6">
            {/* Bar 1 */}
            <Reveal delay={0} className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold text-brand-navy">
                <span>Canal Connecté Direct (Notre Solution)</span>
              </div>
              <div className="w-full bg-brand-navy/[0.06] rounded-full h-10 overflow-hidden ring-1 ring-black/5 relative">
                <div 
                  className="bg-gradient-to-r from-brand-navy via-brand-green-deep to-brand-green h-full rounded-full flex items-center px-4 transition-all duration-1000 shadow-inner" 
                  style={{ width: "97%" }}
                >
                  <span className="text-white text-xs sm:text-sm font-bold">97% Marge Conservée</span>
                </div>
              </div>
            </Reveal>

            {/* Bar 2 */}
            <Reveal delay={1} className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold text-brand-navy">
                <span>Canal Hybride (Acquisition Publique)</span>
              </div>
              <div className="w-full bg-brand-navy/[0.06] rounded-full h-10 overflow-hidden ring-1 ring-black/5 relative">
                <div 
                  className="bg-gradient-to-r from-[#1b2a4a] to-[#c29c66] h-full rounded-full flex items-center px-4 transition-all duration-1000" 
                  style={{ width: "95%" }}
                >
                  <span className="text-white text-xs sm:text-sm font-bold">95% Marge Conservée</span>
                </div>
              </div>
            </Reveal>

            {/* Bar 3 */}
            <Reveal delay={2} className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold text-brand-navy">
                <span>Canal OTA Classique (Booking, Expedia, Airbnb)</span>
              </div>
              <div className="w-full bg-brand-navy/[0.06] rounded-full h-10 overflow-hidden ring-1 ring-black/5 relative">
                <div 
                  className="bg-gradient-to-r from-rose-500 to-red-600 h-full rounded-full flex items-center px-4 transition-all duration-1000" 
                  style={{ width: "75%" }}
                >
                  <span className="text-white text-xs sm:text-sm font-bold">75% Marge Conservée (15-25% de frais)</span>
                </div>
              </div>
            </Reveal>

            {/* Bottom italic quote */}
            <Reveal delay={3} className="pt-6 text-center">
              <p className="text-sm italic text-brand-navy/60 leading-relaxed max-w-2xl mx-auto">
                En redirigeant seulement 40% de vos réservations vers vos vitrines propriétaires d'acquisition, vous augmentez votre rentabilité nette de 12% dès la première saison.
              </p>
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
