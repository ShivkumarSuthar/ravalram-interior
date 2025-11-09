'use client';
import { useState } from "react";
import styled from "styled-components";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Consultation",
    desc: "We start with understanding your lifestyle, preferences, and design aspirations through detailed conversations and site visits.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
  },
  {
    id: "02",
    title: "Concept & Design Development",
    desc: "Our designers create comprehensive plans, 3D visualizations, and material selections tailored to your unique style and budget.",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
  },
  {
    id: "03",
    title: "Execution & Installation",
    desc: "Expert craftsmen bring designs to life with precision carpentry, painting, flooring, and custom furniture installation.",
    img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop",
  },
  {
    id: "04",
    title: "Final Walkthrough & Handover",
    desc: "We conduct thorough quality checks, styling touches, and a complete walkthrough to ensure your absolute satisfaction.",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
  },
];

const Container = styled.section`
  background: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop&q=20&blur=200');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: 'Inter', 'Golos Text', sans-serif;
`;

const ProcessSection = styled.div`
  padding: 2.5rem 1.5rem;

  @media (min-width: 768px) {
    padding: 5rem 3rem;
  }
`;

const ProcessHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-bottom: 5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderLeft = styled.div`
  flex: 1;
  min-width: 280px;
`;

const ProcessTag = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #d4a053;
  background: #fff;
  padding: 8px 18px;
  border-radius: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: inline-block;
  margin-top: 0.5rem;
`;

const ProcessTitle = styled.h2`
  font-family: 'Playfair Display', 'Cal Sans', Georgia, serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
  margin-top: 1.25rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.375rem;
  }

  span {
    color: #d4a053;
  }
`;

const ProcessDesc = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #444;
  max-width: 550px;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProcessCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  position: relative;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
  }
`;

const ProcessImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 0.75rem;
`;

const ProcessImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${ProcessCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProcessContent = styled.div`
  padding: 1.25rem 0.625rem 1.25rem;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProcessContentTitle = styled.h3`
  font-family: 'Playfair Display', 'Cal Sans', Georgia, serif;
  font-size: 1.375rem;
  font-weight: 600;
  margin-bottom: 0.625rem;
  color: #111;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StepId = styled.span`
  color: #d4a053;
  font-weight: 700;
`;

const ProcessContentDesc = styled.p`
  font-size: 0.9375rem;
  color: #555;
  line-height: 1.7;
  margin: 0;
`;

const BelowProcessText = styled.div`
  color: #333333;
  margin-top: 3rem;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  .highlight-text {
    color: #d4a053;
    font-weight: 600;
  }
`;

export default function ProcessSectionComponent() {
  return (
    <Container>
      <ProcessSection>
        <ProcessHeader>
          <HeaderLeft>
            <ProcessTag>HOW WE WORK</ProcessTag>
            <ProcessTitle>
              Our proven <span>design & renovation</span> process for exceptional spaces
            </ProcessTitle>
          </HeaderLeft>
          <ProcessDesc>
            From initial concept to final reveal, we guide you through every step with transparency and expertise. Our streamlined process ensures your home transformation is stress-free and exceeds expectations.
          </ProcessDesc>
        </ProcessHeader>

        <ProcessGrid>
          {processSteps.map((step, i) => (
            <ProcessCard key={i} className={`step-${i + 1}`}>
              <ProcessImageWrapper>
                <ProcessImage
                  src={step.img}
                  alt={step.title}
                />
              </ProcessImageWrapper>
              <ProcessContent>
                <ProcessContentTitle>
                  <StepId>{step.id}</StepId> {step.title}
                </ProcessContentTitle>
                <ProcessContentDesc>{step.desc}</ProcessContentDesc>
              </ProcessContent>
            </ProcessCard>
          ))}
        </ProcessGrid>

        <BelowProcessText>
          Ready to transform your space? <span className="highlight-text">Let's start your journey today</span>
        </BelowProcessText>
      </ProcessSection>
    </Container>
  );
}