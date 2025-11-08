"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowUpRight, ArrowRight } from "lucide-react";

// Slide 1: Minimal Layout (Original Design)
const Slide1 = ({ isAnimating }) => (
  <Slide1Wrapper $isAnimating={isAnimating}>
    <Container>
      <TextWrapper $isAnimating={isAnimating}>
        <TagBox>FAST AND RELIABLE</TagBox>

        <Heading>
          Find Your Inspired <br />
          <span>Interior Design</span>
        </Heading>

        <BottomDiv>
          <Description>
            Whether it's your home, office, or a commercial project, we are
            always dedicated to bringing your vision to life.
          </Description>

          <CTAButton href="#">
            Take Counsel
            <span className="icon">
              <ArrowUpRight size={18} />
            </span>
          </CTAButton>
        </BottomDiv>
      </TextWrapper>
    </Container>
  </Slide1Wrapper>
);

// Slide 3: Alternate Layout
const Slide3 = ({ isAnimating }) => (
  <Slide3Wrapper $isAnimating={isAnimating}>
    <Container>
      <TextWrapper $isAnimating={isAnimating}>
        <TagBox>EXPERT CRAFTSMANSHIP</TagBox>

        <Heading>
          Premium Quality <br />
          <span>Interior Solutions</span>
        </Heading>

        <BottomDiv>
          <Description>
            Experience exceptional craftsmanship with our custom interior
            designs, tailored renovations, and comprehensive home improvement
            solutions.
          </Description>

          <CTAButton href="#">
            Start Your Project
            <span className="icon">
              <ArrowUpRight size={18} />
            </span>
          </CTAButton>
        </BottomDiv>
      </TextWrapper>
    </Container>

    <StatsCardLeft $isAnimating={isAnimating}>
      <h3>500+</h3>
      <p className="subtitle">Happy Homeowners</p>
      <div className="details">
        <p>
          <span className="dot" />
          Custom Kitchen Designs
        </p>
        <p>
          <span className="dot" />
          Bathroom Remodeling
        </p>
        <p>
          <span className="dot" />
          Full Home Makeovers
        </p>
      </div>
    </StatsCardLeft>

    <ImageCardRight $isAnimating={isAnimating}>
      <div className="image-wrapper">
        <ImagePlaceholder>Featured Work</ImagePlaceholder>
      </div>
      <p className="caption">Latest Projects</p>
    </ImageCardRight>
  </Slide3Wrapper>
);

// Slide 5: Dark Overlay with Style Cards (Image 2 style)
const Slide5 = ({ isAnimating }) => (
  <Slide5Wrapper $isAnimating={isAnimating}>
    <Slide5Content $isAnimating={isAnimating}>
      <Slide5Heading>
        Designing Homes <br />
        That Reflect Your Vision
      </Slide5Heading>
      <Slide5Description>
        Crafting bespoke living spaces with focus <br />
        on comfort, style, and sustainable design
      </Slide5Description>
      <Slide5Button href="#">Start Your Dream Project</Slide5Button>
    </Slide5Content>

    <StyleCardsWrapper $isAnimating={isAnimating}>
      <StyleCard>
        <div className="card-image style1" />
        <div className="card-content">
          <h4>Victorian Style</h4>
          <a href="#">
            Explore Us <ArrowRight size={14} />
          </a>
        </div>
      </StyleCard>

      <StyleCard>
        <div className="card-image style2" />
        <div className="card-content">
          <h4>Georgian Style</h4>
          <a href="#">
            Explore Us <ArrowRight size={14} />
          </a>
        </div>
      </StyleCard>

      <StyleCard>
        <div className="card-image style3" />
        <div className="card-content">
          <h4>Modern Style</h4>
          <a href="#">
            Explore Us <ArrowRight size={14} />
          </a>
        </div>
      </StyleCard>
    </StyleCardsWrapper>
  </Slide5Wrapper>
);

// Slide 6: Dark with Image Grid (Image 3 style)
const Slide6 = ({ isAnimating }) => (
  <Slide6Wrapper $isAnimating={isAnimating}>
    <Slide6Left $isAnimating={isAnimating}>
      <Slide6Tag>We Believe In Simple & Minimalistic</Slide6Tag>
      <Slide6Heading>
        Turning Ideas into <br />
        Remarkable Design
      </Slide6Heading>
      <Slide6Description>
        At EffiXpert, we reimagine spaces with precision, passion, and purpose.
        From kitchens to living rooms, we elevate your home's potential without
        the stress, delay, or confusion.
      </Slide6Description>
      <Slide6ButtonGroup>
        <Slide6ButtonPrimary href="#">Get Your Free Plan</Slide6ButtonPrimary>
        <Slide6ButtonSecondary href="#">
          Get Started Now
          <span className="arrow-icon">
            <ArrowRight size={18} />
          </span>
        </Slide6ButtonSecondary>
      </Slide6ButtonGroup>
    </Slide6Left>

    <Slide6Right $isAnimating={isAnimating}>
      <ImageGrid>
        <GridImage className="img1" />
        <GridImage className="img2" />
        <GridImage className="img3" />
        <ImageLabel>Bathroom Remodeling</ImageLabel>
      </ImageGrid>
      <GridDots>
        <span className="dot active" />
        <span className="dot" />
        <span className="dot" />
      </GridDots>
    </Slide6Right>
  </Slide6Wrapper>
);

