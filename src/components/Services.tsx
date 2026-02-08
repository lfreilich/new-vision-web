import serviceOrganizing from "@/assets/service-organizing.jpg";
import serviceDecluttering from "@/assets/service-decluttering.jpg";
import servicePacking from "@/assets/service-packing.jpg";
import serviceEstate from "@/assets/service-estate.jpg";

const services = [
  {
    title: "Home Organizing",
    description: "Transform your living spaces into functional, beautiful areas that bring you peace and joy.",
    image: serviceOrganizing,
  },
  {
    title: "Downsizing & Decluttering",
    description: "Letting go can be liberating. I'll guide you through the process with patience and clarity.",
    image: serviceDecluttering,
  },
  {
    title: "Packing & Unpacking",
    description: "Moving is stressful enough. Let me handle the organizing side so you can focus on the excitement.",
    image: servicePacking,
  },
  {
    title: "Moving & Estate Sales",
    description: "Comprehensive support for life transitions — from sorting to selling, I've got you covered.",
    image: serviceEstate,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">What I offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">My Services</h2>
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
