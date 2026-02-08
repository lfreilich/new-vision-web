import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <Sparkles className="w-4 h-4 text-primary-foreground/20" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.p 
            className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.contact.label}
          </motion.p>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t.contact.title}
          </motion.h2>
          
          <motion.p 
            className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {t.contact.description}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="mailto:karen@theklutterkoach.com"
              className="group inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors px-4 py-2 rounded-full hover:bg-primary-foreground/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} className="group-hover:rotate-12 transition-transform" />
              <span>karen@theklutterkoach.com</span>
            </motion.a>
            <motion.a
              href="tel:+972587163405"
              className="group inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors px-4 py-2 rounded-full hover:bg-primary-foreground/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={18} className="group-hover:rotate-12 transition-transform" />
              <span>{t.contact.phone}</span>
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center gap-2 text-primary-foreground/70 text-sm mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <MapPin size={16} />
            <span>{t.contact.location}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
          >
            <Button
              asChild
              size="lg"
              className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-10 py-6 text-base font-medium shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <motion.a 
                href="mailto:karen@theklutterkoach.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.contact.cta}
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
