import { ArrowUpRight } from "lucide-react";

// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero-page-banner relative h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-start text-white">
          {/* Tag Box */}
          <div className="tag-box mb-6">FAST AND RELIABLE</div>

          {/* Main Heading */}
          <h1 className="text-heading">
            Find Your Inspired <br />
            <span className="text-[--color-primary]">Interior Design</span>
          </h1>

          <div className="div-bottom">
            {/* Description */}
            <p className="text-bottom-text">
              Whether it’s your home, office, or a commercial project, we are
              always dedicated to bringing your vision to life.
            </p>

            {/* CTA Button */}
            <a href="#" className="cta-hero-btn">
              Take Counsel
              <span className="icon">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Stats Card */}
      {/* <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl text-left max-w-xs">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">360+</h3>
        <p className="text-gray-600 text-sm font-medium mb-4">
          Successful Projects And Counting
        </p>
        <div className="space-y-2 text-gray-500 text-sm">
          <p className="flex items-center">
            <span className="w-2 h-2 bg-[--color-primary] rounded-full mr-3"></span>
            Tech Specifications
          </p>
          <p className="flex items-center">
            <span className="w-2 h-2 bg-[--color-primary] rounded-full mr-3"></span>
            Design Project
          </p>
          <p className="flex items-center">
            <span className="w-2 h-2 bg-[--color-primary] rounded-full mr-3"></span>
            3D Visualisation
          </p>
        </div>
      </div> */}
    </section>
  );
}
