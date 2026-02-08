import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-foreground text-background/60">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-background/80 font-medium mb-1">{t.footer.brand}</p>
        <p className="text-xs">© {new Date().getFullYear()} {t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
