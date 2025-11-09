"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    title: "Art Deco Revival",
    location: "Berlin, Germany",
    year: "2025",
    tags: ["SINGLE HOME"],
    img: "/images/project-7-1536x1080.jpg",
  },
  {
    title: "Golden Ratio Residence",
    location: "Berlin, Germany",
    year: "2025",
    tags: ["SINGLE HOME"],
    img: "/images/project-8-1536x1080.jpg",
  },
  {
    title: "Nordic Minimalist Loft",
    location: "Berlin, Germany",
    year: "2025",
    tags: ["RESIDENTIAL", "SINGLE HOME"],
    img: "/images/project-9-1536x1080.jpg",
  },
  {
    title: "Industrial Elegance Condo",
    location: "Berlin, Germany",
    year: "2025",
    tags: ["RESIDENTIAL"],
    img: "/images/project-10-1536x1080.jpg",
  },
  {
    title: "Serene Space Studio",
    location: "Germany",
    year: "2025",
    tags: ["RESIDENTIAL"],
    img: "/images/project-11-1536x1080.jpg",
  },
  {
    title: "Modern Classic Villa",
    location: "Berlin, Germany",
    year: "2025",
    tags: ["SINGLE HOME"],
    img: "/images/project-12-1536x1080.jpg",
  },
];

// ===================== Styled Components =====================
const Section = styled.section`
  font-family: var(--font-body);
  background: color-mix(in srgb, var(--color-brand) 4%, transparent);
  padding: 5rem 1.5rem;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  padding: 0 2.5rem;

  h2 {
    font-family: var(--font-heading);
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.2;
    color: var(--color-secondary);
    margin-bottom: 0.75rem;

    span {
      color: var(--color-brand);
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--color-gray);
    max-width: 700px;
  }
`;

const TagBox = styled.span`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.039);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 8px 12px 5px 10px;
  border-radius: 100vmax;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: var(--font-heading);
  gap: 10px;
  white-space: nowrap;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: var(--color-primary);
    border-radius: 50%;
    display: inline-block;
    flex-shrink: 0;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
`;

const NavButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-bg);
  border: 1.5px solid rgba(212, 160, 83, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  top: 30%;
  z-index: 10;

  &:hover {
    background: var(--color-primary);
    color: white;
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const PrevButton = styled(NavButton)`
  left: 10px;
`;

const NextButton = styled(NavButton)`
  right: 10px;
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ViewButton = styled.div`
  width: 80px;
  height: 80px;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

const TagsWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.9);
  color: var(--color-secondary);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
`;

const ProjectText = styled.div`
  margin-top: 1.25rem;

  h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-secondary);
  }

  p {
    font-size: 0.875rem;
    color: #555;
  }
`;

// ===================== Component =====================
export default function ProjectPage() {
  return (
    <Section>
      <Header>
        <div style={{ width: "30%" }}>
          <TagBox>Our Projects</TagBox>
        </div>
        <div>
          <h2>
            Creative <span>Projects That Define</span> Our Style
          </h2>
          <p>
            Our portfolio showcases a diverse range of projects, from beautifully
            crafted residential spaces to functional and stylish commercial interiors.
          </p>
        </div>
      </Header>

      <CarouselWrapper>
        <PrevButton as="button">
          <ChevronLeft className="w-6 h-6" />
        </PrevButton>
        <NextButton as="button">
          <ChevronRight className="w-6 h-6" />
        </NextButton>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <ProjectCard>
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[450px] transition-transform duration-700 hover:scale-105"
                />

                <Overlay>
                  <ViewButton>View</ViewButton>
                </Overlay>

                <TagsWrapper>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagsWrapper>
              </ProjectCard>

              <ProjectText>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
                <p>{project.year}</p>
              </ProjectText>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselWrapper>
    </Section>
  );
}
