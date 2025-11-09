"use client";
import styled from "styled-components";
import Link from "next/link";
import data from "@/app/data.json";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";

export default function FooterContent() {
  const menu = data.navbar || [];

  return (
    <FooterWrapper>
      <FooterOverlay />

      <FooterContainer>
        {/* === TOP SECTION === */}
        <FooterTop>
          <FooterLeft>
            <LogoSection>
              <img src="/images/logo.png" alt="Ravalram Interior" width="180" />
            </LogoSection>
            <TagLine>Transform Your Living Spaces</TagLine>
            <FooterDescription>
              Creating beautiful, functional interiors that reflect your unique
              style. From complete home renovations to custom carpentry, we
              bring your vision to life with precision and care.
            </FooterDescription>

            <ServiceGrid>
              <ServiceItem>
                <h4>Interior Design</h4>
                <p>
                  Complete interior solutions for living rooms, bedrooms,
                  kitchens, and more.
                </p>
              </ServiceItem>
              <ServiceItem>
                <h4>Custom Carpentry</h4>
                <p>
                  Tailor-made furniture, wardrobes, and storage solutions
                  crafted to perfection.
                </p>
              </ServiceItem>
              <ServiceItem>
                <h4>Painting & Finishing</h4>
                <p>
                  Professional painting services with textures and decorative
                  finishes.
                </p>
              </ServiceItem>
              <ServiceItem>
                <h4>Premium Flooring</h4>
                <p>
                  Elegant flooring options including tiles, marble, wood, and
                  laminate.
                </p>
              </ServiceItem>
            </ServiceGrid>
          </FooterLeft>

          <FooterRight>
            <LinkGroup>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Our Services</Link>
                </li>
                <li>
                  <Link href="/work">Portfolio</Link>
                </li>
                <li>
                  <Link href="/work/before-after">Before & After</Link>
                </li>
              </ul>
            </LinkGroup>

            <LinkGroup>
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link href="/services/interior">Interior Design</Link>
                </li>
                <li>
                  <Link href="/services/carpentry">Carpentry Work</Link>
                </li>
                <li>
                  <Link href="/services/painting">Painting & Finishing</Link>
                </li>
                <li>
                  <Link href="/services/flooring">Flooring Solutions</Link>
                </li>
                <li>
                  <Link href="/about/why-choose-us">Why Choose Us</Link>
                </li>
              </ul>
            </LinkGroup>

            <ContactBox>
              <h4>Contact Us</h4>
              <ContactInfo>
                <ContactItem>
                  <span className="icon">📍</span>
                  <div>
                    <strong>Visit Us</strong>
                    <p>123 Design Street, Jaipur, Rajasthan</p>
                  </div>
                </ContactItem>
                <ContactItem>
                  <span className="icon">📞</span>
                  <div>
                    <strong>Call Us</strong>
                    <p>+91 1800-477-6473</p>
                  </div>
                </ContactItem>
                <ContactItem>
                  <span className="icon">✉️</span>
                  <div>
                    <strong>Email Us</strong>
                    <p>info@ravalraminterior.com</p>
                  </div>
                </ContactItem>
              </ContactInfo>
              <ContactButton href="/contact/quote">
                Get Free Quote
              </ContactButton>
            </ContactBox>
          </FooterRight>
        </FooterTop>

        {/* === BOTTOM SECTION === */}
        <FooterBottom>
          <SocialIcons>
            <a href="#" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Pinterest">
              <FaPinterest size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
          </SocialIcons>

          <LegalLinks>
            <Link href="/contact/faqs">FAQs</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="/contact/service-areas">Service Areas</Link>
          </LegalLinks>

          <CopyText>
            © {new Date().getFullYear()} Ravalram Interior. All rights reserved.
            Crafted with passion for beautiful spaces.
          </CopyText>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
}

/* =========================
   STYLED COMPONENTS
========================= */

const FooterWrapper = styled.footer`
  position: relative;
  background: linear-gradient(rgba(20, 10, 2, 0.85), rgba(20, 10, 2, 0.95)),
    var(--bg-footer);
  background-size: cover;
  background-position: center;
  color: #fff;
  font-family: var(--font-body);
  overflow: hidden;
`;

const FooterOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgb(16 16 16 / 0.6);
  z-index: 1;
`;

const FooterContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 5% 40px;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1.2fr;
  gap: 80px;
  border-bottom: 1px solid rgba(201, 161, 94, 0.2);
  padding-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const FooterLeft = styled.div``;

const LogoSection = styled.div`
  margin-bottom: 1.5rem;

  img {
    max-height: 60px;
    filter: brightness(1.1);
  }
`;

const TagLine = styled.h2`
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-primary, #c9a15e);
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const FooterDescription = styled.p`
  max-width: 600px;
  line-height: 1.8;
  font-size: 1rem;
  color: #d4d4d4;
  margin-bottom: 2.5rem;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

const ServiceItem = styled.div`
  h4 {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8px;
    font-family: var(--font-heading);
  }
  p {
    color: #b3b3b3;
    font-size: 0.875rem;
    line-height: 1.6;
  }
`;

const FooterRight = styled.div`
  display: grid;
  grid-template-columns: 100px 150px auto;

  gap: 40px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const LinkGroup = styled.div`
  h4 {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--color-primary, #c9a15e);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 10px;

      a {
        font-size: 0.9rem;
        color: #d4d4d4;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;

        &:hover {
          color: var(--color-primary, #c9a15e);
          transform: translateX(3px);
        }
      }
    }
  }
`;

const ContactBox = styled.div`
  h4 {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--color-primary, #c9a15e);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;

  .icon {
    font-size: 1.25rem;
    flex-shrink: 0;
  }

  div {
    strong {
      display: block;
      font-size: 0.9rem;
      color: #fff;
      margin-bottom: 4px;
      font-family: var(--font-heading);
    }

    p {
      font-size: 0.875rem;
      color: #b3b3b3;
      margin: 0;
      line-height: 1.4;
    }
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  background: var(--color-primary, #c9a15e);
  color: #1a1a1a;
  padding: 12px 28px;
  border-radius: 50px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(201, 161, 94, 0.2);

  &:hover {
    background: #b18a49;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(201, 161, 94, 0.3);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(201, 161, 94, 0.1);
    border: 1px solid rgba(201, 161, 94, 0.3);
    color: var(--color-primary, #c9a15e);
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: var(--color-primary, #c9a15e);
      color: #1a1a1a;
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(201, 161, 94, 0.3);
    }
  }
`;

const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  a {
    font-size: 0.875rem;
    color: #b3b3b3;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary, #c9a15e);
    }
  }
`;

const CopyText = styled.p`
  flex: 1 1 100%;
  text-align: center;
  color: #888;
  font-size: 0.875rem;
  margin-top: 20px;
  line-height: 1.6;
`;
