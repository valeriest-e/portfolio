import ProjectCard from "./ProjectCard";
import lunariMockup from "@/assets/lunari-mockup.jpg";
import artAppMockup from "@/assets/art-app-mockup.jpg";
import mindtrekMockup from "@/assets/mindtrek-mockup.jpg";

const projects = [
  {
    title: "Lunari — Dream Interpreter",
    description: "An AI-powered Android app for logging and interpreting dreams. Users can analyze, visualize, and explore their subconscious with personalized insights and rich imagery. Full CRUD functionality and cloud storage via Firebase.",
    techStack: ["Android", "Kotlin", "Jetpack Compose", "MVVM", "Firebase", "OpenAI API", "Unsplash API", "Retrofit"],
    githubUrl: "https://github.com/valeriia-bilous",
    platform: "Android" as const,
    image: lunariMockup,
  },
  {
    title: "Art App — The Met Gallery",
    description: "A collaborative mobile app showcasing The Met's collection, allowing users to browse artworks, view details, and explore curated pieces. Built as a team project, emphasizing clean UI, responsive design, and real API integration.",
    techStack: ["Android", "Kotlin", "Jetpack Compose", "MVVM", "REST API", "Team Collaboration", "Git"],
    githubUrl: "https://github.com/valeriia-bilous",
    platform: "Android" as const,
    image: artAppMockup,
  },
  {
    title: "MindTrek — Mindful Journaling",
    description: "An iOS app for mindful journaling, helping users capture emotions, memories, and reflections. Features include emotion-based entries, calendar browsing, and map visualization of personal experiences.",
    techStack: ["iOS", "SwiftUI", "Xcode", "MapKit", "CoreLocation", "MVVM", "Local Storage"],
    githubUrl: "https://github.com/valeriia-bilous",
    platform: "iOS" as const,
    image: mindtrekMockup,
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
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
