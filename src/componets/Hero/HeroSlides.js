"use client";
import styled, { keyframes } from "styled-components";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                 HERO SLIDE 1                                */
/* -------------------------------------------------------------------------- */
export const HeroSlide1 = ({ isAnimating }) => (
  <HeroSlide1Wrapper $isAnimating={isAnimating}>
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
  </HeroSlide1Wrapper>
);

/* -------------------------------------------------------------------------- */
/*                                 HERO SLIDE 2                                */
/* -------------------------------------------------------------------------- */
export const HeroSlide2 = ({ isAnimating }) => (
  <HeroSlide2Wrapper $isAnimating={isAnimating}>
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
  </HeroSlide2Wrapper>
);

/* -------------------------------------------------------------------------- */
/*                                 HERO SLIDE 3                                */
/* -------------------------------------------------------------------------- */
export const HeroSlide3 = ({ isAnimating }) => (
  <HeroSlide3Wrapper $isAnimating={isAnimating}>
    <SlideContentWrapper $isAnimating={isAnimating}>
      <SlideHeading>
        Designing Homes <br />
        That Reflect Your Vision
      </SlideHeading>
      <SlideDescription>
        Crafting bespoke living spaces with focus <br />
        on comfort, style, and sustainable design
      </SlideDescription>
      <SlideButton href="#">Start Your Dream Project</SlideButton>
    </SlideContentWrapper>

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
  </HeroSlide3Wrapper>
);

/* -------------------------------------------------------------------------- */
/*                                 HERO SLIDE 4                                */
/* -------------------------------------------------------------------------- */
export const HeroSlide4 = ({ isAnimating }) => (
  <HeroSlide4Wrapper $isAnimating={isAnimating}>
    <Slide4Left $isAnimating={isAnimating}>
      <SlideTag>We Believe In Simple & Minimalistic</SlideTag>
      <SlideHeading>
        Turning Ideas into <br />
        Remarkable Design
      </SlideHeading>
      <SlideDescription>
        At EffiXpert, we reimagine spaces with precision, passion, and purpose.
        From kitchens to living rooms, we elevate your home's potential without
        the stress, delay, or confusion.
      </SlideDescription>
      <SlideButtonGroup>
        <PrimaryButton href="#">Get Your Free Plan</PrimaryButton>
        <SecondaryButton href="#">
          Get Started Now
          <span className="arrow-icon">
            <ArrowRight size={18} />
          </span>
        </SecondaryButton>
      </SlideButtonGroup>
    </Slide4Left>

    <Slide4Right $isAnimating={isAnimating}>
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
    </Slide4Right>
  </HeroSlide4Wrapper>
);

/* -------------------------------------------------------------------------- */
/*                           STYLED COMPONENTS                                */
/* -------------------------------------------------------------------------- */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
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
  padding: 0 1rem;
  transition: opacity 0.8s ease-in-out;
`;

const HeroSlide1Wrapper = styled(BaseSlide)`
  background: linear-gradient(rgba(16, 8, 1, 0.46), rgba(16, 8, 1, 0.46)),
    var(--hero-slide-img1);
`;

const HeroSlide2Wrapper = styled(BaseSlide)`
  background: linear-gradient(rgba(16, 8, 1, 0.46), rgba(16, 8, 1, 0.46)),
    var(--hero-slide-img2);
`;

const HeroSlide3Wrapper = styled(BaseSlide)`
  background: linear-gradient(rgba(16, 8, 1, 0.5), rgba(16, 8, 1, 0.5)),
    var(--hero-slide-img3);
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 5%;
`;

const HeroSlide4Wrapper = styled(BaseSlide)`
  background: linear-gradient(rgba(16, 8, 1, 0.7), rgba(16, 8, 1, 0.7)),
    var(--hero-slide-img4);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 0 5%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 5%;
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

/* -------------------------------------------------------------------------- */
/*                          TEXT AND COMMON COMPONENTS                        */
/* -------------------------------------------------------------------------- */

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  color: #fff;
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
  gap: 10px;
  margin-bottom: 24px;

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
  font-weight: 400;
  line-height: 1.1;
  font-size: clamp(2.5rem, 6vw, 7rem);
  color: #fff;

  span {
    color: var(--color-primary);
  }
`;

const BottomDiv = styled.div`
  padding-top: 2rem;
  max-width: 600px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Description = styled.p`
  padding-bottom: 20px;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #fff;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: var(--color-primary);
    color: #fff;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: var(--color-primary);

    .icon {
      transform: rotate(45deg);
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
const SlideContentWrapper = styled.div`
  max-width: 700px;
  margin-bottom: 4rem;
  animation: ${(props) =>
    props.$isAnimating ? "fadeOut 0.5s ease" : "fadeInUp 0.8s ease"};
`;
const SlideHeading = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: white;
  line-height: 1.1;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
`;
const SlideDescription = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const SlideButton = styled.a`
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

const Slide4Left = styled.div`
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

const SlideTag = styled.p`
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

const SlideButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
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

const SecondaryButton = styled.a`
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

const Slide4Right = styled.div`
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