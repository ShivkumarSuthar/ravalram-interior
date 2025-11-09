"use client";
import Image from "next/image";
import styled from "styled-components";

const blogPosts = [
  {
    id: 1,
    category: "Electrical & Lighting",
    title: "Elevate Every Corner With Sleek Interior Concepts",
    author: "Admin",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living.",
    image: "/images/blog-13.jpg",
  },
  {
    id: 2,
    category: "Home Appliance",
    title: "The Art Of Space: Smart Designs For Elegant Living",
    author: "Admin",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living.",
    image: "/images/blog-14.jpg",
  },
  {
    id: 3,
    category: "Home Appliance",
    title: "Inspired Spaces: Blending Function And Aesthetic",
    author: "Admin",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living.",
    image: "/images/blog-15.jpg",
  },
];

// ===================== Styled Components =====================
const Section = styled.section`
  padding: 5rem 1.5rem;
  font-family: var(--font-body);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Badge = styled.span`
  display: inline-block;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 9999px;
  padding: 0.375rem 0.875rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: #333;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #111;
  line-height: 1.2;

  span {
    color: var(--color-primary);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
`;

const Card = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.08);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  border-radius: 1.125rem 1.125rem 0 0;
  overflow: hidden;
`;

const Tag = styled.span`
  position: absolute;
  top: 0.9375rem;
  left: 0.9375rem;
  background: var(--color-primary);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 9999px;
  padding: 0.375rem 0.875rem;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Author = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.5rem;

  span {
    color: var(--color-primary);
    font-weight: 600;
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 0.75rem;
`;

const Desc = styled.p`
  font-size: 0.9375rem;
  color: #666;
  line-height: 1.6;
`;

// ===================== Component =====================
export default function BlogSection() {
  return (
    <Section>
      <Container>
        <Header>
          <Badge>• STRAIGHT FROM THE NEWSROOM</Badge>
          <SectionTitle>
            Take A Look At <span>Our Latest</span><br /> Blog & Articles.
          </SectionTitle>
        </Header>

        <Grid>
          {blogPosts.map((item) => (
            <Card key={item.id}>
              <ImageWrapper>
                <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                <Tag>{item.category}</Tag>
              </ImageWrapper>
              <Content>
                <Author>By <span>{item.author}</span></Author>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
              </Content>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
