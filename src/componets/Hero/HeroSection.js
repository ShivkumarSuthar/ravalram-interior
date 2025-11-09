"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { HeroSlide1, HeroSlide2, HeroSlide3, HeroSlide4 } from "./HeroSlides";

export default function HeroClient() {
  /* ---------------------------- Constants ---------------------------- */
  const SLIDE_DURATION = 30000;

  /* ----------------------------- States ------------------------------ */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  /* ----------------------------- Slides ------------------------------ */
  const slides = [
    <HeroSlide1 key="slide1" isAnimating={isAnimating} />,
    <HeroSlide2 key="slide2" isAnimating={isAnimating} />,
    <HeroSlide3 key="slide3" isAnimating={isAnimating} />,
    <HeroSlide4 key="slide4" isAnimating={isAnimating} />,
  ];

  /* ---------------------------- Auto Slide --------------------------- */
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

  /* ----------------------------- Render ------------------------------ */
  return (
    <HeroWrapper>
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
    </HeroWrapper>
  );
}

/* ------------------------- Styled Components ------------------------ */

const HeroWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 100;
`;

const Indicator = styled.button`
  width: ${(p) => (p.$active ? "40px" : "12px")};
  height: 12px;
  border-radius: 6px;
  border: none;
  background: ${(p) =>
    p.$active
      ? "var(--color-primary, #c9a15e)"
      : "rgba(255, 255, 255, 0.4)"};
  cursor: pointer;
  transition: all 0.3s ease;
`;
