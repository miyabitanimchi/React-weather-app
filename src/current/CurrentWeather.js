import React from "react";
import { useWeatherContext } from "../context/weather-context";

const CurrentWeather = () => {
  const { currentWeatherInfo } = useWeatherContext();
  console.log(currentWeatherInfo);
  return (
    <>
      {currentWeatherInfo.length !== 0 && (
        <>
          <div className="h-full mx-auto">
            <div className="flex h-full flex-col justify-center items-center w-full m-auto text-gray-600">
              <div className="w-1/3 h-1/2 items-center shadow-lg rounded-2xl bg-gradient-to-tl from-green-300 via-yellow-300 to-pink-300">
                <h2>Current Weather</h2>
                <h1>
                  {currentWeatherInfo.name}, {currentWeatherInfo.sys.country}
                </h1>
                <h1>{currentWeatherInfo.weather[0].description}</h1>

                <p>{Math.round(currentWeatherInfo.main.temp)}°C </p>
                <p>
                  HIGH: {Math.round(currentWeatherInfo.main.temp_max)} °C / LOW:
                  {Math.round(currentWeatherInfo.main.temp_min)} °C
                </p>
                <p>
                  Feels Like: {Math.round(currentWeatherInfo.main.feels_like)}
                  °C
                </p>
                <p>Humidity: {currentWeatherInfo.main.humidity}%</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CurrentWeather;
