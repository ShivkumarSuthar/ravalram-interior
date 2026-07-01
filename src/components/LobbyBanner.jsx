import AppImage from "./AppImage";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const bannerImg = "/images/antra_lobby_banner_1782744283860.jpg";

export default function LobbyBanner() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden bg-stone-950 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src={bannerImg}
          alt="Suthar Luxury Studio Wide Banner"
          className="w-full h-full object-cover filter brightness-[0.7] contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle radial dark overlay */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(0,0,0,0.6)_100%] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-transparent to-stone-950/40" />
      </div>

      {/* Central Play Button */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.button
          onClick={() => setIsPlaying(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-20 h-20 rounded-full bg-white/10 hover:bg-[#c5a880]/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:border-[#c5a880]/40 shadow-2xl transition-all duration-500 cursor-pointer group"
          aria-label="Play Studio Documentary"
        >
          <svg
            className="w-5 h-5 fill-current translate-x-0.5 text-white group-hover:text-[#c5a880] transition-colors duration-500"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.button>
        <span className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold font-mono mt-5 block">
          PLAY CINEMATIC SHOWCASE
        </span>
        <span className="text-stone-400 text-[9px] uppercase tracking-[0.2em] font-light font-mono mt-1 block">
          35 Years of Architectural Craftsmanship
        </span>
      </div>

      {/* Cinematic Modal Popup */}
      <AnimatePresence>
        {isPlaying && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-md p-4">
            {/* Click to close */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setIsPlaying(false)} />

            {/* Video content container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full aspect-video bg-black rounded-none overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] z-10"
            >
              <iframe
                src="https://www.youtube.com/embed/5U2zB9mR_Qc?autoplay=1&mute=1"
                title="Suthar Studio Presentation"
                className="w-full h-full border-none"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white p-2 border border-white/10 hover:text-[#c5a880] transition-colors z-20 cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
