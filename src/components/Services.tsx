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
    <section id="services" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">{t.services.label}</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">{t.services.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
