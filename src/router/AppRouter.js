import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import CurrentWeather from "../current/CurrentWeather";
import ForecastList from "../forecast/ForecastList";
import Wrapper from "../wrapper/Wrapper";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const AppRouter = () => (
  <BrowserRouter>
    <Wrapper>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true}></Route>
        <Route path="/current-weather" component={CurrentWeather}></Route>
        <Route path="/forecast" component={ForecastList}></Route>
      </Switch>
      <Footer />
    </Wrapper>
  </BrowserRouter>
);

export default AppRouter;
