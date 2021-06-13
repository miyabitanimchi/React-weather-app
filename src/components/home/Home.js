import React, { useState, createContext, useContext, useEffect } from "react";
import { BiSmile, BiSun } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useWeatherContext } from "../../context/weather-context";

const Home = () => {
  const { currentWeatherInfo, setAnotherCity } = useWeatherContext();
  const [city, setCity] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // setAnotherCity(e.target.value);
  // };

  const handleChange = (city) => {
    setAnotherCity(city);
  };

  return (
    <>
      {currentWeatherInfo.length !== 0 && (
        <>
          <section className="h-full my-auto">
            <div className="flex h-full flex-col justify-center">
              <div className="flex items-center  mx-auto mb-6 text-xl">
                <p className="text-black-500 flex-initial text-gray-600">
                  Check The Weather Before You'll Have A Good Day
                </p>
                <BiSmile className="flex-initial my-auto mx-1 text-gray-600 text-2xl" />
                <BiSun className="flex-initial my-auto text-yellow-500 text-2xl" />
              </div>
              <div className="w-1/3 h-1/4 flex flex-col justify-center mx-auto shadow-lg rounded-2xl bg-gradient-to-tl from-blue-300 via-green-200 to-yellow-300">
                <p className="mx-auto text-gray-600 text-md">
                  {currentWeatherInfo.name}, {currentWeatherInfo.sys.country}
                </p>
                <p className="mx-auto text-gray-600 text-lg">
                  {currentWeatherInfo.weather[0].description}
                </p>
                <p className="mx-auto mb-3 text-gray-600 text-lg">
                  {Math.round(currentWeatherInfo.main.temp)}°C
                </p>
                <Link
                  to="current-weather"
                  className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 border-b-4 border-yellow-600 hover:border-yellow-500 rounded w-48 mx-auto text-center mb-6"
                >
                  Learn More
                </Link>
              </div>
              <p className="flex items-center mx-auto m-3 text-lg text-gray-600">
                Or
              </p>
              <div className="mx-auto w-1/3 h-1/4 shadow-lg py-8 px-36 rounded-2xl bg-gradient-to-br from-green-300 to-purple-400">
                <form className="form w-full h-full mx-auto flex justify-center my-auto">
                  <div className="flex flex-col justify-center ">
                    <input
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
                      type="text"
                      placeholder="Search for a city..."
                      onChange={(e) => setCity(e.target.value)}
                    />
                    {/* Button to search for a anotehr city */}
                    <Link
                      to="current-weather"
                      className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold border-b-4 border-yellow-600 hover:border-yellow-500 rounded text-center mx-auto w-48 m-2"
                    >
                      <input
                        className="py-2 px-4 bg-yellow-500 hover:bg-yellow-400 rounded w-full cursor-pointer"
                        type="submit"
                        value="Go"
                        onClick={() => handleChange(city)}
                      />
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
