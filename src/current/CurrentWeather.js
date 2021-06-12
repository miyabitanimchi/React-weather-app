import React from "react";
import { useWeatherContext } from "../context/weather-context";
import { BiWinkSmile } from "react-icons/bi";
import { Link } from "react-router-dom";

const CurrentWeather = () => {
  const { currentWeatherInfo } = useWeatherContext();
  console.log(currentWeatherInfo);
  return (
    <>
      {currentWeatherInfo.length !== 0 && (
        <>
          <div className="h-full mx-auto">
            <div className="flex h-full flex-col justify-center items-center w-full m-auto text-gray-600">
              <p className="shadow-lg">Current Weather</p>
              <div className="w-1/4 h-1/2 items-center shadow-lg rounded-2xl bg-gradient-to-tl from-green-200 via-yellow-200 to-pink-200">
                <h1>
                  {currentWeatherInfo.name}, {currentWeatherInfo.sys.country}
                </h1>
                <h1>{currentWeatherInfo.weather[0].description}</h1>
                <img
                  className="opacity-70"
                  src={`http://openweathermap.org/img/wn/${currentWeatherInfo.weather[0].icon}@2x.png`}
                  alt="icon"
                />
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
                <Link
                  to="forecast"
                  className={
                    "bg-yellow-500 hover:bg-yellow-400 text-white py-2 border-b-4 border-yellow-600 hover:border-yellow-500 rounded w-1/5 mx-auto text-center mb-6"
                  }
                >
                  Check 3 Hour Forecast
                </Link>
              </div>
              <p>Have A Nice Day</p>
              <BiWinkSmile />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CurrentWeather;
