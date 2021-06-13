import React from "react";
import { Link } from "react-router-dom";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useWeatherContext } from "../../context/weather-context";

const Header = () => {
  const { setAnotherCity } = useWeatherContext();
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal p-6 fixed">
        <TiWeatherPartlySunny className="text-3xl text-blue-400" />
        <div className="w-full ml-2 text-gray-700 block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div className="text-md lg:flex-grow">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4"
              onClick={() => setAnotherCity("vancouver")}
            >
              Home
            </Link>
            <Link
              to="current-weather"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4"
            >
              Current Weather
            </Link>
            <Link
              to="forecast"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500"
            >
              3 Hour Forecast
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
