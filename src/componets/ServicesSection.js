'use client';
import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
`;

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

const stats = [
  {
    number: "12+",
    title: "Years Experience",
    desc: "Over a decade of transforming homes with expert craftsmanship and innovative design solutions",
  },
  {
    number: "250+",
    title: "Projects Completed",
    desc: "Successfully delivered hundreds of residential and commercial projects across the region",
  },
  {
    number: "30+",
    title: "Skilled Professionals",
    desc: "A dedicated team of designers, carpenters, and craftsmen committed to excellence",
  },
  {
    number: "100%",
    title: "Client Satisfaction",
    desc: "Every project completed with attention to detail and commitment to quality",
  },
];

const Container = styled.section`
  font-family: 'Inter', 'Golos Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background-color: #ffffff;
`;

const ServiceSection = styled.div`
  padding: 2.5rem 1.5rem;

  @media (min-width: 768px) {
    padding: 4rem 3rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const TagBox = styled.span`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.039);
  backdrop-filter: blur(2px);
  border: 1px solid #e5e5e5;
  color: #333333;
  padding: 8px 12px 5px 10px;
  border-radius: 100vmax;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  gap: 10px;
  white-space: nowrap;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: #d4a053;
    border-radius: 50%;
    display: inline-block;
    flex-shrink: 0;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const SectionHeading = styled.h2`
  font-family: 'Playfair Display', 'Cal Sans', Georgia, serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: #101010;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const HighlightText = styled.span`
  color: #d4a053;
`;

const SectionDesc = styled.p`
  color: #666666;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform 0.7s ease-in-out;

  ${ImageWrapper}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  background: rgba(51, 51, 51, 0.8);
  color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  max-width: 28rem;
  backdrop-filter: blur(10px);

  p {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceListItem = styled.li`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  transition: all 0.4s ease;
  cursor: pointer;
  color: ${props => props.$active ? '#d4a053' : '#333333'};
  border-color: ${props => props.$active ? '#d4a053' : '#e5e5e5'};

  &:hover {
    color: #d4a053;
    border-color: #d4a053;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const ServiceItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex: 1;
`;

const IndexText = styled.span`
  font-family: 'Playfair Display', 'Cal Sans', Georgia, serif;
  font-size: 1.125rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ServiceTitle = styled.span`
  font-family: 'Playfair Display', 'Cal Sans', Georgia, serif;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const StatsSection = styled.div`
  padding: 2.5rem 1.5rem;

  @media (min-width: 768px) {
    padding: 4rem 3rem;
  }
`;

const StatsGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const StatNumber = styled.h3`
  font-family: 'Playfair Display', 'Cal Sans', Georgia, serif;
  font-size: 2.5rem;
  padding-bottom: 1rem;
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;
  color: #333333;
  margin: 0 0 1rem 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const StatTitle = styled.h4`
  font-family: 'Playfair Display', 'Cal Sans', Georgia, serif;
  font-size: 1.25rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  color: #333333;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const StatDesc = styled.p`
  color: #666666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export default function ServiceSectionComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
      <ServiceSection>
        <div>
          <Header>
            <div>
              <TagBox>Our Services</TagBox>
            </div>

            <HeaderContent>
              <SectionHeading>
                Discover our{" "}
                <HighlightText>
                  full-service interior design
                </HighlightText> {" "} and renovation expertise
              </SectionHeading>
              <SectionDesc>
                From concept to completion, we bring your dream spaces to life. Our team combines creative vision with technical expertise to deliver stunning interiors that reflect your style and enhance your lifestyle.
              </SectionDesc>
            </HeaderContent>
          </Header>

          <Grid>
            <ImageContainer>
              <ImageWrapper>
                <ServiceImage
                  key={services[activeIndex].img}
                  src={services[activeIndex].img}
                  alt={services[activeIndex].title}
                />
              </ImageWrapper>

              <ImageOverlay>
                <p>{services[activeIndex].desc}</p>
              </ImageOverlay>
            </ImageContainer>

            <div>
              <ServiceList>
                {services.map((service, i) => (
                  <ServiceListItem
                    key={i}
                    $active={i === activeIndex}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <ServiceItemContent>
                      <IndexText>
                        {String(i + 1).padStart(2, "0")}
                      </IndexText>
                      <ServiceTitle>{service.title}</ServiceTitle>
                    </ServiceItemContent>
                    {i === activeIndex ? (
                      <ArrowUpRight size={30} />
                    ) : (
                      <ArrowRight size={30} style={{ color: '#999' }} />
                    )}
                  </ServiceListItem>
                ))}
              </ServiceList>
            </div>
          </Grid>
        </div>
      </ServiceSection>

      <StatsSection>
        <StatsGrid>
          {stats.map((stat, i) => (
            <StatItem key={i}>
              <StatNumber>{stat.number}</StatNumber>
              <StatTitle>{stat.title}</StatTitle>
              <StatDesc>{stat.desc}</StatDesc>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsSection>
    </Container>
    </>
  );
}