import React, { useState, useEffect } from "react";
import { useWeatherContext } from "../../context/weather-context";
import { FaRegHandPeace } from "react-icons/fa";
import Forecast from "./Forecast";

const ForecastList = () => {
  const { forecastInfo } = useWeatherContext();
  const [newForecastArr, setNewForecastArr] = useState([]);

  console.log(forecastInfo);

  const getNewForecastArr = () => {
    const newArr = forecastInfo.list.slice(0, 4);
    setNewForecastArr(newArr);
  };

  useEffect(() => {
    forecastInfo.length !== 0 && getNewForecastArr();
  }, [forecastInfo]);

  return (
    <>
      {forecastInfo.length !== 0 && (
        <section className="h-full text-gray-600 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg">
              3 Hour Forecast : {forecastInfo.city.name},{" "}
              {forecastInfo.city.country}
            </p>
            <div className="flex h-full justify-center items-center">
              {newForecastArr.map((forecast, index) => (
                <Forecast
                  key={forecast.dt}
                  {...forecast}
                  everyThreeHours={`${(index + 1) * 3}`}
                />
              ))}
            </div>
            <div className="flex items-center">
              <p className="flex-initial my-auto text-lg">It'll Be All Good</p>
              <FaRegHandPeace className="my-auto ml-1 text-xl flex-initial" />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ForecastList;
