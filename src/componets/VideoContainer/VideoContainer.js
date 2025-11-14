import styles from './VideoContainer.module.css';
import { Play } from 'lucide-react';

export default function VideoContainer() {
  return (
    <div className={styles.videoWrapper}>
      <div className={styles.videoBg}>
        <img
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&h=1080&fit=crop"
          alt="Transform Your Living Space"
          className={styles.videoImage}
        />
        <div className={styles.videoOverlay}></div>
      </div>

      <button className={styles.playButton} aria-label="Play video">
        <Play size={40} />
      </button>

      <div className={styles.videoContent}>
        <h2 className={styles.videoTitle}>
          Transform Your Living Space Today!
        </h2>
        <p className={styles.videoDescription}>
          Experience the journey of bringing your vision to life. From initial consultation to final reveal, we collaborate closely with you to create spaces that truly feel like home.
        </p>
      </div>
    </div>
  );
}
