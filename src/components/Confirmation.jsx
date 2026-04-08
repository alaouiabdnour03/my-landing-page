import React, { useEffect } from "react";
import { CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { useSearchParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Confirmation = () => {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const type = searchParams.get("type"); // "contact" or "sondage"
  const isContact = type === "contact";

  // Fire GTM dataLayer event + Google Ads conversion on page load
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    if (isContact) {
      window.dataLayer.push({
        event: "conversion_contact",
        conversion_type: "contact_form",
        conversion_label: "Contact Form Submitted",
      });
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-17899968763/d94KCPjywpYcEPuxr9dC",
          value: 1.0,
          currency: "MAD",
        });
      }
    } else {
      window.dataLayer.push({
        event: "conversion_sondage",
        conversion_type: "booking",
        conversion_label: "Sondage Booking Completed",
      });
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-17899968763/d94KCPjywpYcEPuxr9dC",
          value: 1.0,
          currency: "MAD",
        });
      }
    }
  }, [isContact]);

  return (
    <div className="min-h-screen bg-lamec-dark flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffc800 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }} />

      <div className="max-w-lg w-full relative z-10">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl text-center border-b-8 border-lamec-yellow">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-lamec-yellow/20 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-lamec-yellow" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-black text-lamec-dark mb-4 uppercase tracking-wide">
            {isContact ? t('confirm.contact_title') : t('confirm.sondage_title')}
          </h1>

          {/* Message */}
          <p className="text-gray-500 font-medium leading-relaxed mb-8 max-w-sm mx-auto">
            {isContact ? t('confirm.contact_msg') : t('confirm.sondage_msg')}
          </p>

          {/* Phone CTA */}
          <div className="bg-lamec-dark/5 rounded-2xl p-6 mb-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{t('confirm.urgent')}</p>
            <a
              href="https://wa.me/212602653893"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-lamec-dark font-bold text-lg hover:text-lamec-yellow transition-colors"
            >
              <Phone className="w-5 h-5" />
              +212 6 02 65 38 93
            </a>
          </div>

          {/* Back to Home */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-lamec-yellow text-lamec-dark px-8 py-4 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors shadow-lg uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('confirm.back')}
          </Link>
        </div>

        {/* LAMEC Branding */}
        <div className="text-center mt-8">
          <p className="text-lamec-yellow font-bold text-lg tracking-tight">LAMEC</p>
          <p className="text-white/40 text-[10px] uppercase tracking-widest">La Maison de l'Expertise Comptable</p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
