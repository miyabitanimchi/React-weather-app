import React from "react";
import { BiSmile, BiSun } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useWeatherContext } from "../context/weather-context";

const Home = () => {
  const { weatherInfo } = useWeatherContext();
  const { setAnotherCity } = useWeatherContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnotherCity(e.target.value);
  };

  const handleChange = (e) => {
    setAnotherCity(e.target.value);
  };

  return (
    <>
      {weatherInfo.length !== 0 && (
        <>
          <section className="h-full my-auto">
            <div className="flex  h-full flex-col justify-center">
              <div className="flex items-center  mx-auto mb-6 text-xl">
                <h1 className="text-black-500 flex-initial ">
                  Check Weather Before You'll Have A Good Day
                </h1>
                <BiSmile className="flex-initial my-auto mx-1" />
                <BiSun className="flex-initial my-auto text-yellow-500 " />
              </div>
              <h3 className="mx-auto">{weatherInfo.name}</h3>
              <h3 className="mx-auto">{weatherInfo.weather[0].description}</h3>
              <h3 className="mx-auto">{Math.round(weatherInfo.main.temp)}°C</h3>
              <Link
                to="current-weather"
                className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-600 hover:border-yellow-500 rounded w-1/12 mx-auto text-center mb-6"
              >
                <button>Learn More</button>
              </Link>
              <h1 className="flex items-center  mx-auto mb-3 text-xl ">Or</h1>
              <form className="form" onSubmit={handleSubmit}>
                <input
                  className="shadow appearance-none border rounded w-3/12 mx-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
                  type="text"
                  placeholder="Search for a city..."
                  onChange={handleChange}
                />
                <Link
                  to="current-weather"
                  className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold border-b-4 border-yellow-600 hover:border-yellow-500 rounded w-1/12 mx-auto text-center animate-bounce"
                >
                  <input
                    className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-400 rounded"
                    type="submit"
                    value="Go"
                    // onClick={handleChange}
                  />
                </Link>
              </form>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
