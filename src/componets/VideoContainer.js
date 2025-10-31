"use client";
import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoContainer() {
  return (
    <div className="video-container">
      <div className="video-bg">
        <Image
          src="/images/h1-slider1.jpg" // your image
          alt="Video Thumbnail"
          fill
          className="video-image"
        />
        <div className="video-overlay" />
      </div>

      {/* Play Icon */}
      <button className="video-play-btn">
        <Play size={40} />
      </button>

      {/* Text */}
      <div className="video-content">
        <h2>Unlock Your Dream Home Today!</h2>
        <p>
          We encourage clients to actively participate in discussions, share
          their ideas, preferences, and feedback.
        </p>
      </div>
    </div>
  );
}
