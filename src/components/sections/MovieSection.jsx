import React, { useState } from "react";
import styles from "./MovieSection.module.css";
import MovieModal from "../modal/MovieModal";

function MovieSection({ list, modalData, userName }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const currentMovie = list[currentIndex];
  const currentModalData = modalData?.[currentIndex] || {};
  const mergedModalData = { ...currentMovie, ...currentModalData };

  const handleLeftClick = () => {
    setCurrentIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => (prev + 1) % list.length);
  };

  const getIndex = (offset) => (currentIndex + offset + list.length) % list.length;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>MOVIE</h2>

      {/* 왼쪽 텍스트 박스 */}
      <div className={styles.left}>
        <div className={styles.textBox}>
          <h3>{currentMovie.title}</h3>
          <p>{currentMovie.description}</p>
        </div>
      </div>

      {/* 오른쪽 슬라이더 */}
      <div className={styles.right}>
        <div className={styles.slider}>
          <img
            src={list[getIndex(-1)].image}
            alt="prev"
            className={`${styles.poster} ${styles.side}`}
            onClick={handleLeftClick}
          />

          <img
            src={list[getIndex(0)].image}
            alt="center"
            className={`${styles.poster} ${styles.center}`}
            onClick={handleModalOpen}
          />

          <img
            src={list[getIndex(1)].image}
            alt="next"
            className={`${styles.poster} ${styles.side}`}
            onClick={handleRightClick}
          />
        </div>
      </div>

      {/* 90% 높이의 팝업 모달 */}
      {modalOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <MovieModal
              data={mergedModalData}
              onClose={handleModalClose}
              userName={userName}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default MovieSection;














