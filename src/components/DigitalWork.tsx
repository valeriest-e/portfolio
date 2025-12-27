import { Palette, Layout, Globe, Video, Instagram } from "lucide-react";

const workAreas = [
  {
    icon: Layout,
    title: "UX/UI Design",
    description: "User research, wireframing, prototyping, and interface design for web and mobile applications.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Brand identity, print materials, marketing collateral, and visual communication.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Squarespace websites for small businesses and creative professionals.",
  },
  {
    icon: Instagram,
    title: "Social Media & Content",
    description: "Content strategy, visual content creation, and community management.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Promotional videos, social media content, and motion graphics.",
  },
];

const DigitalWork = () => {
  return (
    <section id="digital-work" className="py-20 bg-secondary/30">
      <div className="container">
        <p className="section-title">// Background</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Experience</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Before transitioning to app development, I spent years working across 
          various digital disciplines. This background informs how I approach 
          development today.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {workAreas.map((area) => (
            <div 
              key={area.title} 
              className="p-6 border border-border bg-background hover:border-foreground transition-colors"
            >
              <area.icon className="w-6 h-6 mb-4 text-primary" />
              <h3 className="font-mono font-semibold mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalWork;
