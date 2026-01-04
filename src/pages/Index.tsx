import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import UXUIProjects from "@/components/UXUIProjects";
import DigitalWork from "@/components/DigitalWork";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Portfolio";
    const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = "/favicon.ico";
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = "/favicon.ico";
      document.head.appendChild(newLink)
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Projects />
        <UXUIProjects />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
