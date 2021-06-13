import React, { useState, useEffect } from "react";
import { useWeatherContext } from "../context/weather-context";
import Forecast from "./Forecast";

const ForecastList = () => {
  const { forecastInfo } = useWeatherContext();
  const [newForecastArr, setNewForecastArr] = useState([]);

  const getNewForecastArr = () => {
    const newArr = forecastInfo.list.slice(0, 4);
    setNewForecastArr(newArr);
    console.log(newArr);
  };

  useEffect(() => {
    forecastInfo.length !== 0 && getNewForecastArr();
  }, [forecastInfo]);

  return (
    <>
      {forecastInfo.length !== 0 && (
        <section className="h-full text-gray-600 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg">3 Hour Forecast</p>
            <div className="flex h-full justify-center items-center">
              {newForecastArr.map((forecast, index) => (
                <Forecast
                  key={forecast.dt}
                  {...forecast}
                  everyThreeHours={`${(index + 1) * 3}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ForecastList;
