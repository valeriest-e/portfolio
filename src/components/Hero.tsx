import React from "react";
import avatar from "@/assets/avatar.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <p className="font-mono text-sm text-muted-foreground mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Valeriia Bilous
          </h1>

          {/* PHOTO mobile */}
          <div className="block md:hidden mb-6 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <img
              src={avatar}
              alt="Valeriia Bilous"
              className="w-64 h-64 md:w-80 md:h-80 object-cover border-2 border-foreground"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="brutal-tag">App Developer</span>
            <span className="brutal-tag">UX/UI Designer</span>
            <span className="brutal-tag">Berlin</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            iOS & Android Developer with experience in UX/UI design and social media marketing. 
            I build apps that look good and work even better.
          </p>

          <div className="flex gap-4 mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground bg-foreground text-background font-mono text-sm hover:bg-transparent hover:text-foreground transition-colors"
            >
              View Projects →
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground font-mono text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        {/* PHOTO desktop */}
        <div className="hidden md:flex justify-end animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <img
            src={avatar}
            alt="Valeriia Bilous"
            className="w-80 h-80 object-cover border-2 border-foreground"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;