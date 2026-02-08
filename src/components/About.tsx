import { Sparkles, Heart, Lightbulb } from "lucide-react";
import karenPhoto from "@/assets/karen-furman.jpg";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Lightbulb,
      label: t.about.philosophy,
      text: t.about.philosophyText,
    },
    {
      icon: Sparkles,
      label: t.about.method,
      text: t.about.methodText,
    },
    {
      icon: Heart,
      label: t.about.attitude,
      text: t.about.attitudeText,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">{t.about.label}</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              {t.about.title}
            </h2>
          </div>

          {/* Photo and Bio */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img 
                  src={karenPhoto} 
                  alt="Karen Furman - The Klutter Koach" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-start">
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t.about.bio1} <span className="text-foreground font-medium">{t.about.bioName}</span> {t.about.bio2}
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                {t.about.bio3}
              </p>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.label} className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <v.icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
