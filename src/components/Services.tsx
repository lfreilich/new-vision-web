import { motion } from "framer-motion";
import serviceOrganizing from "@/assets/service-organizing.jpg";
import serviceDecluttering from "@/assets/service-decluttering.jpg";
import servicePacking from "@/assets/service-packing.jpg";
import serviceEstate from "@/assets/service-estate.jpg";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.organizing,
      description: t.services.organizingDesc,
      image: serviceOrganizing,
    },
    {
      title: t.services.decluttering,
      description: t.services.declutteringDesc,
      image: serviceDecluttering,
    },
    {
      title: t.services.packing,
      description: t.services.packingDesc,
      image: servicePacking,
    },
    {
      title: t.services.estate,
      description: t.services.estateDesc,
      image: serviceEstate,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">{t.services.label}</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">{t.services.title}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12 }}
            >
              {/* Image container with overlay */}
              <div className="aspect-square overflow-hidden relative">
                <motion.img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating title on hover */}
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="font-display text-xl font-semibold text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {s.title}
                  </h3>
                </div>
              </div>
              
              {/* Card content */}
              <div className="p-5 relative">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                
                {/* Animated underline */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ originX: 0 }}
                />
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500 rounded-tr-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
