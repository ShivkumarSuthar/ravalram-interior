import { Ruler, Hammer, Construction, ClipboardCheck, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const services = [
    { title: "Interior Design & Space Planning", desc: "From modern minimalism to warm, cozy classics — we design interiors that match your lifestyle and improve daily living.", icon: <Ruler className={styles.icon} /> },
    { title: "Custom Carpentry & Woodwork", desc: "Wardrobes, modular kitchens, TV units, wall paneling and tailored storage — precision-crafted for durability and finish.", icon: <Hammer className={styles.icon} /> },
    { title: "Home Renovation & Remodeling", desc: "Full home transformations: structural upgrades, layout improvements and premium finishes to make old spaces feel brand new.", icon: <Construction className={styles.icon} /> },
    { title: "End-to-End Home Execution", desc: "Demolition, procurement, labour management, quality control and final finishes for a stress-free handover.", icon: <ClipboardCheck className={styles.icon} /> },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.aboutSectionWrap}>
        <div className={styles.topRow}>
          <div className={`${styles.tag} ${styles.light}`}>Who We Are</div>
          <div className={styles.headingBlock}>
            <h2>
              Crafting meaningful spaces with expert design, precision carpentry, and <span className={styles.highlight}>end-to-end renovation excellence</span>.
            </h2>
            <p className={styles["section-desc"]}>
              With <span className={styles.highlight}>30+ years of expertise</span> and <span className={styles.highlight}>hundreds of completed homes</span>, we create interiors defined by quality, clarity, and lasting craftsmanship.
            </p>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {services.map((s, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <h3>{s.title}</h3>
                <div className={styles.iconBox}>{s.icon}</div>
              </div>
              <div className={styles.divider}></div>
              <p className={styles["service-desc"]}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- More About Section ---------------- */}
      <div className={styles.moreAbout}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <div className={`${styles.tag} ${styles.dark}`}>Since 1991</div>
            <h2>Building Better Homes, Where <span className={styles.highlightLight}>Design Meets Craftsmanship</span></h2>
            <ul className={styles.featuresList}>
              <li>30+ Years Experience</li>
              <li>Quality-Assured Work</li>
              <li>Custom Carpentry</li>
              <li>Complete Home Renovations</li>
            </ul>
            <p className={styles["section-desc"]}>
              For over three decades, we’ve helped families redesign, rebuild, and reimagine their spaces. From interiors and carpentry to full home renovation, our team handles planning, materials, execution, and finishing — giving you a home that’s functional, beautiful, and built to last.
            </p>
            <a href="#" className={styles.cta}>
              Take Counsel
              <span className={styles.ctaIcon}><ArrowUpRight size={16} /></span>
            </a>
          </div>
          <div className={styles.imageWrap}>
            <Image src="/images/h1-banner01.jpg" alt="About Background" fill priority className={styles.styledImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