const SLIDE_DURATION = 30000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    <Slide1 key="slide1" isAnimating={isAnimating} />,
    <Slide6 key="slide6" isAnimating={isAnimating} />,
    <Slide3 key="slide3" isAnimating={isAnimating} />,
    <Slide5 key="slide5" isAnimating={isAnimating} />,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <HeroSection>
      {slides[currentSlide]}

      <SlideIndicators>
        {slides.map((_, idx) => (
          <Indicator
            key={idx}
            $active={idx === currentSlide}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentSlide(idx);
                setIsAnimating(false);
              }, 500);
            }}
          />
        ))}
      </SlideIndicators>
    </HeroSection>
  );
}

/* --------------------------
   Base Styled Components
--------------------------- */

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const BaseSlide = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  padding: 0 1rem;
  transition: opacity 0.8s ease-in-out;
  opacity: ${(props) => (props.$isAnimating ? 0.7 : 1)};

  @media (min-width: 1024px) {
    background-attachment: fixed;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const TextWrapper = styled.div`
width: 100%;
  color: #fff;
  text-align: left;
  animation: ${(props) =>
    props.$isAnimating ? "slideOut 0.5s ease" : "slideIn 0.8s ease"};

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-30px);
    }
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TagBox = styled.div`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 8px 14px;
  border-radius: 100vmax;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: var(--font-heading);
  gap: 10px;
  margin-bottom: 24px;
  white-space: nowrap;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    background-color: var(--color-primary);
    border-radius: 50%;
    display: inline-block;
  }
`;

const Heading = styled.h1`
  font-family: var(--font-heading);
  font-weight: 400;
  line-height: 1.1;
  font-size: clamp(2.5rem, 6vw, 7rem);
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

  span {
    color: var(--color-primary);
  }

  @media (max-width: 480px) {
    line-height: 1.2;
  }
`;

const BottomDiv = styled.div`
  padding-top: 2rem;
  padding-left: 4%;
  max-width: 600px;

  @media (max-width: 1024px) {
    padding-left: 0;
    max-width: 100%;
  }
`;

const Description = styled.p`
  padding-bottom: 20px;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #fff;
  opacity: 0.9;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  font-family: var(--font-heading);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  background: transparent;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #c9a15e;
    color: #fff;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    transition: all 0.3s ease;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #c9a15e;

    .icon {
      transform: rotate(45deg);
      background-color: #b18a49;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

/* --------------------------
   Slide 1-3 Styles (Original Theme)
--------------------------- */

const Slide1Wrapper = styled(BaseSlide)`
  background: linear-gradient(rgba(16, 8, 1, 0.46), rgba(16, 8, 1, 0.46)),
    var(--hero-slide-img2);
`;

const Slide3Wrapper = styled(BaseSlide)`
  background: linear-gradient(rgba(16, 8, 1, 0.46), rgba(16, 8, 1, 0.46)),
    var(--hero-slide-img3);
`;

const StatsCardRight = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 24px;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: left;
  max-width: 280px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 3;
  animation: ${(props) =>
    props.$isAnimating ? "slideOutRight 0.5s ease" : "slideInRight 0.8s ease"};

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideOutRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100px);
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 8px;
  }

  .subtitle {
    color: #555;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .details {
    color: #555;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
      display: flex;
      align-items: center;
      gap: 10px;

      .dot {
        width: 8px;
        height: 8px;
        background-color: var(--color-primary);
        border-radius: 50%;
        flex-shrink: 0;
      }
    }
  }

  @media (max-width: 1024px) {
    bottom: 20px;
    right: 20px;
  }

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    right: auto;
    margin: 2rem auto 0;
    max-width: 320px;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 20px;
    h3 {
      font-size: 1.5rem;
    }
  }
