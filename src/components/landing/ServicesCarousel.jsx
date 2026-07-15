import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SLIDES = [
  {
    id: "creation-entreprise",
    badge: "01. Création d'Entreprise",
    title: "Freelancers & Créateurs",
    description:
      "Vous lancez votre activité en tant qu'indépendant ? Nous vous accompagnons pour poser des bases solides et éviter les pièges juridiques et fiscaux.",
    features: [
      {
        bold: "Structuration Juridique :",
        text: "Choix du statut (EURL, SASU, Micro-entreprise).",
      },
      {
        bold: "Business Plan de Lancement :",
        text: "Prévisions financières et seuil de rentabilité.",
      },
    ],
    cta: "Je crée mon entreprise",
    image: "/team_meeting.png",
    route: "/services/creation-entreprise",
  },
  {
    id: "comptabilite-fiscalite",
    badge: "02. Comptabilité & Fiscalité",
    title: "Gestion Comptable Complète",
    description:
      "Externalisez votre comptabilité et concentrez-vous sur votre cœur de métier. Notre équipe d'experts prend en charge l'ensemble de vos obligations.",
    features: [
      {
        bold: "Tenue Comptable :",
        text: "Saisie, révision et états financiers conformes aux normes IFRS.",
      },
      {
        bold: "Optimisation Fiscale :",
        text: "Stratégies légales pour réduire votre charge d'impôt.",
      },
    ],
    cta: "Optimiser ma fiscalité",
    image: "/hero-image.png",
    route: "/services/comptabilite-fiscalite",
  },
  {
    id: "conseil-strategie",
    badge: "03. Conseil & Stratégie",
    title: "Pilotage de la Croissance",
    description:
      "Bénéficiez d'un accompagnement stratégique sur-mesure pour accélérer votre développement et sécuriser vos investissements.",
    features: [
      {
        bold: "Diagnostic de Performance :",
        text: "Analyse financière approfondie et tableaux de bord décisionnels.",
      },
      {
        bold: "Levée de Fonds :",
        text: "Préparation des dossiers bancaires et recherche d'investisseurs.",
      },
    ],
    cta: "Développer ma stratégie",
    image: "/hero-image1.png",
    route: "/services/conseil-strategie",
  },
  {
    id: "transformation-digitale",
    badge: "04. Transformation Digitale",
    title: "Solutions Connectées & ERP",
    description:
      "Digitalisez vos processus métier avec nos solutions intégrées. De la facturation automatisée au CRM, nous modernisons votre infrastructure.",
    features: [
      {
        bold: "ERP & Automatisation :",
        text: "Déploiement Odoo, facturation et gestion de stock en temps réel.",
      },
      {
        bold: "Présence en Ligne :",
        text: "Sites web, référencement SEO et stratégie de contenu digital.",
      },
    ],
    cta: "Digitaliser mon activité",
    image: "/services-bg-1.png",
    route: "/services/transformation-digitale",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export const ServicesCarousel = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const navigate = useNavigate();

  const paginate = useCallback(
    (newDirection) => {
      setCurrent(([prev]) => {
        const next = (prev + newDirection + SLIDES.length) % SLIDES.length;
        return [next, newDirection];
      });
    },
    []
  );

  // Auto-play every 6s
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const slide = SLIDES[current];

  return (
    <section className="relative py-10 sm:py-14 px-[clamp(20px,5vw,80px)]">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-[2px] w-10 bg-brand-green" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green-deep">
            Tous nos services
          </span>
          <a
            href="#diagnostic"
            className="ml-1 text-brand-green-deep hover:text-amber-500 transition-colors"
          >
            <svg className="w-3.5 h-3.5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[520px] sm:min-h-[540px]">
          {/* Background Image with overlay */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id + "-bg"}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Profile avatar decoration */}
          <div className="absolute top-6 right-6 z-20 hidden sm:flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-amber-500/80 ring-2 ring-white/30 flex items-center justify-center text-white text-xs font-bold shadow-lg">
              LM
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-10 lg:p-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slide.id}
                variants={slideVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="max-w-[600px]"
              >
                {/* Badge */}
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400/90 mb-3">
                  {slide.badge}
                </span>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  {slide.title}
                </h3>

                {/* Description */}
                <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6 max-w-[520px]">
                  {slide.description}
                </p>

                {/* Feature bullets */}
                <ul className="space-y-3 mb-8">
                  {slide.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 mt-0.5">
                        <Check className="h-3 w-3 stroke-[3] text-white" />
                      </div>
                      <p className="text-white/85 text-sm leading-relaxed">
                        <strong className="font-semibold text-white">
                          {f.bold}
                        </strong>{" "}
                        {f.text}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => navigate(slide.route)}
                  className="group inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-brand-navy font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 hover:-translate-y-0.5"
                >
                  <span className="text-lg">✦</span>
                  {slide.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25 transition-all duration-300"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25 transition-all duration-300"
            aria-label="Slide suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent([i, i > current ? 1 : -1])}
                className={`rounded-full transition-all duration-400 ${
                  i === current
                    ? "w-8 h-3 bg-amber-500 shadow-lg shadow-amber-500/40"
                    : "w-3 h-3 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Aller au slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
