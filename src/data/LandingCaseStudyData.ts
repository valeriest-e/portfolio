import heroImg from "@/assets/creative-studio/hero.png";
import personaImg from "@/assets/creative-studio/persona-lea.png";
import researchImg from "@/assets/creative-studio/research.png";

import wire1 from "@/assets/creative-studio/wireframe-1.png";
import wire2 from "@/assets/creative-studio/wireframe-2.png";
import wire3 from "@/assets/creative-studio/wireframe-3.png";
import wire4 from "@/assets/creative-studio/wireframe-4.png";
import wire5 from "@/assets/creative-studio/wireframe-5.png";
import wire6 from "@/assets/creative-studio/wireframe-6.png";
import wire7 from "@/assets/creative-studio/wireframe-7.png";
import wire8 from "@/assets/creative-studio/wireframe-8.png";

import moodboardImg from "@/assets/creative-studio/moodboard.png";
import styleTileImg from "@/assets/creative-studio/style-tile.png";

const CreativeStudioLandingCaseStudyData = {
  heroImage: heroImg,
  keywords: "Landing Page • Web & Mobile • Creative • UX/UI Design",
  title: "Creative Studio Landing",
  role: "UX/UI Designer",
  projectType: "Landing Page (Web & Mobile)",
  tools: "Figma, UX Research, Market Analysis",
  overview:
    "This individual UX/UI project focused on designing a responsive landing page for Creative Studio — a performing arts space dedicated to nurturing young talent in dance and music. The goal was to create a visually expressive yet structured experience that communicates the studio’s values, offerings, and creative opportunities.",

  challenges: [
    "Design a user-friendly and visually engaging landing page",
    "Communicate the creative identity and values of Creative Studio",
    "Encourage exploration through a clear and intuitive layout",
    "Balance emotional storytelling with strong calls to action"
  ],

  userNeeds: "Through market analysis and user research, it became clear that aspiring performers need a creative space where they can practice, collaborate, and express their individuality. The findings highlighted a strong demand for studios that offer not only rehearsal areas, but also opportunities for production, promotion, and learning new arts — especially in dance and music.",
  userNeedsImage: researchImg,

  persona: {
    name: "Lea",
    description:
      "Lea is passionate about dance and creative self-expression. She actively seeks inspiring environments where she can grow artistically, collaborate with others, and produce content for her social media.",
    goals:
      "Develop her dance skills and explore new areas of performing arts",
    motivations:
      "Connect with creative communities and learn from industry professionals",
    painPoints:
      "Difficulty finding a studio that combines artistic growth with professional production support",
    image: personaImg
  },

  wireframes: [
    wire1,
    wire2,
    wire3,
    wire4,
    wire5,
    wire6,
    wire7,
    wire8
  ],

  uiScreens: [
    {
      label: "Moodboard & Style Tile",
      images: [moodboardImg, styleTileImg],
      desktopRatio: 0.63
    }
  ],

  prototypes: [
    {
      label: "Landing Page Prototype",
      url: "https://www.youtube.com/embed/ukeVPSgcqdU"
    }
  ],

  outcome: [
    "The landing page clearly communicates Creative Studio’s offerings and values.",
    "The layout is visually engaging, easy to navigate, and focused on user engagement.",
    "Clear calls to action encourage users to explore classes, masterclasses, and creative opportunities.",
    "Future improvements include additional user testing to validate expectations and refine the experience."
  ],

  mediumUrl:
    "https://medium.com/@valerie.be/bde5613faf55"
};

export default CreativeStudioLandingCaseStudyData;