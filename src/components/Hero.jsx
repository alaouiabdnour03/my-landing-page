import React from 'react';
import { ArrowDown, Users, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-lamec-yellow text-lamec-dark relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Decorative Circles */}
      <div className="absolute rounded-full border border-black/10 w-40 h-40 top-20 right-[30%] opacity-40" />
      <div className="absolute rounded-full border border-black/10 w-64 h-64 top-10 right-[10%] opacity-30" />
      <div className="absolute rounded-full border border-black/10 w-32 h-32 bottom-20 right-[25%] opacity-25" />
      <div className="absolute rounded-full border border-black/10 w-20 h-20 top-[60%] right-[45%] opacity-35" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-10 pb-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up md:mt-0 mt-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lamec-dark leading-[1.2] mb-6">
              Pack Complet SARL :<br />
              <span className="font-black">Création, Domiciliation,</span> Comptabilité.<br />
              À partir de seulement<br />
              <span className="font-black text-4xl md:text-5xl lg:text-6xl">999 DH</span>
              <span className="text-xl md:text-2xl font-medium">/mois</span>
            </h1>
            <p className="text-base md:text-lg text-lamec-dark/80 mb-8 max-w-xl leading-relaxed font-medium">
              Tout pour lancer votre activité en toute simplicité. Disponible 24/7/365. Transparent et sans engagement. Votre succès commence ici.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#packs"
                className="inline-flex items-center gap-2 bg-lamec-dark text-white px-7 py-4 rounded-full font-semibold text-base hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Découvrir nos Packs <ArrowDown className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-lamec-dark text-lamec-dark px-7 py-4 rounded-full font-semibold text-base hover:bg-lamec-dark hover:text-lamec-yellow transition-colors whitespace-nowrap"
              >
                Parler à un Expert <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end items-end relative h-full">
            <img
              src={`${import.meta.env.BASE_URL}hero-image.png`}
              alt="Experts LAMEC"
              width={600}
              height={675}
              className="relative z-10 drop-shadow-2xl rounded-3xl"
            />
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/212530721010"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float text-white"
      >
        <Phone className="w-7 h-7" />
      </a>
    </section>
  );
};

export default Hero;
