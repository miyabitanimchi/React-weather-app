import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// generate context object
const WeatherContext = createContext();

const WeatherInfoProvider = ({ children }) => {
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState([]);
  const [forecastInfo, setForecastInfo] = useState([]);
  const [city, setCity] = useState("vancouver");
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const setAnotherCity = (anotherCity) => {
    setCity(anotherCity);
  };
  const fetchAPI = async () => {
    try {
      const currentWeatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      setCurrentWeatherInfo(currentWeatherRes.data);
      setForecastInfo(forecastRes.data);
    } catch (error) {
      if (city.length === 0) {
        setErrorMsg("Input a city name");
      } else {
        setErrorMsg(`The city name "${city}" was not found`);
      }
      setIsErrorOccured(true);
      console.log(`Oops, error!: ${error}`);
    }
  };

  useEffect(() => {
    // reset error
    setIsErrorOccured(false);
    fetchAPI();
    console.log("this is useEffect 1");
  }, [city]);

  // Update weather every 2 mins
  useEffect(() => {
    const updateEveryTwomins = setInterval(() => {
      fetchAPI();
      console.log("fetched again");
      console.log("this is useEffect 2");
    }, 120000);
    return () => clearInterval(updateEveryTwomins);
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        currentWeatherInfo,
        forecastInfo,
        isErrorOccured,
        errorMsg,
        setAnotherCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
// const value = useContext(MyContext)... context object will be passed in the parameter.
// So you can use the value, which is passed to Provider component
// useWeathercontext()... helper function to use the values passed to Provider
const useWeatherContext = () => useContext(WeatherContext);

export { useWeatherContext, WeatherInfoProvider as default };
