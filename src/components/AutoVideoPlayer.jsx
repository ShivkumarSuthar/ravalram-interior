import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import bannerImg from "/assets/images/AI_images/antra_lobby_banner_1782744283860.jpg";

export default function AutoVideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Reliable high-definition interior design & architecture video sources
  const videoSources = [
    "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-a-living-room-and-a-large-window-41556-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-and-bright-house-41557-large.mp4"
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay caught/prevented:", err);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  return (
    <section className="relative w-full bg-stone-950 overflow-hidden leading-none select-none border-t border-b border-stone-800/80">
      
      {/* Full-Width Video Container - Height adapts naturally to video aspect ratio */}
      <div className="relative w-full h-[380px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center bg-black overflow-hidden">
        
        {/* Placeholder background image while loading */}
        {!isLoaded && (
          <img
            src={bannerImg}
            alt="Suthar Luxury Studio Walkthrough Preview"
            className="absolute inset-0 w-full h-full object-cover filter brightness-75"
          />
        )}

        {/* HTML5 Autoplay Video Element - Covers complete width & height according to video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          poster={bannerImg}
          className="w-full h-full object-cover block mx-auto transition-opacity duration-700 filter brightness-[0.75] contrast-[1.05]"
        >
          <source src={videoSources[0]} type="video/mp4" />
          <source src={videoSources[1]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Dark Vignette & Edge Blending Overlays */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-black/25 to-black/50" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        {/* Center Translucent Play Button Overlay (As in image) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-[0_0_80px_rgba(255,255,255,0.2)] transition-all duration-500 cursor-pointer group"
            aria-label="Toggle Video Playback"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-stone-900/40 border border-white/30 flex items-center justify-center group-hover:bg-[#CAA05C] group-hover:text-stone-950 transition-all duration-300">
              {isPlaying ? (
                <Pause size={28} className="text-white group-hover:text-stone-950" />
              ) : (
                <Play size={28} className="text-white group-hover:text-stone-950 translate-x-1" />
              )}
            </div>
          </motion.button>
        </div>

        {/* Bottom Overlay Text Content (Matching image exact structure) */}
        <div className="absolute bottom-8 left-0 right-0 z-20 px-6 md:px-12 pointer-events-none">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            
            {/* Left Big Headline */}
            <div className="space-y-2 max-w-2xl text-left">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight">
                Unlock Your Dream <br className="hidden sm:inline" />
                Home Today!
              </h2>
            </div>

            {/* Right Subtitle Text */}
            <div className="max-w-md text-left md:text-right space-y-3">
              <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed drop-shadow-md">
                We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.
              </p>
            </div>

          </div>
        </div>

        {/* Top-Right Floating Minimal Glass Controls Bar */}
        <div className="absolute top-6 right-6 z-20 flex items-center space-x-3">
          
          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-black/60 hover:bg-[#CAA05C] text-white hover:text-stone-950 flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 shadow-xl cursor-pointer"
            title={isMuted ? "Unmute" : "Mute"}
            aria-label="Toggle Mute"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullScreen}
            className="w-10 h-10 rounded-full bg-black/60 hover:bg-[#CAA05C] text-white hover:text-stone-950 flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 shadow-xl cursor-pointer hidden sm:flex"
            title="Fullscreen"
            aria-label="Fullscreen"
          >
            <Maximize2 size={16} />
          </button>

        </div>

      </div>

    </section>
  );
}

