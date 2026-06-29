import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import bannerImg from "../assets/images/antra_lobby_banner_1782744283860.jpg";

export default function LobbyBanner() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden bg-stone-950 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImg}
          alt="Luxury Lobby Wide Banner"
          className="w-full h-full object-cover filter brightness-90 saturate-110"
          referrerPolicy="no-referrer"
        />
        {/* Subtle radial dark overlay */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(0,0,0,0.5)_100%] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-transparent to-stone-950/20" />
      </div>

      {/* Central Play Button */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.button
          onClick={() => setIsPlaying(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-2xl transition-all duration-300 cursor-pointer group"
          aria-label="Play Cinema Tour"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 fill-current translate-x-0.5 group-hover:text-gold-500 transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.button>
        <span className="text-white/60 text-[9px] uppercase tracking-[0.25em] font-semibold font-mono mt-4">
          Play Cinematic Tour
        </span>
      </div>

      {/* Cinematic Modal Popup */}
      <AnimatePresence>
        {isPlaying && (
          <div className="fixed inset-0 z-55 flex items-center justify-center bg-stone-950/95 backdrop-blur-md p-4">
            {/* Click to close */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setIsPlaying(false)} />

            {/* Video content container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10"
            >
              {/* Embed Unsplash dynamic loop / premium presentation */}
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                title="Antra Studio Presentation"
                className="w-full h-full border-none"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white p-2 rounded-full border border-white/10 hover:text-gold-500 transition-colors z-20 cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
