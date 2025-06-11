import React, { useState, useRef, useEffect } from "react";
import styles from "./MusicSection.module.css";
import MusicModal from "../modal/MusicModal";

function MusicSection({ musicList, modalData, userName }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = musicList[currentIndex];
  const currentModalData = modalData?.[currentIndex] || {};

  const mergedModalData = {
    ...currentTrack,
    ...currentModalData,
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => console.log("재생 실패", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentIndex]);

  const playPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + musicList.length) % musicList.length);
  };

  const playNext = () => {
    setCurrentIndex((prev) => (prev + 1) % musicList.length);
  };

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>MUSIC</h2>
      <div className={styles.left}>
        <ul className={styles.trackList}>
          {musicList.map((track, index) => (
            <li
              key={index}
              className={`${styles.track} ${index === currentIndex ? styles.active : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}. {track.title}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.right}>
        <img
          src={currentTrack.image}
          alt={currentTrack.title}
          className={styles.albumImage}
          onClick={handleModalOpen}
        />
        <audio ref={audioRef} src={currentTrack.src} />
        <div className={styles.controls}>
          <button onClick={playPrev}>⟨</button>
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={playNext}>⟩</button>
        </div>
      </div>

      {modalOpen && (
        <MusicModal
          data={mergedModalData}
          onClose={handleModalClose}
          userName={userName}
        />
      )}
    </section>
  );
}

export default MusicSection;