`;

const ImageCardLeft = styled.div`
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(8px);
  padding: 10px;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 380px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 3;
  animation: ${(props) =>
    props.$isAnimating
      ? "slideOutLeft 0.5s ease"
      : "slideInLeft 0.8s ease 0.2s backwards"};

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateY(-50%) translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }
  }

  @keyframes slideOutLeft {
    from {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }
    to {
      opacity: 0;
      transform: translateY(-50%) translateX(-100px);
    }
  }

  .image-wrapper {
    width: 100%;
    height: 200px;
    border-radius: 0.75rem;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .caption {
    color: #333;
    font-size: 0.95rem;
    font-weight: 600;
    text-align: center;
  }

  @media (max-width: 1024px) {
    left: 20px;
    max-width: 220px;

    .image-wrapper {
      height: 160px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StatsCardLeft = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 24px;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: left;
  max-width: 280px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 3;
  animation: ${(props) =>
    props.$isAnimating ? "slideOutLeft 0.5s ease" : "slideInLeft 0.8s ease"};

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 8px;
  }

  .subtitle {
    color: #555;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .details {
    color: #555;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
      display: flex;
      align-items: center;
      gap: 10px;

      .dot {
        width: 8px;
        height: 8px;
        background-color: var(--color-primary);
        border-radius: 50%;
        flex-shrink: 0;
      }
    }
  }

  @media (max-width: 1024px) {
    bottom: 20px;
    left: 20px;
  }

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    left: auto;
    margin: 2rem auto 0;
    max-width: 320px;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 20px;
    h3 {
      font-size: 1.5rem;
    }
  }
`;

const ImageCardRight = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 16px;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 280px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 3;
  animation: ${(props) =>
    props.$isAnimating
      ? "slideOutRight 0.5s ease"
      : "slideInRight 0.8s ease 0.2s backwards"};

  .image-wrapper {
    width: 100%;
    height: 200px;
    border-radius: 0.75rem;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .caption {
    color: #333;
    font-size: 0.95rem;
    font-weight: 600;
    text-align: center;
  }

  @media (max-width: 1024px) {
    right: 20px;
    max-width: 220px;

    .image-wrapper {
      height: 160px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/images/project-11-1536x1080.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;


/* --------------------------
   SLIDE 4 STYLES (Image 1 style)
--------------------------- */

// const Slide4Wrapper = styled(BaseSlide)`
//   background: linear-gradient(rgba(16, 8, 1, 0.1), rgba(16, 8, 1, 0.1)),
//     linear-gradient(135deg, #f5f1e8 0%, #faf7f2 50%, #ffe8f5 100%);
//   padding: 0 5%;
// `;

const Slide4Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Slide4Left = styled.div`
  animation: ${(props) =>
    props.$isAnimating ? "fadeOut 0.5s ease" : "fadeInUp 0.8s ease"};

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const Slide4Heading = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);

  span {
    color: var(--color-primary, #c9a15e);
  }
`;

const Slide4Description = styled.p`
  font-size: 1.125rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 500px;
`;

const Slide4Button = styled.a`
  display: inline-block;
  background: var(--color-primary, #c9a15e);
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(201, 161, 94, 0.3);
  font-family: var(--font-heading);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(201, 161, 94, 0.4);
    background: #b18a49;
  }
`;

const Slide4Right = styled.div`
  position: relative;
  animation: ${(props) =>
    props.$isAnimating
      ? "fadeOut 0.5s ease"
      : "fadeInRight 0.8s ease 0.2s backwards"};

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Slide4Image = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 20%;
    right: 10%;
    width: 60%;
    height: 60%;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
`;

