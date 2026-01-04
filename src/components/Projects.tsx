import ProjectCard from "./ProjectCard";
import lunari from "@/assets/projects/lunari.png";
import artApp from "@/assets/projects/art-app.png";
import mindTrek from "@/assets/projects/mindTrek.png";
import { Link } from "react-router-dom";


const projects = [
  {
    title: "Lunari — Dream Interpreter",
    description: "An AI-powered Android app for logging and interpreting dreams. Users can analyze, visualize, and explore their subconscious with personalized insights and rich imagery. Full CRUD functionality and cloud storage via Firebase.",
    techStack: ["Android", "Kotlin", "Jetpack Compose", "MVVM", "Firebase", "OpenAI API", "Unsplash API", "Retrofit"],
    githubUrl: "https://github.com/ValeriiaBilous-25/LunariDreamAIApp",
    platform: "Android" as const,
    image: lunari,
  },
  {
    title: "Art App — The Met Gallery",
    description: "A collaborative mobile app showcasing The Met's collection, allowing users to browse artworks, view details, and explore curated pieces. Built as a team project, emphasizing clean UI, responsive design, and real API integration.",
    techStack: ["Android", "Kotlin", "Jetpack Compose", "MVVM", "REST API", "Team Collaboration", "Git"],
    platform: "Android" as const,
    image: artApp,
    caseStudyUrl: "/case-studies/art-app",
  },
  {
    title: "MindTrek — Mindful Journaling",
    description: "An iOS app for mindful journaling, helping users capture emotions, memories, and reflections. Features include emotion-based entries, calendar browsing, and map visualization of personal experiences.",
    techStack: ["iOS", "SwiftUI", "Xcode", "MapKit", "CoreLocation", "MVVM", "Local Storage", "Firebase"],
    githubUrl: "https://github.com/ValeriiaBilous-25/MindTrek",
    platform: "iOS" as const,
    image: mindTrek,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <p className="section-title">// App Development</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Student projects demonstrating real-world skills in iOS and Android development, 
          clean architecture, API integration, and user-centered design.
        </p>
        
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project) => {
    const link = project.caseStudyUrl || project.githubUrl;

    if (!link) {
      return <ProjectCard key={project.title} {...project} />;
    }

    const isExternal = link.startsWith("http");

    return isExternal ? (
      <a
        key={project.title}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProjectCard {...project} isClickable />
      </a>
    ) : (
      <Link key={project.title} to={link}>
        <ProjectCard {...project} isClickable />
      </Link>
    );
  })}
</div>
      </div>
    </section>
  );
};

export default Projects;
