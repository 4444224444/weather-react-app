import React, { useEffect, useState } from "react";
import styles from "./MyPage.module.css";
import { useNavigate } from "react-router-dom";

function MyPage({ isLoggedIn, setIsLoggedIn, setUserId }) {
  const navigate = useNavigate();
  const [viewedItems, setViewedItems] = useState([]);
  const [myComments, setMyComments] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      return;
    }

    const savedName = localStorage.getItem("userName") || "사용자";
    const recent = JSON.parse(localStorage.getItem("recentContent")) || [];
    const comments = JSON.parse(localStorage.getItem("myComments")) || [];

    setUserName(savedName);
    setViewedItems(recent);
    setMyComments(comments);
  }, [isLoggedIn]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId("");
    localStorage.removeItem("userName");
    localStorage.removeItem("recentContent");
    localStorage.removeItem("myComments");
    navigate("/");
  };

  return (
    <div className={styles.background}>
      <div className={styles.glass}>
        {/* 사용자 이름 + 로그아웃 버튼 */}
        <div className={styles.header}>
          <h2>{userName}님</h2>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            로그아웃
          </button>
        </div>

        {/* 최근 본 콘텐츠 섹션 */}
        <div className={styles.section}>
          <h3>최근 본 콘텐츠</h3>
          <ul className={styles.itemList}>
  {viewedItems.map((item, idx) => (
    <li key={idx}>
      <p>{item.title}</p>
    </li>
  ))}
</ul>
        </div>

        {/* 내가 단 댓글 섹션 */}
        <div className={styles.section}>
          <h3>내가 단 댓글</h3>
          <ul className={styles.commentList}>
            {myComments.map((comment, idx) => (
              <li key={idx}>
                <strong>{comment.user}</strong>: {comment.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyPage;




