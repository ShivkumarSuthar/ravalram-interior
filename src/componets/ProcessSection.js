"use client";
import Image from "next/image";

const processSteps = [
  {
    id: "01",
    title: "Initial Consultation",
    desc: "We begin by understanding your vision, goals, and needs, followed Antra.",
    img: "/images/h1-banner04.jpg",
  },
  {
    id: "02",
    title: "Design & Planning",
    desc: "Our team creates detailed designs that reflect your requirements.",
    img: "/images/h1-banner05.jpg",
  },
  {
    id: "03",
    title: "Implementation",
    desc: "With carefully selected contractors, we manage every phase.",
    img: "/images/h1-banner06.jpg",
  },
  {
    id: "04",
    title: "Project Handover",
    desc: "Upon completion, we conduct a thorough review, ensuring perfection.",
    img: "/images/h1-banner07.jpg",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-container">
      <div className="process-section px-6 py-10">
        {/* Header */}
        <div className="process-header">
          <div>
            <span className="process-tag mt-2">HOW WE WORK</span>
            <h2 className="process-title">
              Description <span>Architecture Process</span> For Exceptional
              Results.
            </h2>
          </div>
          <p className="process-desc">
            Our process is alive – adapting, refining, and growing with your
            vision. Always. Like artists with a blank canvas, we transform rooms
            into living works of art.
          </p>
        </div>

        {/* Steps */}
        <div className="process-grid">
          {processSteps.map((step, i) => (
            <div key={i} className={`process-card step-${i + 1}`}>
              <div className="process-img">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="process-content">
                <h3>
                  <span className="step-id">{step.id}</span> {step.title}
                </h3>
                <p>{step.desc}</p>
                <span className="process-number">{step.id}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="below-process-text">
          We’ve been working hard to impress you. <span className="highlight-text">Start your’s today</span>
        </div>
      </div>
    </section>
  );
}
