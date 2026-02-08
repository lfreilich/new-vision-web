import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Karen Furman provides an amazing service as The Klutter Koach. She can tackle a situation objectively, help sort and put away your belongings so pleasantly that you'll be left feeling like you spent the day relaxing.",
    author: "Happy Client",
  },
  {
    text: "Karen transformed our chaotic kitchen into a dream. Everything has a place now, and I actually enjoy cooking again. Her energy is infectious and she never judges — just gets to work!",
    author: "Sarah M.",
  },
  {
    text: "Moving with a family of six was overwhelming until Karen stepped in. She managed the packing, labeling, and unpacking with military precision but the warmth of a friend.",
    author: "David R.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Kind words</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">Testimonials</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-8 rounded-2xl bg-card border border-border">
              <Quote className="text-primary/20 mb-4" size={36} />
              <p className="text-foreground/80 text-sm leading-relaxed italic mb-6">"{t.text}"</p>
              <p className="text-primary font-medium text-sm">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
