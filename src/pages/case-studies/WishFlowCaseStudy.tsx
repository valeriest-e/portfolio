import slide1 from "@/assets/wishFlow/01.png"
import slide2 from "@/assets/wishFlow/02.png"
import slide3 from "@/assets/wishFlow/03.png"
import slide4 from "@/assets/wishFlow/04.png"
import slide5 from "@/assets/wishFlow/05.png"
import slide6 from "@/assets/wishFlow/06.png"
import slide7 from "@/assets/wishFlow/07.png"
import slide8 from "@/assets/wishFlow/08.png"
import slide9 from "@/assets/wishFlow/09.png"
import slide10 from "@/assets/wishFlow/10.png"
import slide11 from "@/assets/wishFlow/11.png"
import slide12 from "@/assets/wishFlow/12.png"
import slide13 from "@/assets/wishFlow/13.png"
import slide14 from "@/assets/wishFlow/14.png"
import slide15 from "@/assets/wishFlow/15.png"
import slide16 from "@/assets/wishFlow/16.png"
import slide17 from "@/assets/wishFlow/17.png"
import slide18 from "@/assets/wishFlow/18.png"
import slide19 from "@/assets/wishFlow/19.png"
import slide20 from "@/assets/wishFlow/20.png"

const slides = [
  slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, 
  slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19, slide20
];

const WishFlowCaseStudy = () => {
   return (
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
   ) 
}

export default WishFlowCaseStudy