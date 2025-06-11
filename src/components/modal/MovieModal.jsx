import React, { useState, useEffect } from "react";
import styles from "./MovieModal.module.css";

function MovieModal({ data, onClose, userName }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(data.defaultComments || []);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComments = [...comments, { user: userName, text: comment }];
    setComments(newComments);
    setComment("");
    localStorage.setItem(`comments-${data.title}`, JSON.stringify(newComments));

    const allComments = JSON.parse(localStorage.getItem("myComments")) || [];
    const updated = [...allComments, { user: userName, text: comment }];
    localStorage.setItem("myComments", JSON.stringify(updated));

    const viewedItem = { title: data.title, image: data.modalImage };
    const recent = JSON.parse(localStorage.getItem("recentContent")) || [];
    const updatedRecent = [viewedItem, ...recent.filter(i => i.title !== data.title)];
    localStorage.setItem("recentContent", JSON.stringify(updatedRecent));
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <div className={styles.content}>
          <div className={styles.left}>
            <img
              src={data.modalImage}
              alt={data.title}
              className={styles.image}
            />
          </div>

          <div className={styles.right}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.director}>감독: {data.director}</p>

            <div className={styles.commentBox}>
              <h4>코멘트</h4>
              <ul className={styles.commentList}>
                {comments.map((c, i) => (
                  <li key={i}>
                    <strong>{c.user}</strong>: {c.text}
                  </li>
                ))}
              </ul>

              <form className={styles.form} onSubmit={handleSubmit}>
                <textarea
                  className={styles.input}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="코멘트를 남겨보세요"
                />
                <button className={styles.submitBtn} type="submit">
                  등록
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;


