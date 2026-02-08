import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
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
    <section id="testimonials" className="py-24 md:py-32 bg-background overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">{t.testimonials.label}</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">{t.testimonials.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div 
              key={i} 
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500"
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
            >
              {/* Quote icon with animation */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="text-primary/30 group-hover:text-primary/50 transition-colors duration-300 mb-4" size={36} />
              </motion.div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + starIndex * 0.1 + 0.5 }}
                  >
                    <Star className="w-4 h-4 fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-foreground/80 text-sm leading-relaxed italic mb-6">"{item.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {item.author.charAt(0)}
                  </span>
                </div>
                <p className="text-primary font-medium text-sm">— {item.author}</p>
              </div>
              
              {/* Decorative gradient line */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-b-2xl"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
