const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background/60">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-background/80 font-medium mb-1">Karen Furman — The Klutter Koach</p>
        <p className="text-xs">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
