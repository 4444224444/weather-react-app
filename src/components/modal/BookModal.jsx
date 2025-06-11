import React, { useState } from "react";
import styles from "./BookModal.module.css";

function BookModal({ data, onClose, userName }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(data.defaultComments || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setComments([...comments, { user: userName, text: comment }]);
    setComment("");
  };

  return (
    <div className={styles.overlay} 
    onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <div className={styles.content}>
          <div className={styles.left}>
            <img src={data.modalImage} alt={data.title} className={styles.image} />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.author}>저자: {data.author}</p>

            <div className={styles.commentBox}>
              <h4>코멘트</h4>
              <ul className={styles.commentList}>
                {comments.map((c, i) => (
                  <li key={i}><strong>{c.user}</strong>: {c.text}</li>
                ))}
              </ul>
              <form className={styles.form} onSubmit={handleSubmit}>
                <textarea
                  className={styles.input}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="이 책에 대한 코멘트를 남겨보세요"
                />
                <button className={styles.submitBtn} type="submit">등록</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookModal;
