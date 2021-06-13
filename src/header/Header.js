import React from "react";
import { Link } from "react-router-dom";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Header = () => (
  <>
    <nav className="flex items-center justify-between flex-wrap bg-teal p-6 fixed">
      {/* <div className="flex items-center flex-no-shrink text-white mr-6">
        <svg
          className="h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
      </div> */}
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> */}
      <TiWeatherPartlySunny className="text-3xl text-blue-400" />
      <div className="w-full ml-2 text-gray-700 block flex-grow lg:flex lg:items-center lg:w-auto ">
        <div className="text-md lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4"
          >
            Home
          </Link>
          <Link
            to="current-weather"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mr-4"
            disabled
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

export default Header;
