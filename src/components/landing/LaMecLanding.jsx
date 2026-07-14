import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, Check, Hotel, Waves, Compass } from "lucide-react";
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

      {/* ───────── PLATEFORMES D'ANIMATION PRÊTES À VENDRE ───────── */}
      <section className={`relative ${SECTION}`}>
        <div className={INNER}>
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full shrink-0" />
              <h2 className="text-[clamp(22px,3vw,32px)] font-bold uppercase tracking-wide text-brand-navy">
                Plateformes d'Animation Prêtes à Vendre
              </h2>
            </div>
          </Reveal>

          <Reveal delay={1} className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-[clamp(20px,2.5vw,28px)] font-bold text-brand-navy mb-4">
                Une Expérience Client sans Friction
              </h3>
              <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed mb-6">
                Nos solutions unifient l'image et l'acte d'achat d'un prospect voyageur pour transformer l'intérêt en profit instantané :
              </p>
              
              <ul className="space-y-4">
                {[
                  {
                    title: "Showrooms Web Préétablis",
                    desc: "Des vitrines esthétiques, fluides et optimisées pour le SEO et l'usage mobile."
                  },
                  {
                    title: "E-Boutiques de Loisirs",
                    desc: "Réservation de créneaux, cours collectifs, excursions ou packages en temps réel."
                  },
                  {
                    title: "Passerelles de Paiement",
                    desc: "Intégration locale et internationale pour un encaissement direct sur vos comptes."
                  }
                ].map((item, i) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold text-lg leading-none mt-0.5">✦</span>
                    <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed">
                      <strong className="font-semibold text-brand-navy">{item.title} :</strong> {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden rounded-[28px] border border-brand-navy/[0.08] bg-white p-2 shadow-xl">
              <img
                src="/team_meeting.png"
                alt="Une Expérience Client sans Friction"
                className="w-full h-auto rounded-[24px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── SOLUTIONS ADAPTÉES À VOTRE SECTEUR ───────── */}
      <section className={`relative ${SECTION} bg-gradient-to-b from-transparent via-brand-green-pale/20 to-transparent`}>
        <div className={INNER}>
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full shrink-0" />
              <h2 className="text-[clamp(22px,3vw,32px)] font-bold uppercase tracking-wide text-brand-navy">
                Solutions Adaptées à Votre Secteur
              </h2>
            </div>
          </Reveal>

          <Reveal delay={1} className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="glass-card rounded-[28px] p-7 ring-1 ring-black/[0.05] shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="h-12 w-12 rounded-2xl bg-amber-100/80 text-amber-800 flex items-center justify-center mb-6">
                <Hotel className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">Hébergements &amp; Riads</h3>
              <p className="text-brand-navy/75 text-sm leading-relaxed">
                Vitrines de prestige, synchronisation multicanale et assistants conversationnels IA bilingues pour capter la clientèle d'affaires et de loisirs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card rounded-[28px] p-7 ring-1 ring-black/[0.05] shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="h-12 w-12 rounded-2xl bg-amber-100/80 text-amber-800 flex items-center justify-center mb-6">
                <Waves className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">Surf Camps &amp; Loisirs</h3>
              <p className="text-brand-navy/75 text-sm leading-relaxed">
                Vente de cours en ligne, gestion de stocks d'équipements, réservations de sessions et création de packages hybrides d'hébergement/sport.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card rounded-[28px] p-7 ring-1 ring-black/[0.05] shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="h-12 w-12 rounded-2xl bg-amber-100/80 text-amber-800 flex items-center justify-center mb-6">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">Agences &amp; Excursions</h3>
              <p className="text-brand-navy/75 text-sm leading-relaxed">
                Catalogues interactifs d'expériences, plannings dynamiques de guides, et devis personnalisés configurés pour un envoi automatique.
              </p>
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
