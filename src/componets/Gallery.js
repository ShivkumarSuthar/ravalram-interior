"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

// ==================== Styled Components ====================
const Section = styled.section`
  position: relative;
  overflow: hidden;
  background-color: #f3f4f6;
  padding: 8rem 1.5rem;
`;

const BackgroundText = styled.h1`
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10rem;
  font-weight: 800;
  color: #e5e7eb;
  text-transform: uppercase;
  pointer-events: none;
  user-select: none;
  z-index: 0;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: relative;
  z-index: 10;
`;

const Row = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const GalleryImage = styled.img`
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

// ==================== Component ====================
export default function Gallery() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".gallery-row");

      rows.forEach((row, i) => {
        const direction = i % 2 === 0 ? "+=250" : "-=250"; // alternate left-right
        gsap.to(row, {
          x: direction,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={container}>
      <BackgroundText>Gallery</BackgroundText>

      <RowsContainer>
        {/* Row 1 (moves right) */}
        <Row className="gallery-row">
          <GalleryImage src="/images/h1-banner01.jpg" alt="" style={{ width: 280, height: 220 }} />
          <GalleryImage src="/images/h1-banner02.png" alt="" style={{ width: 400, height: 280 }} />
          <GalleryImage src="/images/h1-banner04.jpg" alt="" style={{ width: 300, height: 200 }} />
        </Row>

        {/* Row 2 (moves left) */}
        <Row className="gallery-row">
          <GalleryImage src="/images/project-7-1536x1080.jpg" alt="" style={{ width: 400, height: 250 }} />
          <GalleryImage src="/images/project-8-1536x1080.jpg" alt="" style={{ width: 300, height: 220 }} />
          <GalleryImage src="/images/project-9-1536x1080.jpg" alt="" style={{ width: 420, height: 300 }} />
        </Row>
      </RowsContainer>
    </Section>
  );
}
