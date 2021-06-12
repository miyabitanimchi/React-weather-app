import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WeatherContext = createContext();

const WeatherInfoProvider = ({ children }) => {
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState([]);
  const [forecastInfo, setForecastInfo] = useState([]);
  const [city, setCity] = useState("vancouver");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const currentWeatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );
        console.log(forecastResponse.data);
        setCurrentWeatherInfo(currentWeatherResponse.data);
        setForecastInfo(forecastResponse.data);
      } catch (error) {
        console.error(`Oops, error!: ${error}`);
      }
    };
    fetchAPI();
  }, [city]);

  const setAnotherCity = (anotherCity) => {
    setCity(anotherCity);
  };
  console.log(currentWeatherInfo);
  return (
    <WeatherContext.Provider
      value={{ currentWeatherInfo, forecastInfo, setAnotherCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

// custom Hook
const useWeatherContext = () => useContext(WeatherContext);

export { useWeatherContext, WeatherInfoProvider as default };
