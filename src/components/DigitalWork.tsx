import squarespaceMockup from "@/assets/squarespace-mockup.jpg";
import catalogueMockup from "@/assets/catalogue-mockup.jpg";
import workbookMockup from "@/assets/workbook-mockup.jpg";
import socialMediaMockup from "@/assets/social-media-mockup.jpg";

const digitalProjects = [
  {
    title: "Website & Social Media Content",
    description: "Designed a multilingual Squarespace website and created social media content for a beauty studio, optimizing brand presentation and digital visibility. Focused on clarity, consistency, and user experience.",
    techStack: ["Squarespace", "Web Design", "UX/UI", "Multilingual", "Content Creation", "Branding"],
    image: squarespaceMockup,
  },
  {
    title: "Artist Catalogue & Brochure",
    description: "Developed a printed catalogue and exhibition brochure for a contemporary artist. Emphasized clean layout, typography, and storytelling to showcase the artworks professionally.",
    techStack: ["Graphic Design", "Layout", "Print Design", "Canva"],
    image: catalogueMockup,
  },
  {
    title: "Workbooks & Video Editing",
    description: "Created structured workbooks and edited online course videos for a coach. Delivered clear, visually consistent materials that improved user engagement and learning experience.",
    techStack: ["Graphic Design", "Layout Design", "PDF Workbooks", "Video Editing", "Adobe Premiere Pro"],
    image: workbookMockup,
  },
  {
    title: "Social Media Content Creation",
    description: "Produced branded visual content for social media — posts, stories, and Reels — ensuring cohesive and appealing digital presence for clients.",
    techStack: ["Content Creation", "Graphic Design", "Reels/Shorts", "Brand Identity", "Instagram Marketing"],
    image: socialMediaMockup,
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
        
        <div className="grid sm:grid-cols-2 gap-6">
          {digitalProjects.map((project) => (
            <div 
              key={project.title} 
              className="group border-2 border-foreground bg-card overflow-hidden transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]"
              style={{ boxShadow: 'var(--shadow-brutal)' }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} mockup`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="font-mono font-semibold text-lg mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="brutal-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalWork;
