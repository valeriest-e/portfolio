const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-20">
      <div className="container">
        <p className="font-mono text-sm text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Valeriia Bilous
        </h1>
        <div className="flex flex-wrap gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <span className="brutal-tag">App Developer</span>
          <span className="brutal-tag">UX/UI Designer</span>
          <span className="brutal-tag">Berlin</span>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Junior iOS & Android Developer with a decade of experience in UX/UI design, 
          graphic design, and digital media. I build apps that look good and work even better.
        </p>
        <div className="flex gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground bg-foreground text-background font-mono text-sm hover:bg-transparent hover:text-foreground transition-colors"
          >
            View Projects →
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground font-mono text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
