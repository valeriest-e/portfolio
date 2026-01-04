import wishFlowImg from "@/assets/ux-ui/wishflow.png";
import elektroImg from "@/assets/ux-ui/elektro.png";
import ecommImg from "@/assets/ux-ui/e-commerce.png";
import landingImg from "@/assets/ux-ui/landing.png";
import petHealthImg from "@/assets/ux-ui/pet-health.png";

const uxUiProjects = [
  { title: "WishFlow", image: wishFlowImg, caseStudyUrl: "/case-studies/wishflow"  },
  { title: "Elektro", image: elektroImg, siteUrl: "https://www.elektroepil-berlin.de" },
  { title: "E-Commerce Website", image: ecommImg, caseStudyUrl: "/case-studies/e-commerce" },
  { title: "Landing Page", image: landingImg, caseStudyUrl: "/case-studies/landing" },
  { title: "Pet Health App", image: petHealthImg, caseStudyUrl: "/case-studies/pethealth" },
];

import { Link } from "react-router-dom";

const UXUIProjects = () => {
  return (
    <section id="ux-ui-projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="section-title">// UX/UI Design</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">UX/UI Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uxUiProjects.map((project) => {
            const link = project.caseStudyUrl || project.siteUrl;
            const isExternal = link?.startsWith("http");

            const card = (
              <div
                className="brutal-card overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 p-0"
              >
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              </div>
            );

            if (!link) return card;

            return isExternal ? (
              <a key={project.title} href={link} target="_blank" rel="noopener noreferrer">
                {card}
              </a>
            ) : (
              <Link key={project.title} to={link}>
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UXUIProjects;