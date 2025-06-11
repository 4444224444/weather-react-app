import React, { useState } from "react";
import Header from "../components/layout/Header";
import WeatherSection from "../components/sections/WeatherSection";
import SearchSection from "../components/sections/SearchSection";
import MovieSection from "../components/sections/MovieSection";
import BookSection from "../components/sections/BookSection";
import MusicSection from "../components/sections/MusicSection";
import Footer from "../components/layout/Footer";

import SunnyModalData from "../data/sunnymodal";
import CloudyModalData from "../data/cloudymodal";
import RainyModalData from "../data/rainymodal";
import SnowyModalData from "../data/snowymodal";

function WeatherTemplate({
  movieList,
  bookList,
  musicList,
  weather,
  wind,
  rain,
  temp,
  backgroundImage,
  isLoggedIn,
  userId,
}) {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchMode, setIsSearchMode] = useState(false);

  // ✅ 날씨 상태 → 인덱스 매핑
  const weatherToIndex = {
    clear: 0,
    clouds: 1,
    rain: 2,
    snow: 3,
  };
  const currentIndex = weatherToIndex[weather] ?? 0;

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

  const handleSearch = (query) => {
    const combinedList = [...bookList, ...movieList, ...musicList];
    const filtered = combinedList.filter(
      (item) =>
        item.title && item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
    setIsSearchMode(true);
  };

  const handleBack = () => {
    setIsSearchMode(false);
  };

  const modalDataMap = {
    clear: SunnyModalData,
    clouds: CloudyModalData,
    rain: RainyModalData,
    snow: SnowyModalData,
  };

  const currentModalData = modalDataMap[weather] || SunnyModalData;

  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(),
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Header isLoggedIn={isLoggedIn} />

      {/* ✅ 날씨 기준 동그라미 인덱스 자동 적용 */}
      <WeatherSection
        weather={weather}
        temp={temp}
        wind={wind}
        rain={rain}
        backgroundImage={backgroundImage}
        currentIndex={currentIndex}
        setCurrentIndex={() => {}} // ❌ 실제 동작 안 하도록 비워둠
      />

      {isLoggedIn && (
        <SearchSection
          weather={weather}
          onSearch={handleSearch}
          onBack={handleBack}
          searchResults={searchResults}
          isSearchMode={isSearchMode}
        />
      )}

      {isLoggedIn ? (
        <div
          style={{
            maxWidth: "1200px",
            margin: "2rem auto",
            padding: "3rem",
            borderRadius: "60px",
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 32px 0 rgba(142, 142, 142, 0.37)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1.5px solid rgba(255, 255, 255, 0.5)",
            color: "white",
          }}
        >
          <MovieSection
            list={movieList}
            modalData={currentModalData.movies}
            userName={userId}
          />
          <BookSection
            quotes={bookList}
            modalData={currentModalData.books}
            userName={userId}
          />
          <MusicSection
            musicList={musicList}
            modalData={currentModalData.music}
            userName={userId}
          />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "4rem 0",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              padding: "4rem 6rem",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "40px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              color: "#fff",
              fontFamily: "pretendard",
              fontSize: "2.2rem",
              fontWeight: "600",
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            로그인이 필요한 서비스입니다
            <div
              style={{
                position: "absolute",
                bottom: "-35px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "30px solid transparent",
                borderRight: "30px solid transparent",
                borderTop: "35px solid rgba(255, 255, 255, 0.1)",
                borderTopColor: "rgba(255, 255, 255, 0.1)",
                filter: "blur(0.5px)",
              }}
            ></div>
          </div>
        </div>
      )}

      <Footer weather={weather} />
    </div>
  );
}

export default WeatherTemplate;










