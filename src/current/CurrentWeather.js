import React from "react";
import { useWeatherContext } from "../context/weather-context";

const CurrentWeather = () => {
  const { weatherInfo } = useWeatherContext();
  console.log(weatherInfo);
  return (
    <>
      {weatherInfo.length !== 0 && (
        <>
          <h2>Current Weather</h2>
          <h1>
            {weatherInfo.name}, {weatherInfo.sys.country}
          </h1>
          <h1>{weatherInfo.weather[0].description}</h1>

          <p>{Math.round(weatherInfo.main.temp)}°C </p>
          <p>
            HIGH: {Math.round(weatherInfo.main.temp_max)} °C / LOW:
            {Math.round(weatherInfo.main.temp_min)} °C
          </p>
        </>
      )}
    </>
  );
};

export default CurrentWeather;
