import React from 'react';
import { FileText, Building2, Calculator, ShieldCheck, Clock, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

const serviceKeys = [
  { titleKey: 'services.s1_title', descKey: 'services.s1_desc', icon: FileText },
  { titleKey: 'services.s2_title', descKey: 'services.s2_desc', icon: Building2 },
  { titleKey: 'services.s3_title', descKey: 'services.s3_desc', icon: Calculator },
  { titleKey: 'services.s4_title', descKey: 'services.s4_desc', icon: ShieldCheck },
  { titleKey: 'services.s5_title', descKey: 'services.s5_desc', icon: Clock },
  { titleKey: 'services.s6_title', descKey: 'services.s6_desc', icon: HeadphonesIcon },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 md:px-12 bg-lamec-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-lamec-dark mb-4">{t('services.title')}</h2>
          <p className="text-lamec-text-light text-lg">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-lamec-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-lamec-yellow-light text-lamec-yellow rounded-xl flex items-center justify-center mb-6 group-hover:bg-lamec-yellow group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-lamec-dark mb-3">{t(service.titleKey)}</h3>
              <p className="text-lamec-text-light leading-relaxed text-sm md:text-base">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
