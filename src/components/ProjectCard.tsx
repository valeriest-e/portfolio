import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  platform: "iOS" | "Android" | "Cross-platform";
  image?: string;
}

const ProjectCard = ({ title, description, techStack, githubUrl, platform, image }: ProjectCardProps) => {
  const platformColors = {
    iOS: "bg-primary/10 text-primary",
    Android: "bg-accent/10 text-accent",
    "Cross-platform": "bg-muted text-muted-foreground",
  };

  return (
    <div className="brutal-card group overflow-hidden">
      {image && (
        <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden">
          <img 
            src={image} 
            alt={`${title} mockup`}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <span className={`px-2 py-1 text-xs font-mono ${platformColors[platform]}`}>
          {platform}
        </span>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-secondary transition-colors"
            aria-label={`View ${title} on GitHub`}
          >
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="brutal-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
