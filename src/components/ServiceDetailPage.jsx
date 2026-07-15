import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const SERVICES_DATA = {
  "creation-entreprise": {
    badge: "01",
    title: "Création d'Entreprise",
    subtitle: "Freelancers & Créateurs",
    heroDescription:
      "Vous lancez votre activité en tant qu'indépendant ? Nous vous accompagnons pour poser des bases solides et éviter les pièges juridiques et fiscaux.",
    image: "/team_meeting.png",
    sections: [
      {
        title: "Structuration Juridique",
        description:
          "Choix du statut juridique le plus adapté à votre situation : EURL, SASU, Micro-entreprise, ou Société Anonyme. Nous analysons votre projet, votre chiffre d'affaires prévisionnel et votre situation personnelle pour vous orienter vers la meilleure option.",
        points: [
          "Analyse comparative des statuts juridiques",
          "Rédaction des statuts et formalités d'immatriculation",
          "Accompagnement auprès du tribunal de commerce",
          "Conseil en protection du patrimoine personnel",
        ],
      },
      {
        title: "Business Plan de Lancement",
        description:
          "Élaboration d'un business plan complet incluant les prévisions financières, le seuil de rentabilité et la stratégie de croissance.",
        points: [
          "Prévisions financières sur 3 ans",
          "Analyse du seuil de rentabilité",
          "Stratégie de financement et levée de fonds",
          "Plan de trésorerie détaillé",
        ],
      },
    ],
  },
  "comptabilite-fiscalite": {
    badge: "02",
    title: "Comptabilité & Fiscalité",
    subtitle: "Gestion Comptable Complète",
    heroDescription:
      "Externalisez votre comptabilité et concentrez-vous sur votre cœur de métier. Notre équipe d'experts prend en charge l'ensemble de vos obligations.",
    image: "/hero-image.png",
    sections: [
      {
        title: "Tenue Comptable",
        description:
          "Saisie comptable exhaustive, révision des comptes et production d'états financiers conformes aux normes en vigueur.",
        points: [
          "Saisie et classement des pièces comptables",
          "Révision des comptes et lettrage",
          "Production du bilan et du compte de résultat",
          "Conformité aux normes IFRS et PCG marocain",
        ],
      },
      {
        title: "Optimisation Fiscale",
        description:
          "Stratégies légales d'optimisation pour réduire votre charge fiscale tout en restant en conformité avec la législation.",
        points: [
          "Déclarations fiscales (IS, IR, TVA)",
          "Optimisation des charges déductibles",
          "Conseil en régimes fiscaux préférentiels",
          "Veille réglementaire continue",
        ],
      },
    ],
  },
  "conseil-strategie": {
    badge: "03",
    title: "Conseil & Stratégie",
    subtitle: "Pilotage de la Croissance",
    heroDescription:
      "Bénéficiez d'un accompagnement stratégique sur-mesure pour accélérer votre développement et sécuriser vos investissements.",
    image: "/hero-image1.png",
    sections: [
      {
        title: "Diagnostic de Performance",
        description:
          "Analyse financière approfondie de votre activité avec mise en place de tableaux de bord décisionnels.",
        points: [
          "Analyse des ratios financiers clés",
          "Tableaux de bord et KPIs personnalisés",
          "Benchmarking sectoriel",
          "Identification des leviers de rentabilité",
        ],
      },
      {
        title: "Levée de Fonds",
        description:
          "Préparation des dossiers de financement, recherche d'investisseurs et négociation des conditions de crédit.",
        points: [
          "Préparation de dossiers bancaires complets",
          "Recherche d'investisseurs et business angels",
          "Négociation des conditions de financement",
          "Accompagnement dans les due diligences",
        ],
      },
    ],
  },
  "transformation-digitale": {
    badge: "04",
    title: "Transformation Digitale",
    subtitle: "Solutions Connectées & ERP",
    heroDescription:
      "Digitalisez vos processus métier avec nos solutions intégrées. De la facturation automatisée au CRM, nous modernisons votre infrastructure.",
    image: "/services-bg-1.png",
    sections: [
      {
        title: "ERP & Automatisation",
        description:
          "Déploiement de solutions ERP (Odoo, SAP) pour centraliser et automatiser vos processus de gestion.",
        points: [
          "Déploiement et configuration Odoo",
          "Facturation et gestion de stock automatisées",
          "CRM et suivi client intégré",
          "Formation de vos équipes",
        ],
      },
      {
        title: "Présence en Ligne",
        description:
          "Création de sites web professionnels, référencement SEO et stratégie de marketing digital.",
        points: [
          "Sites web vitrines et e-commerce",
          "Référencement SEO et Google Ads",
          "Stratégie de contenu et réseaux sociaux",
          "Analytics et reporting de performance",
        ],
      },
    ],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = SERVICES_DATA[serviceId];

  if (!service) {
    return (
      <main className="min-h-screen bg-brand-bg flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-navy mb-4">
            Service introuvable
          </h1>
          <p className="text-brand-muted mb-8">
            Ce service n'existe pas encore.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-amber-500 text-brand-navy font-bold px-6 py-3 rounded-full hover:bg-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-bg text-brand-navy">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)] pt-12 pb-20 sm:pt-16 sm:pb-28">
          {/* Back link */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400/90 mb-3">
              {service.badge}. {service.title}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 max-w-[700px]"
          >
            {service.subtitle}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-white/75 text-base sm:text-lg leading-relaxed max-w-[600px]"
          >
            {service.heroDescription}
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)] py-16 sm:py-20">
        <div className="grid gap-12 lg:gap-16">
          {service.sections.map((section, sIdx) => (
            <motion.div
              key={section.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={sIdx}
              className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start"
            >
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-8 bg-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                    {service.badge}.{sIdx + 1}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-4">
                  {section.title}
                </h2>
                <p className="text-brand-navy/70 text-sm sm:text-base leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Right - Points */}
              <div className="rounded-2xl bg-white ring-1 ring-black/[0.06] shadow-md p-6 sm:p-8">
                <ul className="space-y-4">
                  {section.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3.5">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mt-16 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy/90 p-8 sm:p-10 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Prêt à commencer ?
          </h3>
          <p className="text-white/70 text-sm sm:text-base mb-6 max-w-md mx-auto">
            Remplissez notre formulaire d'éligibilité et notre équipe vous
            contactera sous 24h.
          </p>
          <Link
            to="/#diagnostic"
            className="group inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-brand-navy font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40"
          >
            Demander un diagnostic
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};
