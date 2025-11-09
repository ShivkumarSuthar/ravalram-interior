"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    projectImg: "/images/h1-banner04.jpg",
    rating: 4.8,
    reviews: "2,688 reviews",
    title:
      "From Concept To Reality, The Team Turned My Vision Into A Stunning, Livable Space. I Couldn’t Be Happier With This!",
    quote:
      "I absolutely love my new modern living room! The clean lines, neutral tones, and minimalist interior create such a calming & stylish atmosphere. Highly recommend their modern interior design services!",
    name: "Morgan Dufresne",
    role: "Company Owner",
    avatar: "/images/team-1.jpg",
  },
  {
    projectImg: "/images/h1-banner05.jpg",
    rating: 4.9,
    reviews: "1,932 reviews",
    title:
      "They Transformed Our Office Into a Stunning, Productive Space Beyond Expectations!",
    quote:
      "The attention to detail and professionalism was remarkable. Every design decision made sense — elegant, functional, and inspiring.",
    name: "Alicia Fernandez",
    role: "Business Owner",
    avatar: "/images/team-1.jpg",
  },
  {
    projectImg: "/images/h1-banner06.jpg",
    rating: 5.0,
    reviews: "3,104 reviews",
    title:
      "Highly recommend their interior design expertise. They brought my dream home to life!",
    quote:
      "Everything from materials to final touches was handled beautifully. It’s modern, cozy, and timeless — exactly what I wanted.",
    name: "Daniel Green",
    role: "Architect",
    avatar: "/images/team-1.jpg",
  },
];

// ===================== Styled Components =====================
const Section = styled.section`
  padding: 5rem 1.5rem;
  font-family: var(--font-body);
`;

const Header = styled.div`
  margin-bottom: 3rem;
  text-align: left;

  @media (min-width: 768px) {
    text-align: center;
  }
`;

const TagBox = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.06);
  color: var(--color-primary);
  border: 1px solid var(--navbar-border);
  padding: 8px 14px;
  border-radius: 9999px;
  font-weight: 600;
  letter-spacing: 0.6px;
  margin-bottom: 1rem;
`;

const SectionHeading = styled.h2`
  font-family: var(--font-heading);
  font-size: 3.25rem;
  line-height: 1.05;
  margin: 0.25rem 0 0;

  span {
    color: var(--color-primary);
  }
`;

const SwiperWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialWrapper = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.06);
  padding: 1.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TestimonialLeft = styled.div`
  flex: 1 1 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
`;

const TestimonialRight = styled.div`
  flex: 1 1 52%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;

  @media (max-width: 1024px) {
    flex: 1 1 100%;
  }
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

const RatingNumber = styled.div`
  font-family: var(--font-heading);
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  line-height: 1;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const RatingBadge = styled.div`
  background: var(--color-primary);
  color: #fff;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  box-shadow: 0 6px 20px rgba(212,160,83,0.18);
  transform: translateY(-4px);
  .stars {
    font-size: 0.875rem;
    letter-spacing: 2px;
  }
`;

const ReviewsText = styled.div`
  color: #666;
  font-size: 0.8125rem;
`;

const TestimonialTitle = styled.h3`
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--color-secondary);
  font-size: 1rem;
`;

const TestimonialQuote = styled.div`
  font-size: 1.125rem;
  color: #333;
  line-height: 1.7;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const ClientAvatar = styled(Image)`
  border-radius: 9999px;
  border: 3px solid var(--color-primary);
  object-fit: cover;
`;

const ClientName = styled.div`
  font-weight: 600;
`;

const ClientRole = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.625rem;
  margin-top: 1rem;
`;

// ===================== Component =====================
export default function ClientTestimonials() {
  return (
    <Section>
      <Header>
        <TagBox>OUR CLIENTS SAY</TagBox>
        <SectionHeading>
          Here’s What <span>Warm Words</span> Our Clients Say
        </SectionHeading>
      </Header>

      <SwiperWrapper>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            el: ".client-pagination",
            clickable: true,
          }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={1}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialWrapper>
                <TestimonialLeft>
                  <ImageWrapper>
                    <Image
                      src={item.projectImg}
                      alt="project"
                      fill
                      className="testimonial-img"
                      priority={index === 0}
                    />
                  </ImageWrapper>
                </TestimonialLeft>

                <TestimonialRight>
                  <RatingRow>
                    <RatingNumber>{item.rating.toFixed(2)}</RatingNumber>
                    <RatingBadge>
                      <div className="stars">★★★★★</div>
                    </RatingBadge>
                    <ReviewsText>{item.reviews}</ReviewsText>
                  </RatingRow>

                  <TestimonialTitle>{item.title}</TestimonialTitle>
                  <TestimonialQuote>“{item.quote}”</TestimonialQuote>

                  <ClientInfo>
                    <ClientAvatar
                      src={item.avatar}
                      alt={item.name}
                      width={64}
                      height={64}
                    />
                    <div>
                      <ClientName>{item.name}</ClientName>
                      <ClientRole>{item.role}</ClientRole>
                    </div>
                  </ClientInfo>
                </TestimonialRight>
              </TestimonialWrapper>
            </SwiperSlide>
          ))}
        </Swiper>

        <PaginationWrapper className="client-pagination" />
      </SwiperWrapper>
    </Section>
  );
}
