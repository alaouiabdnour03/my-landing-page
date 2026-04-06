import { useState } from "react";
import { CheckCircle, Check, ChevronLeft, ChevronRight, Globe, User, Briefcase, Building2, MapPin, Clock, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const questionDefs = [
  {
    id: "residency",
    questionKey: "sondage.q1",
    icon: Globe,
    iconBg: "bg-teal-50 text-teal-600 border-teal-100",
    options: [
      { value: "resident", labelKey: "sondage.q1_a1", icon: User },
      { value: "etranger", labelKey: "sondage.q1_a2", icon: Globe },
      { value: "non-resident", labelKey: "sondage.q1_a3", icon: Briefcase },
    ],
  },
  {
    id: "activity",
    questionKey: "sondage.q2",
    icon: Building2,
    iconBg: "bg-blue-50 text-blue-600 border-blue-100",
    options: [
      { value: "commerce", labelKey: "sondage.q2_a1" },
      { value: "services", labelKey: "sondage.q2_a2" },
      { value: "industrie", labelKey: "sondage.q2_a3" },
      { value: "autre", labelKey: "sondage.q2_a4" },
    ],
  },
  {
    id: "domiciliation",
    questionKey: "sondage.q3",
    icon: MapPin,
    iconBg: "bg-blue-50 text-blue-600 border-blue-100",
    options: [
      { value: "oui", labelKey: "sondage.q3_a1" },
      { value: "non", labelKey: "sondage.q3_a2" },
    ],
  },
  {
    id: "timeline",
    questionKey: "sondage.q4",
    icon: Clock,
    iconBg: "bg-blue-50 text-blue-600 border-blue-100",
    options: [
      { value: "immediat", labelKey: "sondage.q4_a1" },
      { value: "1-2-mois", labelKey: "sondage.q4_a2" },
      { value: "3-plus", labelKey: "sondage.q4_a3" },
      { value: "reflexion", labelKey: "sondage.q4_a4" },
    ],
  },
];

const SondageSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [booked, setBooked] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "" });
  const [projectTypes, setProjectTypes] = useState(["creation"]);

  const current = questionDefs[currentStep];

  const handleSelect = (value) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  };

  const handleNext = () => {
    if (currentStep < questionDefs.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const toggleProjectType = (type) => {
    setProjectTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleBook = () => {
    // Send all survey data + contact info to email via Formsubmit AJAX
    fetch("https://formsubmit.co/ajax/alaouiabdnour03@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "📋 Nouvelle réservation — LAMEC Sondage",
        Nom: contactInfo.name,
        Téléphone: contactInfo.phone,
        Services: projectTypes.join(", "),
        Résidence: answers.residency || "—",
        Activité: answers.activity || "—",
        Domiciliation: answers.domiciliation || "—",
        Délai: answers.timeline || "—",
      }),
    }).catch(() => {}); // never block the user
    setBooked(true);
    navigate("/confirmation?type=sondage");
  };

  const isContactValid = contactInfo.name.trim() && contactInfo.phone.trim();

  if (booked) {
    return (
      <section id="sondage" className="py-24 px-6 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(hsl(var(--accent)) 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-card rounded-[2.5rem] p-10 md:p-12 shadow-2xl min-h-[400px] flex flex-col items-center justify-center text-center border-b-8 border-accent">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 uppercase tracking-wide">{t("sondage.booked_title")}</h3>
            <p className="text-muted-foreground max-w-md">{t("sondage.booked_message")}</p>
          </div>
        </div>
      </section>
    );
  }

  if (completed) {
    return (
      <section id="sondage" className="py-24 px-6 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(hsl(var(--accent)) 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-card rounded-[2.5rem] p-10 md:p-12 shadow-2xl min-h-[500px] flex flex-col border-b-8 border-accent">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-6 border-2 border-accent">
                <Check className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 uppercase tracking-wide">{t("sondage.match_title")}</h3>
              <p className="text-sm text-muted-foreground font-medium max-w-sm">{t("sondage.match_sub")}</p>
            </div>

            <form className="space-y-4 max-w-sm mx-auto w-full" onSubmit={(e) => { e.preventDefault(); handleBook(); }}>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ms-1 block">{t("sondage.name_label")}</label>
                <input
                  type="text"
                  placeholder={t("sondage.name_placeholder")}
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo((prev) => ({ ...prev, name: e.target.value }))}
                  className="px-5 py-3.5 h-auto w-full rounded-2xl border-2 border-muted bg-muted/30 focus:border-accent focus:bg-card focus:outline-none transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ms-1 block">{t("sondage.phone_label")}</label>
                <input
                  type="tel"
                  placeholder={t("sondage.phone_placeholder")}
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo((prev) => ({ ...prev, phone: e.target.value }))}
                  className="px-5 py-3.5 h-auto w-full rounded-2xl border-2 border-muted bg-muted/30 focus:border-accent focus:bg-card focus:outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ms-1 block">{t("sondage.project_type")}</label>
                <div className="flex flex-wrap gap-2">
                  {["creation", "domiciliation", "comptabilite"].map((type) => (
                    <label
                      key={type}
                      className={`flex-1 flex items-center justify-center gap-2 border-2 rounded-xl px-2 py-3 text-[10px] font-bold uppercase cursor-pointer transition-all ${
                        projectTypes.includes(type) ? "border-accent bg-accent/10" : "border-muted bg-muted/30 hover:border-accent"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={projectTypes.includes(type)}
                        onChange={() => toggleProjectType(type)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      {t(`sondage.type_${type}`)}
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                disabled={!isContactValid}
                className="w-full py-4 h-auto rounded-full bg-foreground text-primary-foreground font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-4 hover:bg-foreground/90 shadow-2xl justify-center mt-8 group border-b-4 border-muted-foreground/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Calendar className="w-[18px] h-[18px] group-hover:rotate-12 transition-transform" />
                {t("sondage.book")}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="sondage" className="py-24 px-6 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(hsl(var(--accent)) 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }} />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4 uppercase tracking-wide">
            {t("sondage.title_1")}<br />
            <span className="text-accent">{t("sondage.title_2")}</span>
          </h2>
          <p className="text-muted-foreground font-medium">{t("sondage.subtitle")}</p>
        </div>

        <div className="bg-card rounded-[2.5rem] p-10 md:p-12 shadow-2xl min-h-[500px] flex flex-col border-b-8 border-accent">
          {/* Progress */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex gap-3 flex-1">
              {questionDefs.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full flex-1 transition-all duration-500 ${
                    i <= currentStep ? "bg-accent shadow-sm" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-muted-foreground ms-6 tracking-widest">
              {currentStep + 1}/{questionDefs.length}
            </span>
          </div>

          {/* Question */}
          <div className="mb-10 flex-1">
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 ${current.iconBg}`}>
                <current.icon className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight">{t(current.questionKey)}</h3>
            </div>

            <div className="space-y-4">
              {current.options.map((opt) => {
                const isSelected = answers[current.id] === opt.value;
                const OptIcon = opt.icon;
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className={`flex items-center w-full p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 text-start ${
                      isSelected
                        ? "border-accent bg-accent/10 shadow-md"
                        : "bg-card border-muted hover:border-muted-foreground/30"
                    }`}
                  >
                    {OptIcon && (
                      <div className={`flex items-center justify-center w-10 h-10 me-4 rounded-xl transition-all ${
                        isSelected ? "bg-accent/20 text-accent" : "bg-muted/50 text-muted-foreground"
                      }`}>
                        <OptIcon className="w-5 h-5" />
                      </div>
                    )}
                    <span className="tracking-tight uppercase text-xs text-muted-foreground font-medium flex-1">
                      {t(opt.labelKey)}
                    </span>
                    <div className={`ms-auto w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected ? "border-accent bg-accent" : "border-muted-foreground/30"
                    }`}>
                      {isSelected && <Check className="w-3 h-3 text-accent-foreground" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-muted mt-auto">
            <button
              onClick={handleBack}
              className={`font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all text-muted-foreground hover:text-foreground ${
                currentStep === 0 ? "opacity-0 pointer-events-none" : ""
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> {t("sondage.prev")}
            </button>
            <button
              onClick={handleNext}
              disabled={!answers[current.id]}
              className="px-10 py-4 h-auto rounded-full bg-accent text-accent-foreground font-bold uppercase text-xs tracking-widest flex items-center gap-3 hover:bg-accent/90 shadow-xl shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {currentStep === questionDefs.length - 1 ? t("sondage.finish") : t("sondage.next")}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SondageSection;