const FloatingCard1 = styled.div`
  position: absolute;
  bottom: 15%;
  left: 8%;
  background: white;
  padding: 20px 28px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 16px;
  animation: ${(props) =>
    props.$isAnimating
      ? "slideOutLeft 0.5s ease"
      : "floatIn 0.8s ease 0.4s backwards"};

  @keyframes floatIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideOutLeft {
    to {
      opacity: 0;
      transform: translateX(-100px);
    }
  }

  .icon-group {
    display: flex;
    gap: 4px;
    font-size: 1.5rem;
  }

  .text {
    strong {
      display: block;
      font-size: 1.25rem;
      color: #1a1a1a;
    }
    p {
      font-size: 0.875rem;
      color: #666;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FloatingCard2 = styled.div`
  position: absolute;
  top: 12%;
  right: 8%;
  background: white;
  padding: 16px 24px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 12px;
  animation: ${(props) =>
    props.$isAnimating
      ? "slideOutRight 0.5s ease"
      : "floatIn 0.8s ease 0.6s backwards"};

  @keyframes slideOutRight {
    to {
      opacity: 0;
      transform: translateX(100px);
    }
  }

  .icon-group {
    display: flex;
    gap: 4px;
    font-size: 1.5rem;
  }

  .text {
    strong {
      display: block;
      font-size: 1.125rem;
      color: #1a1a1a;
    }
    p {
      font-size: 0.8rem;
      color: #666;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* --------------------------
   SLIDE 5 STYLES (Image 2 style)
--------------------------- */

const Slide5Wrapper = styled(BaseSlide)`
  background: linear-gradient(rgba(16, 8, 1, 0.5), rgba(16, 8, 1, 0.5)),
    var(--hero-slide-img1);
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 5%;
`;

const Slide5Content = styled.div`
  max-width: 700px;
  margin-bottom: 4rem;
  animation: ${(props) =>
    props.$isAnimating ? "fadeOut 0.5s ease" : "fadeInUp 0.8s ease"};
`;

const Slide5Heading = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: white;
  line-height: 1.1;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
`;

const Slide5Description = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Slide5Button = styled.a`
  display: inline-block;
  background: var(--color-primary, #c9a15e);
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(201, 161, 94, 0.3);
  font-family: var(--font-heading);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(201, 161, 94, 0.5);
    background: #b18a49;
  }
`;

const StyleCardsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  animation: ${(props) =>
    props.$isAnimating
      ? "fadeOut 0.5s ease"
      : "fadeInUp 0.8s ease 0.3s backwards"};

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyleCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  width: 200px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }

  .card-image {
    height: 120px;
    background-size: cover;
    background-position: center;

    &.style1 {
      background: linear-gradient(135deg, #c9a15e 0%, #b18a49 100%);
    }
    &.style2 {
      background: linear-gradient(135deg, #d4a574 0%, #c9a15e 100%);
    }
    &.style3 {
      background: linear-gradient(135deg, #8d7f6f 0%, #6b5d52 100%);
    }
  }

  .card-content {
    padding: 16px;

    h4 {
      font-size: 1rem;
      color: #1a1a1a;
      margin-bottom: 8px;
      font-family: var(--font-heading);
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.875rem;
      color: var(--color-primary, #c9a15e);
      text-decoration: none;
      font-weight: 600;
      transition: gap 0.3s ease;

      &:hover {
        gap: 10px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 180px;
  }
`;

/* --------------------------
   SLIDE 6 STYLES (Image 3 style)
--------------------------- */

const Slide6Wrapper = styled(BaseSlide)`
  background: linear-gradient(rgba(16, 8, 1, 0.7), rgba(16, 8, 1, 0.7)),
    var(--hero-slide-img3);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 5%;
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 5%;
  }
`;

const Slide6Left = styled.div`
  animation: ${(props) =>
    props.$isAnimating ? "fadeOut 0.5s ease" : "fadeInLeft 0.8s ease"};

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Slide6Tag = styled.p`
  color: var(--color-primary, #c9a15e);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const Slide6Heading = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: white;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
`;

const Slide6Description = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 550px;
`;

const Slide6ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Slide6ButtonPrimary = styled.a`
  display: inline-block;
  background: white;
  color: #1a1a1a;
  padding: 14px 28px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  font-family: var(--font-heading);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
  }
`;

const Slide6ButtonSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: white;
  padding: 14px 28px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: var(--font-heading);

  .arrow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: var(--color-primary, #c9a15e);
    border-radius: 50%;
    color: white;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: var(--color-primary, #c9a15e);
    background: rgba(201, 161, 94, 0.1);

    .arrow-icon {
      transform: translateX(4px);
    }
  }
`;

const Slide6Right = styled.div`
  animation: ${(props) =>
    props.$isAnimating
      ? "fadeOut 0.5s ease"
      : "fadeInRight 0.8s ease 0.2s backwards"};

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ImageGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const GridImage = styled.div`
  height: 300px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);

  &.img1 {
    background: linear-gradient(135deg, #d4a574 0%, #c9a15e 100%);
  }
  &.img2 {
    background: linear-gradient(135deg, #8d7f6f 0%, #6b5d52 100%);
  }
  &.img3 {
    background: linear-gradient(135deg, #f5e6d3 0%, #e8d5bb 100%);
  }
`;

const ImageLabel = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  color: #1a1a1a;
  font-size: 0.875rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const GridDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;

    &.active {
      width: 24px;
      border-radius: 4px;
      background: var(--color-primary, #c9a15e);
    }
  }
`;

/* --------------------------
   Slide Indicators
--------------------------- */

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 100;

  @media (max-width: 768px) {
    bottom: 20px;
  }
`;

const Indicator = styled.button`
  width: ${(props) => (props.$active ? "40px" : "12px")};
  height: 12px;
  border-radius: 6px;
  border: none;
  background: ${(props) =>
    props.$active
      ? "var(--color-primary, #c9a15e)"
      : "rgba(255, 255, 255, 0.4)"};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$active ? "0 2px 8px rgba(201, 161, 94, 0.3)" : "none"};

  &:hover {
    background: ${(props) =>
      props.$active
        ? "var(--color-primary, #c9a15e)"
        : "rgba(255, 255, 255, 0.6)"};
  }
`;
