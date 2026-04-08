import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  fr: {
    // Header
    "header.call": "Appelez-nous gratuit :",
    "header.contact_btn": "Contact",

    // Hero
    "hero.title1": "Pack Complet SARL :",
    "hero.title2": "Création, Domiciliation,",
    "hero.title3": "Comptabilité.",
    "hero.from": "À partir de seulement",
    "hero.month": "/mois",
    "hero.subtitle": "Tout pour lancer votre activité en toute simplicité. Disponible 24/7/365. Transparent et sans engagement. Votre succès commence ici.",
    "hero.cta_packs": "Découvrir nos Packs",
    "hero.cta_expert": "Parler à un Expert",

    // Services
    "services.title": "Nos Services",
    "services.subtitle": "Tout ce dont vous avez besoin pour lancer et gérer votre SARL au Maroc, sans aucun souci.",
    "services.s1_title": "Création de SARL",
    "services.s1_desc": "Toutes vos démarches administratives de A à Z. On s'occupe de tout pour une création rapide, garantie et sans tracas.",
    "services.s2_title": "Domiciliation",
    "services.s2_desc": "Une adresse prestigieuse et professionnelle pour votre entreprise avec gestion de courrier ou réexpédition.",
    "services.s3_title": "Comptabilité",
    "services.s3_desc": "Tenue de comptabilité journalière, déclarations fiscales et sociales, conseils en gestion financière pour vous faire gagner du temps.",
    "services.s4_title": "Conformité légale",
    "services.s4_desc": "Assurance et conformité de vos statuts, PV, AGO, et respect de toutes les réglementations marocaines en vigueur.",
    "services.s5_title": "Disponibilité 24/7/365",
    "services.s5_desc": "Notre équipe est disponible en permanence pour répondre à vos questions et vous accompagner.",
    "services.s6_title": "Support dédié",
    "services.s6_desc": "Un conseiller personnel dédié à votre dossier pour un suivi personnalisé et humain.",

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
    "sondage.booked_message": "Nous reviendrons vers vous très rapidement.",

    // Confirmation
    "confirm.contact_title": "Message envoyé !",
    "confirm.contact_msg": "Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais. Gardez votre téléphone à portée — nous vous appelons très bientôt !",
    "confirm.sondage_title": "Réservé !",
    "confirm.sondage_msg": "Nous reviendrons vers vous très rapidement. Gardez votre téléphone à portée de main — notre expert vous appelle dans les prochaines heures !",
    "confirm.urgent": "Besoin urgent ?",
    "confirm.back": "Retour à l'accueil",

    // Footer
    "footer.quote": "LAMEC, la référence en création d'entreprise au Maroc. Plus de 1000 entrepreneurs nous font confiance. Votre réussite simplifiée.",
    "footer.siege": "Siège Social",
    "footer.rights": "Tous droits réservés.",
  },

  ar: {
    // Header
    "header.call": "اتصل بنا مجانًا :",
    "header.contact_btn": "تواصل",

    // Hero
    "hero.title1": "باقة SARL الشاملة :",
    "hero.title2": "تأسيس، توطين،",
    "hero.title3": "محاسبة.",
    "hero.from": "ابتداءً من",
    "hero.month": "درهم/شهر",
    "hero.subtitle": "كل ما تحتاجه لإطلاق نشاطك التجاري ببساطة. متاح 24/7/365. شفافية تامة وبدون التزام. نجاحك يبدأ هنا.",
    "hero.cta_packs": "اكتشف باقاتنا",
    "hero.cta_expert": "تحدث مع خبير",

    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "كل ما تحتاجه لإطلاق وإدارة شركتك SARL في المغرب بدون أي متاعب.",
    "services.s1_title": "تأسيس SARL",
    "services.s1_desc": "كافة الإجراءات الإدارية من الألف إلى الياء. نتكفل بكل شيء لتأسيس سريع ومضمون وخالٍ من المتاعب.",
    "services.s2_title": "التوطين",
    "services.s2_desc": "عنوان مرموق ومهني لشركتك مع إدارة البريد أو إعادة التوجيه.",
    "services.s3_title": "المحاسبة",
    "services.s3_desc": "مسك المحاسبة اليومية، التصريحات الضريبية والاجتماعية، واستشارات الإدارة المالية لتوفير وقتك.",
    "services.s4_title": "الامتثال القانوني",
    "services.s4_desc": "ضمان الامتثال لنظامك الأساسي والمحاضر والجموع العامة واحترام جميع الأنظمة المغربية المعمول بها.",
    "services.s5_title": "متاح 24/7/365",
    "services.s5_desc": "فريقنا متاح على مدار الساعة للإجابة على أسئلتك ومرافقتك.",
    "services.s6_title": "دعم مخصص",
    "services.s6_desc": "مستشار شخصي مخصص لملفك لمتابعة فردية وإنسانية.",

    // Pricing
    "pricing.title": "باقاتنا",
    "pricing.subtitle": "الصيغ المناسبة لكل مرحلة من مسيرتك الريادية.",
    "pricing.essential": "الباقة الأساسية",
    "pricing.premium": "الباقة المميزة",
    "pricing.enterprise": "باقة المؤسسات",
    "pricing.quote": "حسب الطلب",
    "pricing.popular": "الأكثر شيوعاً",
    "pricing.cta": "ابدأ الآن",
    "pricing.f1": "إنشاء SARL عبر الإنترنت",
    "pricing.f2": "توطين الدار البيضاء",
    "pricing.f3": "محاسبة أساسية",
    "pricing.f4": "دعم عادي",
    "pricing.f5": "الوصول للمنصة",
    "pricing.f6": "كل مميزات الباقة الأساسية",
    "pricing.f7": "مستشار مخصص",
    "pricing.f8": "محاسبة متقدمة",
    "pricing.f9": "اجتماعات Skype شهرية",
    "pricing.f10": "مساعدة قانونية",
    "pricing.f11": "الميزانية السنوية مشمولة",
    "pricing.f12": "كل مميزات الباقة المميزة",
    "pricing.f13": "حسب المقاس",
    "pricing.f14": "تدقيق شامل",
    "pricing.f15": "استشارات استراتيجية",
    "pricing.f16": "دعم أولوية",
    "pricing.f17": "مرافقة في جمع التمويل",

    // Contact
    "contact.title": "تواصل معنا",
    "contact.subtitle": "هل أنت مستعد لإطلاق شركتك SARL؟ سيرد عليك خبراؤنا في أقل من 24 ساعة.",
    "contact.success_title": "تم إرسال رسالتك !",
    "contact.success_message": "شكراً لرسالتك. سيتواصل معك فريقنا في أقرب وقت ممكن.",
    "contact.send_another": "إرسال رسالة أخرى",
    "contact.name_placeholder": "اسمك الكامل",
    "contact.phone_placeholder": "رقم هاتفك",
    "contact.email_placeholder": "بريدك الإلكتروني",
    "contact.message_placeholder": "رسالتك...",
    "contact.submit": "إرسال",
    "contact.phone_title": "الهاتف",
    "contact.email_title": "البريد الإلكتروني",
    "contact.address_title": "العنوان",
    "contact.address": "لوت دياموند فيرت، مركز إشراق، عمارة رقم B11، الطابق 3، مكتب 35، حي الحسني، الدار البيضاء",

    // Sondage
    "sondage.title_1": "قيّم مشروعك",
    "sondage.title_2": "في دقيقة واحدة",
    "sondage.subtitle": "أجب على أسئلتنا لتلقي عرضاً مخصصاً على الفور.",
    "sondage.q1": "هل أنت مقيم مغربي أم أجنبي؟",
    "sondage.q1_a1": "مقيم مغربي",
    "sondage.q1_a2": "أجنبي",
    "sondage.q1_a3": "مغربي مقيم بالخارج (MRE)",
    "sondage.q2": "ما طبيعة نشاطك؟",
    "sondage.q2_a1": "تجارة",
    "sondage.q2_a2": "خدمات",
    "sondage.q2_a3": "صناعة",
    "sondage.q2_a4": "أخرى",
    "sondage.q3": "هل تحتاج إلى توطين؟",
    "sondage.q3_a1": "نعم",
    "sondage.q3_a2": "لا",
    "sondage.q4": "متى تريد البدء؟",
    "sondage.q4_a1": "فوراً",
    "sondage.q4_a2": "1-2 شهر",
    "sondage.q4_a3": "أكثر من 3 أشهر",
    "sondage.q4_a4": "لا أزال أفكر",
    "sondage.prev": "السابق",
    "sondage.next": "التالي",
    "sondage.finish": "إنهاء",
    "sondage.match_title": "ممتاز !",
    "sondage.match_sub": "أدخل بياناتك لاستلام عرضك المخصص.",
    "sondage.name_label": "الاسم",
    "sondage.name_placeholder": "اسمك...",
    "sondage.phone_label": "الهاتف",
    "sondage.phone_placeholder": "رقم هاتفك...",
    "sondage.project_type": "أنواع الخدمات",
    "sondage.type_creation": "تأسيس",
    "sondage.type_domiciliation": "توطين",
    "sondage.type_comptabilite": "محاسبة",
    "sondage.book": "حجز",
    "sondage.booked_title": "تم الحجز !",
    "sondage.booked_message": "سنعود إليك في أقرب وقت ممكن.",

    // Confirmation
    "confirm.contact_title": "تم إرسال رسالتك !",
    "confirm.contact_msg": "شكراً لرسالتك. سيتواصل معك فريقنا في أقرب وقت ممكن. ابقِ هاتفك قريباً — سنتصل بك قريباً جداً!",
    "confirm.sondage_title": "تم الحجز !",
    "confirm.sondage_msg": "سنعود إليك في أقرب وقت ممكن. ابقِ هاتفك في متناول يدك — سيتصل بك خبيرنا خلال الساعات القليلة القادمة!",
    "confirm.urgent": "هل تحتاج مساعدة عاجلة؟",
    "confirm.back": "العودة إلى الرئيسية",

    // Footer
    "footer.quote": "لاميك، المرجع في إنشاء الشركات بالمغرب. أكثر من 1000 رائد أعمال يثقون بنا. نجاحك مبسّط.",
    "footer.siege": "المقر الاجتماعي",
    "footer.rights": "جميع الحقوق محفوظة.",
  },

  en: {
    // Header
    "header.call": "Call us free:",
    "header.contact_btn": "Contact",

    // Hero
    "hero.title1": "Complete SARL Package:",
    "hero.title2": "Formation, Domiciliation,",
    "hero.title3": "Accounting.",
    "hero.from": "Starting from only",
    "hero.month": "/month",
    "hero.subtitle": "Everything you need to launch your business with ease. Available 24/7/365. Transparent and no commitment. Your success starts here.",
    "hero.cta_packs": "Discover our Packages",
    "hero.cta_expert": "Talk to an Expert",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Everything you need to launch and manage your SARL in Morocco, hassle-free.",
    "services.s1_title": "SARL Formation",
    "services.s1_desc": "All your administrative procedures from A to Z. We handle everything for a fast, guaranteed, hassle-free company formation.",
    "services.s2_title": "Domiciliation",
    "services.s2_desc": "A prestigious and professional address for your company with mail management or forwarding.",
    "services.s3_title": "Accounting",
    "services.s3_desc": "Daily bookkeeping, tax and social declarations, financial management advice to save you time.",
    "services.s4_title": "Legal Compliance",
    "services.s4_desc": "Compliance of your articles of association, minutes, AGM, and respect for all Moroccan regulations in force.",
    "services.s5_title": "Available 24/7/365",
    "services.s5_desc": "Our team is permanently available to answer your questions and support you.",
    "services.s6_title": "Dedicated Support",
    "services.s6_desc": "A personal advisor dedicated to your file for personalized and human follow-up.",

    // Pricing
    "pricing.title": "Our Packages",
    "pricing.subtitle": "Plans tailored to every stage of your entrepreneurial journey.",
    "pricing.essential": "Essential Package",
    "pricing.premium": "Premium Package",
    "pricing.enterprise": "Enterprise Package",
    "pricing.quote": "Custom quote",
    "pricing.popular": "Popular",
    "pricing.cta": "Get Started",
    "pricing.f1": "Online SARL formation",
    "pricing.f2": "Casablanca domiciliation",
    "pricing.f3": "Basic accounting",
    "pricing.f4": "Standard support",
    "pricing.f5": "Platform access",
    "pricing.f6": "Everything in Essential",
    "pricing.f7": "Dedicated advisor",
    "pricing.f8": "Advanced accounting",
    "pricing.f9": "Monthly Skype meetings",
    "pricing.f10": "Legal assistance",
    "pricing.f11": "Annual balance included",
    "pricing.f12": "Everything in Premium",
    "pricing.f13": "Tailored to your needs",
    "pricing.f14": "Full audit",
    "pricing.f15": "Strategic advice",
    "pricing.f16": "Priority support",
    "pricing.f17": "Fundraising support",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to launch your SARL? Our experts will reply within 24 hours.",
    "contact.success_title": "Message sent!",
    "contact.success_message": "Thank you for your message. Our team will contact you as soon as possible.",
    "contact.send_another": "Send another message",
    "contact.name_placeholder": "Your full name",
    "contact.phone_placeholder": "Your phone number",
    "contact.email_placeholder": "Your email",
    "contact.message_placeholder": "Your message...",
    "contact.submit": "Send",
    "contact.phone_title": "Phone",
    "contact.email_title": "Email",
    "contact.address_title": "Address",
    "contact.address": "Lot Diamant Vert, Ichrak Center, Building B11, 3rd floor, Office 35, Hay Hassani, Casablanca",

    // Sondage
    "sondage.title_1": "EVALUATE YOUR PROJECT",
    "sondage.title_2": "IN 1 MINUTE",
    "sondage.subtitle": "Answer our questions to receive a personalized offer immediately.",
    "sondage.q1": "Are you a Moroccan resident or a foreigner?",
    "sondage.q1_a1": "Moroccan Resident",
    "sondage.q1_a2": "Foreigner",
    "sondage.q1_a3": "MRE / Moroccan living abroad",
    "sondage.q2": "What is the nature of your activity?",
    "sondage.q2_a1": "Commerce",
    "sondage.q2_a2": "Services",
    "sondage.q2_a3": "Industry",
    "sondage.q2_a4": "Other",
    "sondage.q3": "Do you need domiciliation?",
    "sondage.q3_a1": "Yes",
    "sondage.q3_a2": "No",
    "sondage.q4": "When do you want to start?",
    "sondage.q4_a1": "Immediately",
    "sondage.q4_a2": "1-2 Months",
    "sondage.q4_a3": "More than 3 months",
    "sondage.q4_a4": "Still thinking",
    "sondage.prev": "Previous",
    "sondage.next": "Next",
    "sondage.finish": "Finish",
    "sondage.match_title": "Perfect!",
    "sondage.match_sub": "Fill in your details to receive your personalized quote.",
    "sondage.name_label": "Name",
    "sondage.name_placeholder": "Your name...",
    "sondage.phone_label": "Phone",
    "sondage.phone_placeholder": "Your phone number...",
    "sondage.project_type": "Service types",
    "sondage.type_creation": "Formation",
    "sondage.type_domiciliation": "Domiciliation",
    "sondage.type_comptabilite": "Accounting",
    "sondage.book": "Book",
    "sondage.booked_title": "Booked!",
    "sondage.booked_message": "We will get back to you very shortly.",

    // Confirmation
    "confirm.contact_title": "Message sent!",
    "confirm.contact_msg": "Thank you for your message. Our team will contact you as soon as possible. Keep your phone nearby — we'll call you very soon!",
    "confirm.sondage_title": "Booked!",
    "confirm.sondage_msg": "We will get back to you very shortly. Keep your phone at hand — our expert will call you in the next few hours!",
    "confirm.urgent": "Need urgent help?",
    "confirm.back": "Back to homepage",

    // Footer
    "footer.quote": "LAMEC, the reference for company formation in Morocco. Over 1000 entrepreneurs trust us. Your success made simple.",
    "footer.siege": "Registered Office",
    "footer.rights": "All rights reserved.",
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');

  const cycleLang = () => {
    setLang((prev) => prev === 'fr' ? 'ar' : prev === 'ar' ? 'en' : 'fr');
  };

  const isRTL = lang === 'ar';

  // Apply RTL direction to the whole document when Arabic is active
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const t = (key) => {
    return translations[lang]?.[key] || translations['fr'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, cycleLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
