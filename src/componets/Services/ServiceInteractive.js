'use client';
import { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import styles from "./ServiceSection.module.css";

export default function ServiceInteractive({ services }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className={styles.grid}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img
            key={services[activeIndex].img}
            src={services[activeIndex].img}
            alt={services[activeIndex].title}
            className={styles.serviceImage}
          />
        </div>
        <div className={styles.imageOverlay}>
          <p>{services[activeIndex].desc}</p>
        </div>
      </div>

      <div>
        <ul className={styles.serviceList}>
          {services.map((service, i) => (
            <li
              key={i}
              className={`${styles.serviceListItem} ${i === activeIndex ? styles.active : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <span className={styles.indexText}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.serviceTitle}>{service.title}</span>
              {i === activeIndex ? (
                <ArrowUpRight size={30} />
              ) : (
                <ArrowRight size={30} style={{ color: '#999' }} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
