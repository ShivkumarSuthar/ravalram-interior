"use client";

import React from "react";
import styled, { css } from "styled-components";
import {
  Ruler,
  Hammer,
  Construction,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

/* -- Component -- */
export default function AboutSection() {
const services = [
  {
    title: "Interior Design & Space Planning",
    desc: "From modern minimalism to warm, cozy classics — we design interiors that match your lifestyle and improve daily living.",
    icon: <Ruler className="icon" />,
  },
  {
    title: "Custom Carpentry & Woodwork",
    desc: "Wardrobes, modular kitchens, TV units, wall paneling and tailored storage — precision-crafted for durability and finish.",
    icon: <Hammer className="icon" />,
  },
  {
    title: "Home Renovation & Remodeling",
    desc: "Full home transformations: structural upgrades, layout improvements and premium finishes to make old spaces feel brand new.",
    icon: <Construction className="icon" />,
  },
  {
    title: "End-to-End Home Execution",
    desc: "End-to-End Home Execution — demolition, procurement, labour management, quality control and final finishes for a stress-free handover.",
    icon: <ClipboardCheck className="icon" />,
  },
];



  return (
    <Wrapper>
      <AboutSectionWrap>
        <TopRow>
          <div>
            <Tag darkBg={false}>Who We Are</Tag>
          </div>

          <HeadingBlock>
            <h2>
              Crafting meaningful spaces with expert design, precision
              carpentry, and{" "}
              <Highlight>end-to-end renovation excellence</Highlight>.
            </h2>

            <p className="section-desc">
              With <Highlight>30+ years of expertise</Highlight> and
              <Highlight>hundreds of completed homes</Highlight>, we create
              interiors defined by quality, clarity, and lasting craftsmanship.
              From smart space planning to{" "}
              <Highlight>custom-built details</Highlight> and seamless on-site
              execution, our team blends creativity, discipline, and dependable
              project management to deliver spaces that stand the test of time.
            </p>
          </HeadingBlock>
        </TopRow>

        <CardsGrid>
          {services.map((service, i) => (
            <ServiceCard key={i}>
              <CardHeader>
                <h3>{service.title}</h3>
                <IconBox>{service.icon}</IconBox>
              </CardHeader>
              <Divider />
              <p className="service-desc">{service.desc}</p>
            </ServiceCard>
          ))}
        </CardsGrid>
      </AboutSectionWrap>

      {/* More About (Since 1991) - dark background section */}
      {/* <MoreAbout>
  <ContentWrapper>
    <TextContainer>
      <Tag darkBg={true}>Since 1991</Tag>

      <h2>
        Building Better Homes,<br />
        Where <HighlightLight>Design Meets Craftsmanship</HighlightLight>
      </h2>

      <FeaturesList>
        <li>30+ Years Experience</li>
        <li>Quality-Assured Work</li>
        <li>Custom Carpentry</li>
        <li>Complete Home Renovations</li>
      </FeaturesList>

      <p className="section-desc">
        For over three decades, we’ve helped families redesign, rebuild, and reimagine their spaces. 
        From interiors and carpentry to full home renovation, our team handles planning, materials, 
        execution, and finishing — giving you a home that’s functional, beautiful, and built to last.
      </p>

      <CTA href="#">
        Take Counsel
        <span className="cta-icon">
          <ArrowUpRight size={16} />
        </span>
      </CTA>
    </TextContainer>

    <ImageWrap>
      <StyledImage
        src="/images/h1-banner01.jpg"
        alt="About Background"
        fill
        priority
      />
    </ImageWrap>
  </ContentWrapper>
</MoreAbout> */}

    </Wrapper>
  );
}

/* ===========================
   Styled-components
   =========================== */

const Wrapper = styled.section`
  width: 100%;
  font-family: var(--font-body, "Golos Text", sans-serif);
`;

/* -- About (top white area) -- */
const AboutSectionWrap = styled.div`
  padding: 40px 24px;
  background-image: var(--bg-about-page);
  background-size: cover;
  background-position: center;
`;

/* Top row: tag + heading */
const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  flex-wrap: wrap;
`;

/* Heading block request: max-width 75% */
const HeadingBlock = styled.div`
  max-width: 75%;
  display: flex;
  flex-direction: column;
  gap: 18px;

  h2 {
    font-family: var(--font-heading, "Cal Sans");
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--color-secondary, #101010);
    line-height: 1.2;
    margin: 0;
  }

  .section-desc {
    max-width: 70%;
    font-size: 1.05rem;
    color: var(--color-text, #444);
    line-height: 1.65;
  }

  @media (max-width: 900px) {
    max-width: 100%;

    h2 {
      font-size: 2rem;
      line-height: 1.25;
    }

    .section-desc {
      max-width: 100%;
      font-size: 1rem;
    }
  }
`;

/* Tag component - supports darkBg prop */
const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  border-radius: 100vmax;
  height: 32px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 24px;
  position: relative;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  ${(p) =>
    p.darkBg
      ? css`
          /* When tag sits on a dark background (more-about) */
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
          &::before {
            background-color: var(--color-primary, #d4a053);
          }
        `
      : css`
          /* When tag sits on a light/white background (top about) */
          background: transparent;
          border: 1px solid var(--navbar-border, #e5e5e5);
          color: var(--color-secondary, #101010);
          &::before {
            background-color: var(--color-primary, #d4a053);
          }
        `}
`;

/* Highlight styles */
const Highlight = styled.span`
  color: var(--color-brand, #d4a053);
`;

const HighlightLight = styled.span`
  color: #fff;
`;

/* Cards grid */
const CardsGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: var(--color-light, #fff);
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease;
  &:hover {
    transform: translateY(-6px);
  }

  h3 {
    font-family: var(--font-heading, "Cal Sans");
    font-size: 1.25rem;
    margin: 0;
    color: var(--color-text, #333);
  }

  .service-desc {
    font-size: 0.95rem;
    color: var(--color-text, #666);
    line-height: 1.6;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const Divider = styled.div`
  height: 1px;
  background: var(--navbar-border, #e5e5e5);
  margin-bottom: 12px;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    width: 40px;
    height: 40px;
    color: var(--color-brand, #d4a053);
  }
`;

/* -- More About (dark background) -- */
const MoreAbout = styled.div`
  position: relative;
  z-index: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    var(--bg-more-about);
  color: #fff;
  padding: 48px 24px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
  }
`;


const TextContainer = styled.div`
  flex: 1;

  h2 {
    font-size: 2.4rem;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  .section-desc {
    max-width: 85%;
    line-height: 1.65;
  }

  @media (max-width: 900px) {
    text-align: left;

    h2 {
      font-size: 2rem;
    }

    .section-desc {
      max-width: 100%;
    }
  }
`;


const FeaturesList = styled.ul`
  margin: 20px 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  li {
    background: var(--gray-100);
    padding: 8px 16px;
    border-radius: 100vmax;
    font-size: 0.9rem;
    font-weight: 500;
  }

  @media (max-width: 900px) {
    gap: 10px;
  }
`;


const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: 999px;
  text-decoration: none;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.25s ease;

  .cta-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--color-primary, #d4a053);
    color: #fff;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const ImageWrap = styled.div`
  position: relative;
  flex: 1;
  height: 420px;
  border-radius: 14px;
  overflow: hidden;

  @media (max-width: 900px) {
    height: 300px;
    width: 100%;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 12px;
`;


/* end */
