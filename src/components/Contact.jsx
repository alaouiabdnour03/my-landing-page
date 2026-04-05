import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-card-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">{t("contact.success_title")}</h3>
              <p className="text-muted-foreground max-w-sm">{t("contact.success_message")}</p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", email: "", message: "" }); }}
                className="mt-4 px-6 py-2 border-2 border-foreground text-foreground rounded-full font-semibold text-sm hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                {t("contact.send_another")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" placeholder={t("contact.name_placeholder")} required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-4 rounded-xl border border-border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <input type="tel" placeholder={t("contact.phone_placeholder")} required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-5 py-4 rounded-xl border border-border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <input type="email" placeholder={t("contact.email_placeholder")} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-4 rounded-xl border border-border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <textarea placeholder={t("contact.message_placeholder")} rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-5 py-4 rounded-xl border border-border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              <button type="submit" className="w-full py-4 bg-background text-foreground font-bold rounded-full hover:opacity-90 transition-opacity text-lg">
                {t("contact.submit")}
              </button>
            </form>
          )}

          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-card-foreground">{t("contact.phone_title")}</h4>
                <a href="tel:+212602653893" className="text-muted-foreground hover:text-card-foreground transition-colors">+212 6 02 65 38 93</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-card-foreground">{t("contact.email_title")}</h4>
                <a href="mailto:contact@lamec.ma" className="text-muted-foreground hover:text-card-foreground transition-colors">contact@lamec.ma</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-card-foreground">{t("contact.address_title")}</h4>
                <p className="text-muted-foreground">{t("contact.address")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
