"use client";
import { useState, useEffect } from "react";
import styles from "./HeroSlidesController.module.css"; 

export default function HeroSlidesController({ slides, slideDuration = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Only set up the interval if there is more than one slide
    if (slides.length > 1) {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, slideDuration);
        
        // Clear interval on cleanup
        return () => clearInterval(timer);
    }
    // Dependency array ensures effect runs when slides.length changes
  }, [slides.length, slideDuration]);

  
  return (
    <div className={styles['hs-wrapper']}>
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`${styles['hs-slide']} ${
            // If only one slide exists, it should be visible
            idx === currentSlide || slides.length === 1 ? styles['hs-visible'] : ""
          }`}
        >
          {slide}
        </div>
      ))}

      {/* Indicators (Only show if more than one slide exists) */}
      {slides.length > 1 && (
          <div className={styles['hs-indicators']}>
              {slides.map((_, idx) => (
                  <button
                      key={idx}
                      className={`${styles['hs-dot']} ${
                          idx === currentSlide ? styles['hs-active'] : ""
                      }`}
                      onClick={() => setCurrentSlide(idx)}
                  />
              ))}
          </div>
      )}
    </div>
  );
}