import heroImage from "@/assets/hero-organized-home.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Beautifully organized home" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase mb-4">
            {t.hero.subtitle}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            {t.hero.title}{" "}
            <span className="italic">{t.hero.titleHighlight}</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-lg mb-8 font-light">
            {t.hero.description}
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-full"
          >
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
