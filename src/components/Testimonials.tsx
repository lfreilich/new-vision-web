import { Quote } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t.testimonials.quote1,
      author: t.testimonials.author1,
    },
    {
      text: t.testimonials.quote2,
      author: t.testimonials.author2,
    },
    {
      text: t.testimonials.quote3,
      author: t.testimonials.author3,
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">{t.testimonials.label}</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">{t.testimonials.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <div key={i} className="relative p-8 rounded-2xl bg-card border border-border">
              <Quote className="text-primary/20 mb-4" size={36} />
              <p className="text-foreground/80 text-sm leading-relaxed italic mb-6">"{item.text}"</p>
              <p className="text-primary font-medium text-sm">— {item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
