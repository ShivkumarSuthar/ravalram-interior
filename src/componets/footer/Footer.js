import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterest, FaLinkedinIn } from "react-icons/fa";
import data from "@/app/data.json";
import styles from "./Footer.module.css";

export default function Footer() {
  const menu = data.navbar || [];

  return (
    <footer className={styles.wrapper}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        {/* Footer Top */}
        <div className={styles.top}>
          {/* Left */}
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src="/images/logo.png" alt="Ravalram Interior" width={180} />
            </div>
            <h2 className={styles.tagline}>Transform Your Living Spaces</h2>
            <p className={styles.description}>
              Creating beautiful, functional interiors that reflect your unique style. From complete home renovations to custom carpentry, we bring your vision to life with precision and care.
            </p>

            <div className={styles.serviceGrid}>
              <div className={styles.serviceItem}>
                <h4>Interior Design</h4>
                <p>Complete interior solutions for living rooms, bedrooms, kitchens, and more.</p>
              </div>
              <div className={styles.serviceItem}>
                <h4>Custom Carpentry</h4>
                <p>Tailor-made furniture, wardrobes, and storage solutions crafted to perfection.</p>
              </div>
              <div className={styles.serviceItem}>
                <h4>Painting & Finishing</h4>
                <p>Professional painting services with textures and decorative finishes.</p>
              </div>
              <div className={styles.serviceItem}>
                <h4>Premium Flooring</h4>
                <p>Elegant flooring options including tiles, marble, wood, and laminate.</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <div className={styles.linkGroup}>
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Our Services</Link></li>
                <li><Link href="/work">Portfolio</Link></li>
                <li><Link href="/work/before-after">Before & After</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Our Services</h4>
              <ul>
                <li><Link href="/services/interior">Interior Design</Link></li>
                <li><Link href="/services/carpentry">Carpentry Work</Link></li>
                <li><Link href="/services/painting">Painting & Finishing</Link></li>
                <li><Link href="/services/flooring">Flooring Solutions</Link></li>
                <li><Link href="/about/why-choose-us">Why Choose Us</Link></li>
              </ul>
            </div>

            <div className={styles.contactBox}>
              <h4>Contact Us</h4>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className="icon">📍</span>
                  <div>
                    <strong>Visit Us</strong>
                    <p>123 Design Street, Jaipur, Rajasthan</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className="icon">📞</span>
                  <div>
                    <strong>Call Us</strong>
                    <p>+91 1800-477-6473</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className="icon">✉️</span>
                  <div>
                    <strong>Email Us</strong>
                    <p>info@ravalraminterior.com</p>
                  </div>
                </div>
              </div>
              <a href="/contact/quote" className={styles.contactButton}>Get Free Quote</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.bottom}>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook"><FaFacebookF size={20} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
            <a href="#" aria-label="Pinterest"><FaPinterest size={20} /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
          </div>

          <div className={styles.legalLinks}>
            <Link href="/contact/faqs">FAQs</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="/contact/service-areas">Service Areas</Link>
          </div>

          <p className={styles.copyText}>
            © {new Date().getFullYear()} Ravalram Interior. All rights reserved. Crafted with passion for beautiful spaces.
          </p>
        </div>
      </div>
    </footer>
  );
}
