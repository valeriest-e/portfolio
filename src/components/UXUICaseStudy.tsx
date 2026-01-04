import Header from "./Header";
import Gallery from "./Gallery";
import UIScreenSection from "./UIScreenProps"

interface CaseStudyProps {
  heroImage: string;
  keywords: string;
  title: string;
  role: string;
  projectType: string;
  tools: string;
  overview: string;
  challenges: string[];
  userNeeds?: string | string [];
  userNeedsImage?: string;
  persona: {
    name: string;
    description: string;
    goals: string;
    motivations: string;
    painPoints: string;
    image?: string;
  };
  wireframes: string[];
  designStrategy?: string;
  uiScreens: {
    label?: string;
    images: string[];
    layout?:  "desktop-main" | "single" | "masonry";
  desktopRatio?: number;
  }[];
prototypes?: {
  label: string;
  url: string;
}[];
  outcome: string[];
  mediumUrl?: string;
}

const CaseStudyTemplate = ({
  heroImage,
  keywords,
  title,
  role,
  projectType,
  tools,
  overview,
  challenges,
  userNeeds,
  userNeedsImage,
  persona,
  wireframes,
  designStrategy,
  uiScreens,
  prototypes,
  outcome,
  mediumUrl,
}: CaseStudyProps) => {
  return (
    <main className="w-full bg-background">
      
      {/* Header / Top Navigation */}
      <Header currentPageName={title}/>

{/* Hero Section */}
<section className="w-full h-[500px] md:h-[800px] overflow-hidden relative">
  <img
    src={heroImage}
    alt={title}
    className="w-full h-full object-cover object-center"
  />
</section>
    
    {/* Intro Section */}
    <section className="container mx-auto px-4 py-20 max-w-5xl text-left">
      <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
        {keywords}
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-12">{title}</h1>
      <div className="grid md:grid-cols-3 gap-6 text-sm">
        <div><strong>Role:</strong><br />{role}</div>
        <div><strong>Project Type:</strong><br />{projectType}</div>
        <div><strong>Tools:</strong><br />{tools}</div>
      </div>
    </section>
    
    {/* Overview */}
    <section className="container mx-auto px-4 max-w-5xl mb-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold mb-3">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{overview}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Design Challenge</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
    {challenges.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
          </div>
        </div>
      </section>

{/* Research */}
<section className="bg-background/80 py-16">
<div className="flex flex-col md:flex-row gap-8 max-w-full">    
    {/* Left: Persona Image */}
    {persona.image && (
      <div className="md:w-1/2 w-full flex-shrink-0 h-auto md:h-auto -ml-4 md:ml-0">
        <img
          src={persona.image}
          alt={persona.name}
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
    )}

    {/* Right: Text Content */}
    <div className="md:w-1/3 w-full flex flex-col gap-6 justify-center px-4 md:px-0">
      <h2 className="text-2xl font-bold mb-4">Research Results</h2>

      {/* User Needs */}
<div>
  <h3 className="font-mono font-semibold text-lg mb-4 text-foreground">
    User Needs
  </h3>

  {Array.isArray(userNeeds) && userNeeds.length > 0 && (
    <ul className="list-disc pl-5 space-y-2 font-mono text-sm text-muted-foreground">
      {userNeeds.map((need, index) => (
        <li key={index}>{need}</li>
      ))}
    </ul>
  )}

  {typeof userNeeds === "string" && (
    <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
      {userNeeds}
    </p>
  )}

  {userNeedsImage && (
    <img
      src={userNeedsImage}
      alt="User needs"
      className="w-full object-cover object-center mb-6"
    />
  )}
</div>

      {/* Persona Info */}
      <div>
        <h3 className="font-mono font-semibold text-lg mb-4 text-foreground">
          Persona Details
        </h3>
        <p className="font-mono text-sm text-muted-foreground mb-2">{persona.description}</p>
        <p className="font-mono text-sm text-muted-foreground mb-2"><strong>Goals:</strong> {persona.goals}</p>
        <p className="font-mono text-sm text-muted-foreground mb-2"><strong>Motivations:</strong> {persona.motivations}</p>
        <p className="font-mono text-sm text-muted-foreground mb-2"><strong>Pain Points:</strong> {persona.painPoints}</p>
      </div>
    </div>
  </div>
</section>

      {/* Wireframes */}
<Gallery images={wireframes} label="Wireframes" />

      {/* Strategy */}
      {designStrategy && (
        <section className="w-full py-20 mb-20 flex items-center justify-center">
            <p className="text-2xl md:text-xl font-mono max-w-5xl text-center px-4">{designStrategy}</p>
        </section>
      )}

      {/* UI Screens */}
{uiScreens.map((section, i) => (
  <UIScreenSection key={i} section={section} />
))}

      {/* Prototype */}
{prototypes?.length ? (
  <section className="container mx-auto px-4 max-w-6xl mb-20">
    <h2 className="text-2xl font-bold mb-8 text-center">Prototype</h2>    

    <div
      className={`grid gap-8 ${
        prototypes.length === 1 ? "justify-items-center" : "md:grid-cols-2"
      }`}
    >
      {prototypes.map((proto, i) => (
        <div
          key={i}
          className={`flex flex-col items-start md:items-start w-full ${
            prototypes.length === 1 ? "max-w-2xl" : ""
          }`}
        >
          <p className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
            {proto?.label ?? "Prototype"}
          </p>

          <div className="w-full aspect-video">
            <iframe
              src={proto?.url ?? ""}
              className="w-full h-full"
              allowFullScreen
              title={proto?.label ?? "Prototype"}
            />
          </div>

          <a
            href={proto?.url?.replace("embed/", "") ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline text-sm mt-2"
          >
            Watch on YouTube
          </a>
        </div>
      ))}
    </div>
  </section>
) : null}

      {/* Outcome */}
      <section className="container mx-auto px-4 max-w-3xl mb-20">
        <h2 className="text-2xl font-bold mb-4">Outcome & Learnings</h2>
        <div className="space-y-4 text-muted-foreground">
          {outcome.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </section>

      {/* CTA */}
{mediumUrl && (
  <section className="container mx-auto px-4 max-w-3xl mb-32 text-left">
    <a
      href={mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-primary text-lg"
    >
      Read the full case study on Medium →
    </a>
  </section>
)}
    </main>
  );
};

export default CaseStudyTemplate;