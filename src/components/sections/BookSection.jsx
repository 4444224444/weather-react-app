import React, { useState } from "react";
import styles from "./BookSection.module.css";
import BookModal from "../modal/BookModal"; // 모달 컴포넌트 불러오기

function BookSection({ quotes, modalData, userName }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleQuoteClick = (index) => {
    setSelectedIndex(index);
  };

  //모달창띄우기..
  const handleModalOpen = () => setModalOpen(true);
  //그리고닫기..
  const handleModalClose = () => setModalOpen(false);

  const currentQuote = quotes[selectedIndex];
  const currentModalData = modalData?.[selectedIndex] || {};

  const mergedModalData = {
    ...currentQuote,
    ...currentModalData,
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>BOOK</h2>
      <div className={styles.left}>
        <img
          src={currentQuote.image}
          alt={currentQuote.title || "book"}
          className={styles.bookImage}
          onClick={handleModalOpen}
        />
      </div>

      <div className={styles.right}>
        <div className={styles.quotes}>
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={styles.quoteWrapper}
              onClick={() => handleQuoteClick(index)}
            >
              <p
                className={`${styles.quote} ${
                  index === selectedIndex ? styles.active : ""
                }`}
              >
                {quote.text}
              </p>
              <div
                className={`${styles.underline} ${
                  index === selectedIndex ? styles.activeUnderline : ""
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <BookModal
          data={mergedModalData}
          onClose={handleModalClose}
          userName={userName}
        />
      )}
    </section>
  );
}

export default BookSection;




