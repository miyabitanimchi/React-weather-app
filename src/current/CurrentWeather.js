import React from "react";
import { useWeatherContext } from "../context/weather-context";
import { BiWinkSmile } from "react-icons/bi";
import { Link } from "react-router-dom";

const CurrentWeather = () => {
  const { currentWeatherInfo, isErrorOccured, errorMsg } = useWeatherContext();

  return (
    <>
      {currentWeatherInfo.length !== 0 && !isErrorOccured ? (
        <>
          <div className="h-full mx-auto">
            <div className="flex h-full flex-col justify-center items-center w-full m-auto text-gray-600">
              <p className="text-lg mb-3">Current Weather</p>
              <div className="w-80 h-1/2 items-center shadow-lg rounded-2xl bg-gradient-to-tl from-red-100 via-red-200 to-yellow-200">
                <div className="flex flex-col justify-center items-center h-full ">
                  <h1 className="text-md">
                    {currentWeatherInfo.name}, {currentWeatherInfo.sys.country}
                  </h1>
                  <h1 className="text-xl">
                    {currentWeatherInfo.weather[0].description}
                  </h1>
                  <img
                    className="opacity-80 m-4"
                    src={`http://openweathermap.org/img/wn/${currentWeatherInfo.weather[0].icon}@2x.png`}
                    alt="icon"
                  />
                  <p className="text-lg mb-3">
                    {Math.round(currentWeatherInfo.main.temp)}°C{" "}
                  </p>
                  <p>
                    H: {Math.round(currentWeatherInfo.main.temp_max)} °C / L:
                    {Math.round(currentWeatherInfo.main.temp_min)} °C
                  </p>
                  <p>
                    Feels Like: {Math.round(currentWeatherInfo.main.feels_like)}
                    °C
                  </p>
                  <p className="mb-6">
                    Humidity: {currentWeatherInfo.main.humidity}%
                  </p>
                  <Link
                    to="forecast"
                    className={
                      "bg-yellow-500 hover:bg-yellow-400 text-white py-2 border-b-4 border-yellow-600 hover:border-yellow-500 rounded w-48 mx-auto text-center mb-6"
                    }
                  >
                    Check 3 Hour Forecast
                  </Link>
                </div>
              </div>
              <p className="mt-3">Have A Nice Day</p>
              <BiWinkSmile />
            </div>
          </div>
        </>
      ) : (
        <p>{errorMsg}</p>
      )}
    </>
  );
};

export default CurrentWeather;
