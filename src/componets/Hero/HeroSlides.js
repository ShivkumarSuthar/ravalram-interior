import React from "react";
import styles from "./HeroSlides.module.css";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const HeroSlide1 = () => (
  <div className={`${styles.baseSlide} ${styles.heroSlide1}`}>
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <div className={styles.tagBox}>FAST AND RELIABLE</div>
        <h1 className={styles.heading}>
          Find Your Inspired <br /> <span>Interior Design</span>
        </h1>
        <div className={styles.bottomDiv}>
          <p className={styles.description}>
            Whether it's your home, office, or a commercial project...
          </p>
          <a href="#" className={styles.ctaButton}>
            Take Counsel
            <span className="icon"><ArrowUpRight size={18} /></span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export const HeroSlide2 = () => (
  <div className={`${styles.baseSlide} ${styles.heroSlide2}`}>
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <div className={styles.tagBox}>EXPERT CRAFTSMANSHIP</div>
        <h1 className={styles.heading}>
          Premium Quality <br /> <span>Interior Solutions</span>
        </h1>
        <div className={styles.bottomDiv}>
          <p className={styles.description}>
            Experience exceptional craftsmanship with our custom interior
            designs, tailored renovations, and comprehensive home improvement
            solutions.
          </p>
          <a href="#" className={styles.ctaButton}>
            Start Your Project
            <span className="icon"><ArrowUpRight size={18} /></span>
          </a>
        </div>
      </div>
    </div>

    <div className={styles.statsCardLeft}>
      <h3>500+</h3>
      <p className="subtitle">Happy Homeowners</p>
      <div className="details">
        <p><span className="dot" /> Custom Kitchen Designs</p>
        <p><span className="dot" /> Bathroom Remodeling</p>
        <p><span className="dot" /> Full Home Makeovers</p>
      </div>
    </div>

    <div className={styles.imageCardRight}>
      <div className="imageWrapper">
        <div className={styles.imagePlaceholder}>Featured Work</div>
      </div>
      <p className="caption">Latest Projects</p>
    </div>
  </div>
);

export const HeroSlide3 = () => (
  <div className={`${styles.baseSlide} ${styles.heroSlide3}`}>
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>
          Designing Homes <br /> That Reflect Your Vision
        </h1>
        <p className={styles.description}>
          Crafting bespoke living spaces with focus on comfort, style, and sustainable design
        </p>
        <a href="#" className={styles.ctaButton}>
          Start Your Dream Project
        </a>
      </div>

      <div className={styles.styleCardsWrapper}>
        {["style1","style2","style3"].map((style,i)=>(
          <div className={styles.styleCard} key={i}>
            <div className={`${styles.cardImage} ${styles[style]}`} />
            <div className={styles.cardContent}>
              <h4>{style==="style1"?"Victorian Style":style==="style2"?"Georgian Style":"Modern Style"}</h4>
              <a href="#">Explore Us <ArrowRight size={14} /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const HeroSlide4 = () => (
  <div className={`${styles.baseSlide} ${styles.heroSlide4}`}>
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <div className={styles.tagBox}>We Believe In Simple & Minimalistic</div>
        <h1 className={styles.heading}>Turning Ideas into <br /> Remarkable Design</h1>
        <p className={styles.description}>
          At EffiXpert, we reimagine spaces with precision, passion, and purpose. From kitchens to living rooms, we elevate your home's potential.
        </p>
        <div style={{display:"flex", gap:"1rem"}}>
          <a href="#" className={styles.ctaButton}>Get Your Free Plan</a>
          <a href="#" className={styles.ctaButton}>Get Started Now <ArrowRight size={18} /></a>
        </div>
      </div>

      <div className={styles.imageGrid}>
        <div className={`${styles.gridImage} ${styles.img1}`} />
        <div className={`${styles.gridImage} ${styles.img2}`} />
        <div className={`${styles.gridImage} ${styles.img3}`} />
        <div className={styles.imageLabel}>Bathroom Remodeling</div>
      </div>
      <div className={styles.gridDots}>
        <span className="dot active"/>
        <span className="dot"/>
        <span className="dot"/>
      </div>
    </div>
  </div>
);
