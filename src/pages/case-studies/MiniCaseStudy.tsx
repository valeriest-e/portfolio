import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MiniCaseStudiesData } from "@/data/MiniCaseStudiesData";
import Header from "@/components/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MiniCaseStudy = () => {
  const { id } = useParams();
  const caseData = MiniCaseStudiesData[parseInt(id || "0")];

  const [scrollPositions, setScrollPositions] = useState<number[]>([]);

  if (!caseData) return <div className="text-center py-20">Case study not found</div>;

  const scrollGallery = (index: number, direction: "left" | "right") => {
    const gallery = document.getElementById(`gallery-${index}`);
    if (gallery) {
      const scrollAmount = gallery.offsetWidth;
      gallery.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPageName={caseData.title} />

      <main className="container mx-auto px-4 pt-32 max-w-6xl">
        {/* Intro: Two columns */}
        <section className="grid md:grid-cols-2 gap-12 mb-16 text-center md:text-left">
          <div>
            <h1 className="text-5xl font-bold mb-4">{caseData.title}</h1>
            <p className="text-muted-foreground text-lg">{caseData.role} — {caseData.client}</p>
          </div>
          <div className="text-muted-foreground text-base">
            <p>{caseData.overview}</p>
          </div>
        </section>

        {/* DESIGNED / DEVELOPED / CREATED blocks */}
        {caseData.blocks.map((block, i) => (
          <section key={i} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-6">{block.label.toUpperCase()}</h2>
            
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
              {block.description.map((text, idx) => (
                <p key={idx} className="text-muted-foreground text-base">{text}</p>
              ))}
            </div>

            {/* Gallery with arrows */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={() => scrollGallery(i, "left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/70 rounded-full shadow hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => scrollGallery(i, "right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/70 rounded-full shadow hover:bg-background transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div
                id={`gallery-${i}`}
                className="flex overflow-x-auto gap-0 scroll-smooth snap-x snap-mandatory no-scrollbar"
              >
                {block.images.map((img, idx) => (
                  <div key={idx} className="flex-shrink-0 w-full md:w-[90%] snap-start">
                    <img
                      src={img}
                      alt={`${block.label} ${idx + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Links */}
        {caseData.links?.length > 0 && (
          <div className="text-center mt-12 mb-32">
            {caseData.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline mx-4 text-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MiniCaseStudy;