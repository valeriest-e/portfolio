import heroImg from "@/assets/atelier/hero.png";
import personaImg from "@/assets/atelier/persona-eva.png";
import userNeedsImg from "@/assets/atelier/user needs.png"

import wire1 from "@/assets/atelier/wireframe-1.png";
import wire2 from "@/assets/atelier/wireframe-2.png";
import wire3 from "@/assets/atelier/wireframe-3.png";
import wire4 from "@/assets/atelier/wireframe-4.png";
import homeDesktop from "@/assets/atelier/home-desktop.png";
import homeMobile from "@/assets/atelier/home-mobile.png";
import collectionsDesktop from "@/assets/atelier/collections-desktop.png";
import collectionsMobile from "@/assets/atelier/collections-mobile.png";

const ECommerceCaseStudyData = {
  heroImage: heroImg,
  keywords: "E-commerce Web & Mobile • UX/UI Design",
  title: "Handmade Jewelry Store",
  role: "UX/UI Designer",
  projectType: "E-commerce Website & Mobile Experience",
  tools: "Figma, FigJam, User Interviews, Surveys",
  overview:
    "Atelier Momdjian is a one-woman handmade jewelry brand based in the Netherlands. The brand has a strong emotional connection with its customers, who value the personal touch and the craftsmanship behind each piece. As part of a UX/UI bootcamp, I collaborated closely with the jewelry designer to create an immersive and trustworthy online shopping experience that reflects the brand’s values and story.",
  challenges: [
    "Showcase jewelry pieces in an immersive and personalized way",
    "Highlight the unique, handmade nature and the story behind each piece",
    "Set clear expectations about size, color, and materials",
    "Create an intuitive and confident purchasing experience"
  ],
  userNeedsImage: userNeedsImg,
  persona: {
    name: "Eva",
    description:
      "Eva appreciates handmade and unique items and enjoys treating herself and her loved ones with meaningful gifts. She expresses her individuality through clothing and accessories and actively seeks out brands that align with her personal values.",
    goals:
      "Find unique jewelry pieces and support small artists and local brands",
    motivations:
      "Express individuality, create emotional connections through gifts, invest in quality products",
    painPoints:
      "Feeling overwhelmed by too many options and difficulty identifying truly unique pieces",
    image: personaImg
  },
  wireframes: [wire1, wire2, wire3, wire4],
  designStrategy:
    "The final design focuses on storytelling, transparency, and emotional connection to build trust and highlight the handmade nature of the brand.",
  uiScreens: [
    {
      label: "Home Page",
      images: [homeDesktop, homeMobile],
      desktopRatio: 0.8
    },
    {
      label: "Collections Page",
      images: [collectionsDesktop, collectionsMobile],
      desktopRatio: 0.8
    }
  ],
  prototypes: [
    {
      label: "Mobile Prototype",
      url: "https://www.youtube.com/embed/YRaqN9eUQrE"
    },
    {
      label: "Desktop Prototype",
      url: "https://www.youtube.com/embed/9ZQqaBZ_q4Y"
    }
  ],
  outcome: [
    "The final design delivers a user-centered and visually cohesive experience that aligns with the brand’s vision and values.",
    "User feedback confirmed that the layout feels intuitive and easy to navigate, allowing customers to quickly understand the products and brand story.",
    "Participants highlighted increased confidence in purchasing decisions thanks to clear product information and realistic imagery."
  ],
  mediumUrl:
    "https://medium.com/@valerie.be/ux-ui-case-study-handmade-jewelry-a24c833e9648"
};

export default ECommerceCaseStudyData;