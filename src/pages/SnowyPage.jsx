import useWeather from "../hooks/useWeather";
import WeatherTemplate from "../components/WeatherTemplate";
import {
  SnowyWeatherInfo,
  SnowyMovies,
  SnowyBooks,
  SnowyMusic
} from "../data/snowy";

function SnowyPage({ isLoggedIn, temp }) {
  const { weather, wind, rain } = useWeather();

  return (
    <WeatherTemplate
      weather={weather}
      temp={temp} // 기온
      wind={wind} // 바람
      rain={rain} // 강수량
      movieList={SnowyMovies}
      bookList={SnowyBooks}
      musicList={SnowyMusic}
      backgroundImage={SnowyWeatherInfo.bg}
      isLoggedIn={isLoggedIn} // 이거꼭넘겨줘야함!!!!!
    />
  );
}

export default SnowyPage;