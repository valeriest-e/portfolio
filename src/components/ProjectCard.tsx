import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  platform: "iOS" | "Android" | "Cross-platform";
}

const ProjectCard = ({ title, description, techStack, githubUrl, platform }: ProjectCardProps) => {
  const platformColors = {
    iOS: "bg-primary/10 text-primary",
    Android: "bg-accent/10 text-accent",
    "Cross-platform": "bg-muted text-muted-foreground",
  };

  return (
    <div className="brutal-card group">
      <div className="flex items-start justify-between mb-4">
        <span className={`px-2 py-1 text-xs font-mono ${platformColors[platform]}`}>
          {platform}
        </span>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-secondary transition-colors"
          aria-label={`View ${title} on GitHub`}
        >
          <Github className="w-5 h-5" />
        </a>
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
