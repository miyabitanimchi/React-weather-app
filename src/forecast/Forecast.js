import React from "react";

const Forecast = (props) => {
  const { main, weather, everyThreeHours } = props;

  return (
    <>
      <div className="flex flex-col justify-center m-6 h-full">
        <p className="text-center text-lg mb-3">In {everyThreeHours} Hours</p>
        <div className=" w-64 pt-7 pb-7 bg-gradient-to-t from-indigo-200 via-red-200 to-yellow-100 shadow-lg rounded-2xl text-center">
          <p className="text-lg">{weather[0].description}</p>
          <img
            className="opacity-70 mx-auto m-3"
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="icon"
          />
          <p className="text-lg mb-2">{Math.round(main.temp)}°C</p>
          <p>
            H: {Math.round(main.temp_max)} °C / L: {Math.round(main.temp_min)}{" "}
            °C
          </p>
          <p>
            Feels Like: {Math.round(main.feels_like)}
            °C
          </p>
          <p>Humidity: {main.humidity}%</p>
        </div>
      </div>
    </>
  );
};

export default Forecast;
