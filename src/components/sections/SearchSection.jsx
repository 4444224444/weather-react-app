import React, { useState } from "react";
import styles from "./SearchSection.module.css";

function SearchSection({ onSearch, onBack, searchResults, isSearchMode, weather }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSearchMode) {
      onBack(); // 검색 모드일 땐 다시 돌아감
    } else {
      onSearch(query); // 처음 검색이면 검색 수행
    }
  };

  const getBackgroundColor = () => {
    switch (weather) {
      case "clear":
        return "#0F408F"; 
      case "clouds":
        return "#505B60";
      case "rain":
        return "#395853";
      case "snow":
        return "#7E8DAC";
      default:
        return "#ffffff";
    }
  };

  return (
    <div
      className={styles.searchContainer}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <div className={styles.heading}>
          <h1>하늘로 시작하는 감각 경험</h1>
          <p>당신이 있는 곳의 하늘을 읽고, 그 순간에 어울리는 무드와 음악을 선물합니다. 당신의 하루에 작은 감정을 더해 보세요. 지금 이 날씨에 가장 잘 어울리는 음악과 분위기를 자동으로 큐레이션해 드립니다. 다른 날씨의 콘텐츠들이 궁금하다면 옆으로 가볍게 스와이프해 보세요!</p>
        </div>

        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="검색어 입력"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchIconBtn}>
            <img src={process.env.PUBLIC_URL + "/assets/icons/search.png"} alt="검색" />
          </button>
        </div>
      </form>

      {isSearchMode && (
        <ul className={styles.resultList}>
          {searchResults.length > 0 ? (
            searchResults.map((item, index) => (
              <li key={index} className={styles.resultItem}>
                <img src={item.image} alt={item.title} className={styles.resultImage} />
                <div className={styles.resultText}>
                  <p className={styles.resultTitle}>{item.title}</p>
                </div>
              </li>
            ))
          ) : (
            <p className={styles.noResult}>검색 결과가 없습니다.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchSection;



