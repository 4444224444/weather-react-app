import React, { useState } from "react";
import { AppProvider } from "./AppContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import WeatherTemplate from "./components/WeatherTemplate";
import useWeather from "./hooks/useWeather";
import LoginControlPage from "./pages/LoginControlPage";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";

import { useSwipeable } from "react-swipeable";

import { SunnyBooks, SunnyMovies, SunnyMusic, SunnyWeatherInfo } from "./data/sunny";
import { RainyBooks, RainyMovies, RainyMusic, RainyWeatherInfo } from "./data/rainy";
import { CloudyBooks, CloudyMovies, CloudyMusic, CloudyWeatherInfo } from "./data/cloudy";
import { SnowyBooks, SnowyMovies, SnowyMusic, SnowyWeatherInfo } from "./data/snowy";

const pages = [
  {
    key: "clear",
    weather: "clear",
    movieList: SunnyMovies,
    bookList: SunnyBooks,
    musicList: SunnyMusic,
    bg: SunnyWeatherInfo.bg,
  },
  {
    key: "clouds",
    weather: "clouds",
    movieList: CloudyMovies,
    bookList: CloudyBooks,
    musicList: CloudyMusic,
    bg: CloudyWeatherInfo.bg,
  },
  {
    key: "rain",
    weather: "rain",
    movieList: RainyMovies,
    bookList: RainyBooks,
    musicList: RainyMusic,
    bg: RainyWeatherInfo.bg,
  },
  {
    key: "snow",
    weather: "snow",
    movieList: SnowyMovies,
    bookList: SnowyBooks,
    musicList: SnowyMusic,
    bg: SnowyWeatherInfo.bg,
  },
];

function App() {
  const { temp, wind, rain, loading } = useWeather();
  const [userId, setUserId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setPageIndex((prev) => (prev + 1) % pages.length),
    onSwipedRight: () => setPageIndex((prev) => (prev - 1 + pages.length) % pages.length),
    trackMouse: true,
  });

  if (loading || temp === null) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#ffffff"
      }}>
        <div style={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.1)",
          border: "2px solid rgba(255, 255, 255, 0.6)",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          borderRadius: "20px",
          padding: "2rem 3rem",
          color: "#111",
          fontSize: "1.5rem",
          fontWeight: "600",
          fontFamily: "Pretendard, sans-serif",
          textAlign: "center",
          maxWidth: "320px",
          zIndex: 1
        }}>
          오늘의 날씨는?
          <div style={{
            position: "absolute",
            bottom: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            borderTop: "20px solid rgba(255, 255, 255, 0.7)",
            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
          }} />
        </div>
      </div>
    );
  }

  const currentPage = pages[pageIndex];

  return (
    <AppProvider>
      <BrowserRouter basename="/weather-react-app">
        <div {...handlers}>
          <Routes>
            <Route
              path="/"
              element={
                <WeatherTemplate
                  weather={currentPage.weather}
                  temp={temp}
                  wind={wind}
                  rain={rain}
                  movieList={currentPage.movieList}
                  bookList={currentPage.bookList}
                  musicList={currentPage.musicList}
                  backgroundImage={currentPage.bg}
                  isLoggedIn={isLoggedIn}
                  userId={userId}
                />
              }
            />
            <Route
              path="/login"
              element={
                <LoginControlPage
                  onLogin={(id) => {
                    setIsLoggedIn(true);
                    setUserId(id);
                  }}
                />
              }
            />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/mypage"
              element={
                <MyPage
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setUserId={setUserId}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;


