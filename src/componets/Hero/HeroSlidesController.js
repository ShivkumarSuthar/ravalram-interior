"use client";
import { useState, useEffect } from "react";
import styles from "./HeroSlidesController.module.css";

export default function HeroSlidesController({ slides, slideDuration = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [slides.length, slideDuration]);

  return (
    <div className={styles.wrapper}>
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`${styles.slide} ${
            idx === currentSlide ? styles.visible : ""
          }`}
        >
          {slide}
        </div>
      ))}

      {/* Indicators */}
      <div className={styles.indicators}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${
              idx === currentSlide ? styles.active : ""
            }`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}
