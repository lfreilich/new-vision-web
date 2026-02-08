import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">{t.about.label}</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              {t.about.title}
            </h2>
          </motion.div>

          {/* Photo and Bio */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative group">
                {/* Decorative ring */}
                <motion.div 
                  className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={karenPhoto} 
                    alt="Karen Furman - The Klutter Koach" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center md:text-start"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t.about.bio1} <span className="text-foreground font-medium">{t.about.bioName}</span> {t.about.bio2}
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                {t.about.bio3}
              </p>
            </motion.div>
          </div>

          {/* Values Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((v, index) => (
              <motion.div 
                key={v.label} 
                className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <v.icon size={22} />
                </motion.div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
