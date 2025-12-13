import HeroSlidesController from "./HeroSlidesController";
import { HeroSlide1, HeroSlide2, HeroSlide3, HeroSlide4 } from "./HeroSlides";

export default function HeroLayout() {
  const slides = [
    <HeroSlide1 key="slide1" />,
    // <HeroSlide2 key="slide2" />,
    // <HeroSlide3 key="slide3" />,
    // <HeroSlide4 key="slide4" />,
  ];

  return <HeroSlidesController slides={slides} slideDuration={10000} />;
}
