import React from "react";
import { useWeatherContext } from "../../context/weather-context";
import { BiWinkSmile, BiError } from "react-icons/bi";
import { Link } from "react-router-dom";

const CurrentWeather = () => {
  const {
    currentWeatherInfo,
    isErrorOccured,
    errorMsg,
    setAnotherCity,
  } = useWeatherContext();

  return (
    <>
      {currentWeatherInfo.length !== 0 && !isErrorOccured ? (
        <>
          <div className="h-full mx-auto">
            <div className="flex h-full flex-col justify-center items-center w-full m-auto text-gray-600">
              <p className="text-lg mb-3">Current Weather</p>
              <div className="w-96 h-1/2 items-center shadow-lg rounded-2xl bg-gradient-to-tl from-red-100 via-red-200 to-yellow-200">
                <div className="flex flex-col justify-center items-center h-full ">
                  <h1 className="text-md pt-3">
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
                  <p>Humidity: {currentWeatherInfo.main.humidity}%</p>
                  <Link
                    to="forecast"
                    className={
                      "bg-yellow-500 hover:bg-yellow-400 text-white py-2 border-b-4 border-yellow-600 hover:border-yellow-500 rounded w-48 m-auto text-center mb-6"
                    }
                  >
                    Check 3 Hour Forecast
                  </Link>
                </div>
              </div>
              <div className="mt-3 flex items-center">
                <p className="flex-initial my-auto text-lg">Have A Nice Day</p>
                <BiWinkSmile className="my-auto ml-1 text-xl flex-initial" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-full flex flex-col justify-center items-center">
            <BiError className="mb-5 text-4xl text-gray-600" />
            <p className="text-xl mb-6 text-gray-600">{errorMsg}</p>
            <Link
              to="/"
              className={
                "bg-yellow-500 hover:bg-yellow-400 text-white py-2 border-b-4 border-yellow-600 hover:border-yellow-500 rounded w-48 mx-auto text-center"
              }
              onClick={() => setAnotherCity("Vancouver")}
            >
              Back to Home
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default CurrentWeather;
