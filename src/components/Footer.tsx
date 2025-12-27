const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            © {currentYear} Valeriia Bilous
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            App Developer & UX/UI Designer • Berlin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
