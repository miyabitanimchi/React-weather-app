import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WeatherContext = createContext();

const WeatherInfoProvider = ({ children }) => {
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState([]);
  const [forecastInfo, setForecastInfo] = useState([]);
  const [city, setCity] = useState("vancouver");
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const currentWeatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );

        console.log(forecastResponse);
        setCurrentWeatherInfo(currentWeatherResponse.data);
        setForecastInfo(forecastResponse.data);
      } catch (error) {
        if (city.length === 0) {
          setErrorMsg("Input a city name");
        } else {
          setErrorMsg("The city name was not found");
        }
        setIsErrorOccured(true);
        console.log(`Oops, error!: ${error}`);
      }
    };
    // reset error
    setIsErrorOccured(false);
    fetchAPI();
  }, [city]);

  const setAnotherCity = (anotherCity) => {
    setCity(anotherCity);
  };
  console.log(currentWeatherInfo);
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

const useWeatherContext = () => useContext(WeatherContext);

export { useWeatherContext, WeatherInfoProvider as default };
