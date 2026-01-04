import slide1 from "@/assets/art-app/1.png";
import slide2 from "@/assets/art-app/2.png";
import slide3 from "@/assets/art-app/3.png";
import slide4 from "@/assets/art-app/4.png";
import slide5 from "@/assets/art-app/5.png";
import slide6 from "@/assets/art-app/6.png";
import slide7 from "@/assets/art-app/7.png";
import slide8 from "@/assets/art-app/8.png";
import slide9 from "@/assets/art-app/9.png";
import slide10 from "@/assets/art-app/10.png";
import slide11 from "@/assets/art-app/11.png";
import slide12 from "@/assets/art-app/12.png";
import slide13 from "@/assets/art-app/13.png";
import slide14 from "@/assets/art-app/14.png";
import slide15 from "@/assets/art-app/15.png";
import slide16 from "@/assets/art-app/16.png";
import slide17 from "@/assets/art-app/17.png";
import slide18 from "@/assets/art-app/18.png";

const slides = [
  slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9,
  slide10, slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18
];

const ArtAppCaseStudy = () => {
  return (
    <main className="w-full bg-background">
      <div className="w-full flex flex-col items-center">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Art App slide ${index + 1}`}
            className="w-full h-auto block"
          />
        ))}
      </div>

      <section className="w-full py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Us</h2>

    <div className="max-w-6xl mx-auto flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div>
          <p className="text-lg leading-tight">
            <span className="text-red-600 font-bold">B</span>enjamin Sparwasser<br/>
            <span className="text-red-600 font-bold">A</span>lex Jäger Peña<br/>
            <span className="text-red-600 font-bold">V</span>aleria Bilous
          </p>
        </div>
        <div>
          <p className="text-lg leading-tight">
            We are a team of developers and designers passionate about creating meaningful digital experiences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="flex items-center gap-2">
          <span className="font-bold">Email:</span>
          <a href="mailto:bav-labs@proton.me" className="underline text-primary">
            bav-labs@proton.me
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Github:</span>
          <a href="https://github.com/BAV-Labs" target="_blank" rel="noopener noreferrer" className="underline text-primary">
            github.com/BAV-Labs
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
};

export default ArtAppCaseStudy;