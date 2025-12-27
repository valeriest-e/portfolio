import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "FitTrack",
    description: "A fitness tracking app with workout logging, progress visualization, and personalized recommendations. Built with clean architecture principles.",
    techStack: ["SwiftUI", "Core Data", "HealthKit", "Charts"],
    githubUrl: "https://github.com/valeriia-bilous",
    platform: "iOS" as const,
  },
  {
    title: "CityGuide",
    description: "Location-based travel companion app with offline maps, local recommendations, and trip planning features using Google Maps API.",
    techStack: ["Kotlin", "Jetpack Compose", "Room", "Google Maps API"],
    githubUrl: "https://github.com/valeriia-bilous",
    platform: "Android" as const,
  },
  {
    title: "TaskFlow",
    description: "Minimalist task management app with drag-and-drop organization, due date reminders, and cloud sync via Firebase.",
    techStack: ["SwiftUI", "Firebase", "CloudKit", "Push Notifications"],
    githubUrl: "https://github.com/valeriia-bilous",
    platform: "iOS" as const,
  },
  {
    title: "RecipeVault",
    description: "Recipe discovery and meal planning app with search functionality, favorites, and shopping list generation from selected recipes.",
    techStack: ["Kotlin", "Jetpack Compose", "Retrofit", "REST API"],
    githubUrl: "https://github.com/valeriia-bilous",
    platform: "Android" as const,
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
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
