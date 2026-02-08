import { Sparkles, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    label: "Philosophy",
    text: "Your home should be organized so you know where things are, to the degree that you feel relaxed and not stressed in your space.",
  },
  {
    icon: Sparkles,
    label: "Method",
    text: "A combination of Marie Kondo + FlyLady + my own style. YOU make the decisions. YOU decide what to keep. I help provide clarity.",
  },
  {
    icon: Heart,
    label: "Attitude",
    text: "Positive, enthusiastic, non-judgmental. I walk the walk, not just talk the talk.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Nice to meet you</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Let's Get Acquainted
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hi, I'm Karen Furman — home organizer and decluttering expert. I've had a knack for organizing since childhood and spent over 20 years as a classroom teacher. Now I use those skills to help my clients arrange their things and keep their homes decluttered and organized.
          </p>
          <p className="text-muted-foreground text-base mt-4 leading-relaxed">
            I live in a small apartment with a large family of eight and have become adept at finding creative solutions to maximize every inch of space — whether it's a room, cabinet, or closet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
    </section>
  );
};

export default About;
