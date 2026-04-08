import React from 'react';
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const LANG_LABELS = { fr: 'AR', ar: 'EN', en: 'FR' };

const Header = () => {
  const { lang, cycleLang, t } = useLanguage();

  return (
    <header className="w-full bg-lamec-yellow text-lamec-dark py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-lamec-dark">LAMEC</h2>
          <p className="text-[10px] md:text-xs font-semibold text-lamec-dark leading-tight uppercase">
            LA MAISON DE L'EXPERTISE COMPTABLE
          </p>
          <p className="text-[10px] md:text-xs text-lamec-dark leading-tight" dir="rtl" style={{ fontFamily: "'Cairo', sans-serif" }}>
            دار الخبرة المحاسبية
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <div className="flex flex-col items-end">
          <span className="text-xs font-medium text-lamec-dark">{t('header.call')}</span>
          <a
            href="https://wa.me/212602653893"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-lamec-dark tracking-wide hover:opacity-80 transition-opacity"
          >
            +212 6 02 65 38 93
          </a>
        </div>

        <button
          onClick={() => scrollTo('contact')}
          className="border-2 border-lamec-dark text-lamec-dark px-5 py-2 rounded-full font-semibold text-sm hover:bg-lamec-dark hover:text-lamec-yellow transition-colors cursor-pointer"
        >
          {t('header.contact_btn')}
        </button>

        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/company/maison-d-expertise-comptable/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border-2 border-lamec-dark flex items-center justify-center hover:bg-lamec-dark hover:text-lamec-yellow transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>

        <button
          onClick={cycleLang}
          className="flex items-center gap-1 border-2 border-lamec-dark px-3 py-2 rounded-lg font-semibold text-sm hover:bg-lamec-dark hover:text-lamec-yellow transition-colors cursor-pointer"
        >
          {LANG_LABELS[lang]} <Globe className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={cycleLang}
          className="flex items-center gap-1 border-2 border-lamec-dark px-2 py-1.5 rounded-lg font-semibold text-xs hover:bg-lamec-dark hover:text-lamec-yellow transition-colors cursor-pointer"
        >
          {LANG_LABELS[lang]} <Globe className="w-3.5 h-3.5" />
        </button>
        <a
          href="https://wa.me/212602653893"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-lamec-dark font-bold hover:opacity-80 transition-opacity"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        </a>
        <button
          onClick={() => scrollTo('contact')}
          className="border-2 border-lamec-dark text-lamec-dark px-3 py-1.5 rounded-full font-semibold text-xs hover:bg-lamec-dark hover:text-lamec-yellow transition-colors cursor-pointer"
        >
          {t('header.contact_btn')}
        </button>
      </div>
    </header>
  );
};

export default Header;
