// src/data/PetHealthAppCaseStudyData.ts
import heroImg from "@/assets/pet-health/hero.png";
import personaImg from "@/assets/pet-health/persona-ellie.png";
import userNeedsImg from "@/assets/pet-health/user-needs.png";
import moodboardImg from "@/assets/pet-health/moodboard.png";
import sitemapImg from "@/assets/pet-health/sitemap.png";
import styleTileImg from "@/assets/pet-health/style-tile.png";
import lofi from "@/assets/pet-health/lo-fi.png";
import hifi from "@/assets/pet-health/hi-fi.png";
import { Layout } from "lucide-react";

const PetHealthAppCaseStudyData = {
  heroImage: heroImg,
  keywords: "AI-Driven • Mobile App • Pet Care • UX/UI Design",
  title: "Innovative Pet Health App (iOS)",
  role: "UX/UI Designer",
  projectType: "AI-Driven Mobile Application",
  tools: "Figma, User Interviews, Surveys, UX Research",
  overview:
    "As part of a UX/UI design bootcamp, I designed an AI-driven mobile application aimed at improving how pet owners manage their pets’ health and daily care. The goal was to create a centralized and intuitive platform that helps users monitor health data, manage appointments, and access educational resources in one place.",
  challenges: [
    "Design a user-friendly mobile experience for quick access to pet health data",
    "Encourage regular engagement without overwhelming users",
    "Present complex health information in a clear and accessible way",
    "Balance a futuristic visual style with usability"
  ],
  userNeedsImage: userNeedsImg,
  persona: {
    name: "Ellie",
    description:
      "Ellie values efficiency and balance in her daily life. She enjoys spending time outdoors with her dog and actively uses digital tools to stay organized. She is deeply invested in her pet’s health and well-being.",
    goals:
      "Centralize pet information and receive timely reminders for appointments and vaccinations",
    motivations:
      "Stay organized, feel confident about pet care decisions, and continuously learn how to provide the best care for her pet",
    painPoints:
      "Forgetting appointments, managing scattered medical documents, and tracking prescriptions and lab results",
    image: personaImg
  },
  wireframes: [lofi],
  uiScreens: [
    { label: "Information Architecture", images: [sitemapImg], layout: "single", fullWidth: false },
    { label: "Moodboard & Style Tile", images: [moodboardImg, styleTileImg], layout: "desktop-main", desktopRatio: 0.72 },
    { images: [hifi] }
  ],
  prototypes: [
    { label: "Mobile Prototype", url: "https://www.youtube.com/embed/FKDN6cEs_aQ" }
  ],
  outcome: [
    "The final concept delivers a centralized and intuitive platform for managing all aspects of pet care.",
    "User feedback confirmed that the app feels engaging and easy to use despite complex health-related data.",
    "This project highlighted the importance of balancing feature-rich functionality with usability in mobile health applications."
  ],
  mediumUrl: "https://medium.com/@valerie.be/76d464b57bfa"
};

export default PetHealthAppCaseStudyData;