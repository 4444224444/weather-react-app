import useWeather from "../hooks/useWeather";
import WeatherTemplate from "../components/WeatherTemplate";
import {
  RainyWeatherInfo,
  RainyMovies,
  RainyBooks,
  RainyMusic
} from "../data/rainy";

function RainyPage({ isLoggedIn, temp }) {
  const { weather, wind, rain } = useWeather();

  return (
    <WeatherTemplate
      weather={weather}
      temp={temp} // 기온
      wind={wind} // 바람
      rain={rain} // 강수량
      movieList={RainyMovies}
      bookList={RainyBooks}
      musicList={RainyMusic}
      backgroundImage={RainyWeatherInfo.bg}
      isLoggedIn={isLoggedIn} // 이거꼭넘겨줘야함!!!!!
    />
  );
}

export default RainyPage;