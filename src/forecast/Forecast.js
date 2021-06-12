import React from "react";

const Forecast = (props) => {
  const { main, weather, everyThreeHours } = props;

  return (
    <>
      <div className="m-10 w-1/6 h-1/3 bg-gradient-to-t from-indigo-200 via-red-200 to-yellow-100 shadow-lg rounded-2xl">
        <p>In {everyThreeHours} Hours</p>
        <p>{weather[0].description}</p>
        <img
          className="opacity-70"
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="icon"
        />
        <p>{Math.round(main.temp)}°C</p>
        <p>
          HIGH: {Math.round(main.temp_max)} °C / LOW:
          {Math.round(main.temp_min)} °C
        </p>
        <p>
          Feels Like: {Math.round(main.feels_like)}
          °C
        </p>
        <p>Humidity: {main.humidity}%</p>
      </div>
    </>
  );
};

export default Forecast;
