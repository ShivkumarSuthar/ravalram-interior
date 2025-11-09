'use client';
import styled from "styled-components";
import { Play } from "lucide-react";

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 110vh;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const VideoBg = styled.div`
  position: absolute;
  inset: 0;
`;

const VideoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: translate(-50%, -50%) scale(1.05);
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

const VideoContent = styled.div`
  position: absolute;
  bottom: 10%;
  left: 6%;
  z-index: 2;
  color: #fff;
  max-width: 600px;

  @media (max-width: 768px) {
    left: 5%;
    right: 5%;
    bottom: 8%;
    max-width: 90%;
  }
`;

const VideoTitle = styled.h2`
  font-family: 'Playfair Display', 'Cal Sans', Georgia, serif;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const VideoDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 500px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export default function VideoContainer() {
  return (
    <VideoWrapper>
      <VideoBg>
        <VideoImage
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&h=1080&fit=crop"
          alt="Transform Your Living Space"
        />
        <VideoOverlay />
      </VideoBg>

      <PlayButton aria-label="Play video">
        <Play size={40} />
      </PlayButton>

      <VideoContent>
        <VideoTitle>Transform Your Living Space Today!</VideoTitle>
        <VideoDescription>
          Experience the journey of bringing your vision to life. From initial consultation to final reveal, we collaborate closely with you to create spaces that truly feel like home.
        </VideoDescription>
      </VideoContent>
    </VideoWrapper>
  );
}