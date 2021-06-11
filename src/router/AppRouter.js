import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import CurrentWeather from "../current/CurrentWeather";
import HourlyWeather from "../hourly/HourlyWeather";
import Wrapper from "../wrapper/Wrapper";

const AppRouter = () => (
  <BrowserRouter>
    <Wrapper>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/current-weather" component={CurrentWeather}></Route>
        <Route path="/hourly-weather" component={HourlyWeather}></Route>
      </Switch>
    </Wrapper>
  </BrowserRouter>
);

export default AppRouter;
