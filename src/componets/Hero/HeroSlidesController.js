'use client';
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function HeroSlidesController({ slides, slideDuration = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [slides.length, slideDuration]);

  return (
    <Wrapper>
      {slides.map((slide, idx) => (
        <Slide key={idx} $visible={idx === currentSlide}>
          {slide}
        </Slide>
      ))}

      <Indicators>
        {slides.map((_, idx) => (
          <Dot
            key={idx}
            $active={idx === currentSlide}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </Indicators>
    </Wrapper>
  );
}

/* ---------------- Styled Components ---------------- */
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  inset: 0;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transition: opacity 0.8s ease;
  width: 100%;
  height: 100%;
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 100;
`;

const Dot = styled.button`
  width: ${(p) => (p.$active ? "30px" : "12px")};
  height: 12px;
  border-radius: 6px;
  border: none;
  background: ${(p) =>
    p.$active ? "var(--color-primary, #c9a15e)" : "rgba(255, 255, 255, 0.4)"};
  cursor: pointer;
  transition: all 0.3s ease;
`;
