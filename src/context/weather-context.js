import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WeatherContext = createContext();

const WeatherInfoProvider = ({ children }) => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [city, setCity] = useState("vancouver");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeatherInfo(response.data);
      } catch (error) {
        console.error(`Oops, error!: ${error}`);
      }
    };
    fetchAPI();
  }, [city]);

  const setAnotherCity = (anotherCity) => {
    setCity(anotherCity);
  };
  console.log(weatherInfo);
  return (
    <WeatherContext.Provider value={{ weatherInfo, setAnotherCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

// custom Hook
const useWeatherContext = () => useContext(WeatherContext);

export { useWeatherContext, WeatherInfoProvider as default };
