"use client";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    category: "Electrical & Lighting",
    title: "Elevate Every Corner With Sleek Interior Concepts",
    author: "Admin",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living.",
    image: "/project-7-1536x1080.jpg",
  },
  {
    id: 2,
    category: "Home Appliance",
    title: "The Art Of Space: Smart Designs For Elegant Living",
    author: "Admin",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living.",
    image: "/project-8-1536x1080.jpg",
  },
  {
    id: 3,
    category: "Home Appliance",
    title: "Inspired Spaces: Blending Function And Aesthetic",
    author: "Admin",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living.",
    image: "/project-9-1536x1080.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <span className="section-badge">• STRAIGHT FROM THE NEWSROOM</span>
          <h2>
            Take A Look At <span>Our Latest</span>
            <br /> Blog & Articles.
          </h2>
        </div>

        <div className="blog-grid">
          {blogPosts.map((item) => (
            <div className="blog-card" key={item.id}>
              <div className="blog-image-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="blog-img"
                />
                <span className="blog-tag">{item.category}</span>
              </div>
              <div className="blog-content">
                <p className="blog-author">By <span>{item.author}</span></p>
                <h3 className="blog-title">{item.title}</h3>
                <p className="blog-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
