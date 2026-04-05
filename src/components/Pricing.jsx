import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  const packs = [
    {
      nameKey: "pricing.essential",
      price: "999",
      period: "DH / mois",
      periodAr: "درهم / شهرياً",
      featureKeys: ["pricing.f1", "pricing.f2", "pricing.f3", "pricing.f4", "pricing.f5"],
      popular: false,
    },
    {
      nameKey: "pricing.premium",
      price: "1 999",
      period: "DH / mois",
      periodAr: "درهم / شهرياً",
      featureKeys: ["pricing.f6", "pricing.f7", "pricing.f8", "pricing.f9", "pricing.f10", "pricing.f11"],
      popular: true,
    },
    {
      nameKey: "pricing.enterprise",
      price: t("pricing.quote"),
      period: "",
      periodAr: "",
      featureKeys: ["pricing.f12", "pricing.f13", "pricing.f14", "pricing.f15", "pricing.f16", "pricing.f17"],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packs.map((pack) => (
            <div
              key={pack.nameKey}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                pack.popular
                  ? "border-foreground bg-foreground text-primary-foreground shadow-2xl scale-105"
                  : "border-border bg-card text-card-foreground hover:shadow-xl"
              }`}
            >
              {pack.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background text-foreground text-sm font-bold px-4 py-1 rounded-full">
                  {t("pricing.popular")}
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{t(pack.nameKey)}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black">{pack.price}</span>
                {pack.period && (
                  <span className={`text-sm ms-1 ${pack.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {pack.period}
                  </span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {pack.featureKeys.map((fKey) => (
                  <li key={fKey} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    {t(fKey)}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-semibold transition-colors ${
                  pack.popular
                    ? "bg-primary-foreground text-primary hover:opacity-90"
                    : "bg-foreground text-primary-foreground hover:opacity-90"
                }`}
              >
                {t("pricing.cta")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
