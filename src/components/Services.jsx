import React from 'react';
import { FileText, Building2, Calculator, ShieldCheck, Clock, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    title: 'Création de SARL',
    description: 'Toutes vos démarches administratives de A à Z. On s\'occupe de tout pour une création rapide, garantie et sans tracas.',
    icon: FileText
  },
  {
    title: 'Domiciliation',
    description: 'Une adresse prestigieuse et professionnelle pour votre entreprise avec gestion de courrier ou réexpédition.',
    icon: Building2
  },
  {
    title: 'Comptabilité',
    description: 'Tenue de comptabilité journalière, déclarations fiscales et sociales, conseils en gestion financière pour vous faire gagner du temps.',
    icon: Calculator
  },
  {
    title: 'Conformité légale',
    description: 'Assurance et conformité de vos statuts, PV, AGO, et respect de toutes les réglementations marocaines en vigueur.',
    icon: ShieldCheck
  },
  {
    title: 'Disponibilité 24/7/365',
    description: 'Notre équipe est disponible en permanence pour répondre à vos questions et vous accompagner.',
    icon: Clock
  },
  {
    title: 'Support dédié',
    description: 'Un conseiller personnel dédié à votre dossier pour un suivi personnalisé et humain.',
    icon: HeadphonesIcon
  }
];

const Services = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-lamec-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-lamec-dark mb-4">Nos Services</h2>
          <p className="text-lamec-text-light text-lg">
            Tout ce dont vous avez besoin pour lancer et gérer votre SARL au Maroc, sans aucun souci.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-lamec-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-lamec-yellow-light text-lamec-yellow rounded-xl flex items-center justify-center mb-6 group-hover:bg-lamec-yellow group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-lamec-dark mb-3">{service.title}</h3>
              <p className="text-lamec-text-light leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
