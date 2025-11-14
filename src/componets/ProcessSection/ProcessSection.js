import styles from './ProcessSection.module.css';

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

export default function ProcessSectionComponent() {
  return (
    <section className={styles.container}>
      <div className={styles.processSection}>
        <div className={styles.processHeader}>
          <div className={styles.headerLeft}>
            <span className={styles.processTag}>HOW WE WORK</span>
            <h2 className={styles.processTitle}>
              Our proven <span>design & renovation</span> process for exceptional spaces
            </h2>
          </div>
          <p className={styles.processDesc}>
            From initial concept to final reveal, we guide you through every step with transparency and expertise. Our streamlined process ensures your home transformation is stress-free and exceeds expectations.
          </p>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((step, i) => (
            <div key={i} className={styles.processCard}>
              <div className={styles.processImageWrapper}>
                <img src={step.img} alt={step.title} className={styles.processImage} />
              </div>
              <div className={styles.processContent}>
                <h3 className={styles.processContentTitle}>
                  <span className={styles.stepId}>{step.id}</span> {step.title}
                </h3>
                <p className={styles.processContentDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.belowProcessText}>
          Ready to transform your space? <span className={styles.highlightText}>Let's start your journey today</span>
        </div>
      </div>
    </section>
  );
}
