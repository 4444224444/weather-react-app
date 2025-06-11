import { useState, useEffect } from "react";

export default function useWeather() {
  const [weather, setWeather] = useState(null);
  const [temp, setTemp] = useState(null);
  const [wind, setWind] = useState(null);
  const [rain, setRain] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      const apiKey = "481d52b2ed08d8eaf4fa1c6bce42667e";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        const main = data.weather[0].main.toLowerCase();
        const cloudiness = data.clouds?.all ?? 0;

        let mappedWeather;

        if (main === "rain" || main === "drizzle") {
          mappedWeather = "rain";
        } else if (main === "snow") {
          mappedWeather = "snow";
        } else if (cloudiness <=70) {
          mappedWeather = "clear";
        } else {
          mappedWeather = "clouds";
        }

        setWeather(mappedWeather);
        setTemp(Math.round(data.main.temp));
        setWind(data.wind.speed);
        setRain(data.rain?.["1h"] || 0);
      } catch (err) {
        console.error("API 오류", err);
      } finally {
        setLoading(false);
      }
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
      (err) => {
        console.error("위치 오류", err);
        setLoading(false);
      }
    );
  }, []);

  return { weather, temp, wind, rain, loading };
}
