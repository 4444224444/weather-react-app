import useWeather from "../hooks/useWeather";
import WeatherTemplate from "../components/WeatherTemplate";
import {
  CloudyWeatherInfo,
  CloudyMovies,
  CloudyBooks,
  CloudyMusic
} from "../data/cloudy";

function CloudyPage({ isLoggedIn, temp }) {
  const { weather, wind, rain } = useWeather();

  return (
    <WeatherTemplate
      weather={weather}
      temp={temp} // 기온
      wind={wind} // 바람
      rain={rain} // 강수량
      movieList={CloudyMovies}
      bookList={CloudyBooks}
      musicList={CloudyMusic}
      backgroundImage={CloudyWeatherInfo.bg}
      isLoggedIn={isLoggedIn} // 이거꼭넘겨줘야함!!!!!
    />
  );
}

export default CloudyPage;