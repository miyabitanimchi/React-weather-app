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
        <div className="h-full">
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
      )}
    </>
  );
};

export default ForecastList;
