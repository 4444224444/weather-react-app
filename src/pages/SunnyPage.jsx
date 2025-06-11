import useWeather from "../hooks/useWeather";
import WeatherTemplate from "../components/WeatherTemplate";
import {
  SunnyWeatherInfo,
  SunnyMovies,
  SunnyBooks,
  SunnyMusic
} from "../data/sunny";

function SunnyPage({ isLoggedIn, temp }) {
  const { weather, wind, rain } = useWeather();

  return (
    <div>
      <WeatherTemplate
        weather={weather}
        temp={temp}
        wind={wind}
        rain={rain}
        movieList={SunnyMovies}
        bookList={SunnyBooks}
        musicList={SunnyMusic}
        backgroundImage={SunnyWeatherInfo.bg}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default SunnyPage;







