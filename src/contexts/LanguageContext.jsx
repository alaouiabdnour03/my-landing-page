import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  // Pricing
  "pricing.title": "Nos Packs",
  "pricing.subtitle": "Les formules adaptées à chaque étape de votre parcours entrepreneurial.",
  "pricing.essential": "Pack Essentiel",
  "pricing.premium": "Pack Premium",
  "pricing.enterprise": "Pack Entreprise",
  "pricing.quote": "Sur devis",
  "pricing.popular": "Populaire",
  "pricing.cta": "Commencer",
  "pricing.f1": "Création SARL en ligne",
  "pricing.f2": "Domiciliation Casablanca",
  "pricing.f3": "Comptabilité de base",
  "pricing.f4": "Support standard",
  "pricing.f5": "Accès plateforme",
  "pricing.f6": "Tout du Pack Essentiel",
  "pricing.f7": "Conseiller dédié",
  "pricing.f8": "Comptabilité avancée",
  "pricing.f9": "Réunions Skype mensuelles",
  "pricing.f10": "Assistance juridique",
  "pricing.f11": "Bilan annuel inclus",
  "pricing.f12": "Tout du Pack Premium",
  "pricing.f13": "Sur-mesure",
  "pricing.f14": "Audit complet",
  "pricing.f15": "Conseils stratégiques",
  "pricing.f16": "Priority Support",
  "pricing.f17": "Accompagnement levée de fonds",

  // Contact
  "contact.title": "Contactez-nous",
  "contact.subtitle": "Prêt à lancer votre SARL ? Nos experts vous répondront en moins de 24h.",
  "contact.success_title": "Message envoyé !",
  "contact.success_message": "Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.",
  "contact.send_another": "Envoyer un autre message",
  "contact.name_placeholder": "Votre nom complet",
  "contact.phone_placeholder": "Votre téléphone",
  "contact.email_placeholder": "Votre email",
  "contact.message_placeholder": "Votre message...",
  "contact.submit": "Envoyer",
  "contact.phone_title": "Téléphone",
  "contact.email_title": "Email",
  "contact.address_title": "Adresse",
  "contact.address": "Lot Diamant Vert, Ichrak Center, Imm. n°B11, 3ème étage, Bureau 35, Hay Hassani, Casablanca",
  
  // Sondage
  "sondage.title_1": "ÉVALUEZ VOTRE PROJET",
  "sondage.title_2": "EN 1 MINUTE",
  "sondage.subtitle": "Répondez à nos questions pour recevoir une offre personnalisée immédiatement.",
  "sondage.q1": "Êtes-vous résident marocain ou étranger ?",
  "sondage.q1_a1": "Résident Marocain",
  "sondage.q1_a2": "Étranger",
  "sondage.q1_a3": "MRE / Marocain résidant à l'étranger",
  "sondage.q2": "Quelle est la nature de votre activité ?",
  "sondage.q2_a1": "Commerce",
  "sondage.q2_a2": "Services",
  "sondage.q2_a3": "Industrie",
  "sondage.q2_a4": "Autre",
  "sondage.q3": "Avez-vous besoin d'une domiciliation ?",
  "sondage.q3_a1": "Oui",
  "sondage.q3_a2": "Non",
  "sondage.q4": "Quand souhaitez-vous démarrer ?",
  "sondage.q4_a1": "Immédiatement",
  "sondage.q4_a2": "1-2 Mois",
  "sondage.q4_a3": "+ de 3 mois",
  "sondage.q4_a4": "En cours de réflexion",
  "sondage.prev": "Précédent",
  "sondage.next": "Suivant",
  "sondage.finish": "Terminer",
  "sondage.match_title": "Parfait !",
  "sondage.match_sub": "Remplissez vos coordonnées pour recevoir votre devis.",
  "sondage.name_label": "Nom",
  "sondage.name_placeholder": "Votre nom...",
  "sondage.phone_label": "Téléphone",
  "sondage.phone_placeholder": "Votre téléphone...",
  "sondage.project_type": "Types de services",
  "sondage.type_creation": "Création",
  "sondage.type_domiciliation": "Domiciliation",
  "sondage.type_comptabilite": "Comptabilité",
  "sondage.book": "Réserver",
  "sondage.booked_title": "Réservé !",
  "sondage.booked_message": "Nous reviendrons vers vous très rapidement."
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');

  const toggleLang = () => {
    setLang((prev) => (prev === 'fr' ? 'ar' : 'fr'));
  };

  const t = (key) => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
