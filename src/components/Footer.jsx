import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[hsl(0,0%,4%)] py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="mb-8">
          <h2 className="text-lamec-yellow font-bold text-2xl tracking-tight leading-none mb-2">LAMEC</h2>
          <p className="text-white font-bold text-[11px] uppercase tracking-widest">
            LA MAISON DE L'EXPERTISE COMPTABLE
          </p>
          <p className="text-white/70 font-bold text-[11px] mt-1" style={{ fontFamily: "'Cairo', sans-serif" }}>
            دار الخبرة المحاسبية
          </p>
        </div>

        <div className="mb-10">
          <p className="text-gray-400 italic font-medium text-sm leading-relaxed max-w-lg mx-auto">
            "LAMEC, la référence en création d'entreprise au Maroc. Plus de 1000 entrepreneurs nous font confiance. Votre réussite simplifiée."
          </p>
        </div>

        <div className="text-lamec-yellow/60 text-xs font-medium leading-relaxed space-y-4">
          <div>
            <p className="font-bold text-white uppercase mb-1 tracking-wider">Siège Social</p>
            <p>Lot Diamant Vert, Ichrak Center</p>
            <p>Imm. n°B11, 3ème étage, Bureau 35</p>
            <p>Hay Hassani, Casablanca</p>
          </div>
          <div className="pt-2 border-t border-white/10">
            <p>ICE : 003537836000051</p>
          </div>
        </div>

        <p className="text-lamec-yellow/30 text-[9px] font-medium mt-10">
          © {new Date().getFullYear()} LAMEC. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
