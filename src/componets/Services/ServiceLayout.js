import ServiceInteractive from "./ServiceInteractive";
import styles from "./ServiceSection.module.css";

const services = [
  {
    id: 1,
    title: "Interior Design & Home Styling",
    desc: "Transform your space with comprehensive interior design solutions. We create personalized layouts, select premium materials, and curate custom furniture pieces that reflect your unique style and personality.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Custom Carpentry & Woodwork",
    desc: "Expert craftsmanship in bespoke furniture and woodwork. From elegant modular kitchens and spacious wardrobes to sophisticated TV units and intricate wall paneling, every piece is built to perfection.",
    img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Home Renovation & Remodeling",
    desc: "Breathe new life into existing spaces with complete renovation services. We handle structural changes, modern upgrades, and aesthetic enhancements to create homes that are both beautiful and functional.",
    img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Painting & Surface Finishing",
    desc: "Professional painting services with impeccable attention to detail. We offer interior and exterior painting, decorative textures, and specialty finishes that bring walls to life with lasting beauty.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Flooring & Surface Solutions",
    desc: "Premium flooring installation for every style and budget. Choose from elegant marble, warm hardwood, practical vinyl, or durable laminate options, all installed with precision for long-lasting results.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Ceiling Design & Lighting Planning",
    desc: "Elevate your space with innovative ceiling designs and strategic lighting. We create stunning false ceilings and plan ambient lighting schemes that enhance mood, comfort, and architectural beauty.",
    img: "https://images.unsplash.com/photo-1513694797617-eeb43f68b3c4?w=800&h=600&fit=crop",
  },
];

export default function ServiceLayout() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.tagBox}>Our Services</span>
        <div className={styles.headerContent}>
          <h2 className={styles.sectionHeading}>
            Discover our <span className={styles.highlightText}>full-service interior design</span> and renovation expertise
          </h2>
          <p className={styles.sectionDesc}>
            From concept to completion, we bring your dream spaces to life. Our team combines creative vision with technical expertise to deliver stunning interiors that reflect your style and enhance your lifestyle.
          </p>
        </div>
      </div>

      {/* Interactive client component */}
      <ServiceInteractive services={services} />
    </section>
  );
}
