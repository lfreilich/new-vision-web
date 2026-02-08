import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-3">
            Ready to start?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Let's Transform Your Space
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
            If you're ready to take the next step in your organizing or decluttering journey, I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="mailto:karen@karenfurman.com"
              className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
              <span>karen@karenfurman.com</span>
            </a>
            <a
              href="tel:+972000000000"
              className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              <Phone size={18} />
              <span>Contact by Phone</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-primary-foreground/70 text-sm mb-10">
            <MapPin size={16} />
            <span>Bet Shemesh, Jerusalem, Tel Aviv &amp; surrounding areas</span>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-10 py-6 text-base font-medium"
          >
            <a href="mailto:karen@karenfurman.com">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
