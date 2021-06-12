import React from "react";
import { useWeatherContext } from "../context/weather-context";

const Forecast = () => {
  const { forecastInfo } = useWeatherContext();

  return (
    <>
      {forecastInfo.length !== 0 ? (
        <h1>Hello world</h1>
      ) : (
        <h1>no info to show</h1>
      )}
    </>
  );
};

export default Forecast;
