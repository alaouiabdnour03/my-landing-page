import React from "react";
import { INNER } from "./Primitives";

export const FooterSection = () => {
  return (
    <>

      {/* FOOTER */}
      <footer className="relative border-t border-brand-navy/10 bg-white px-[clamp(20px,5vw,80px)] py-10">
        <div className={INNER}>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <img
                src="https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/Tests/logoipsum-415.svg"
                alt="La MEC Conseils"
                style={{ filter: "brightness(0)", height: 28 }}
              />
              <span className="h-6 w-px bg-black/15" />
              <div className="font-display font-semibold leading-tight">
                <div className="text-xs tracking-[0.22em] text-brand-navy">LA MEC CONSEILS</div>
                <div className="text-xs tracking-[0.22em] text-brand-green-deep">L'EXPERTISE DIGITALE</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <a href="mailto:contact@lameconseil.com" className="inline-flex items-center gap-2 text-sm text-brand-navy/70 transition-colors hover:text-brand-green-deep">
                contact@lameconseil.com
              </a>
              <a href="https://www.linkedin.com/company/maison-d-expertise-comptable/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-white transition-colors hover:bg-brand-green-deep">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-brand-navy/10 pt-5 text-center text-[11px] text-brand-navy/40">
            © {new Date().getFullYear()} La MEC Conseils. Tous droits réservés.
          </div>
        </div>
      </footer>
    </>
  );
};
