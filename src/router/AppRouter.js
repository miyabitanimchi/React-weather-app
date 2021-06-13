import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/home/Home";
import CurrentWeather from "../components/current/CurrentWeather";
import ForecastList from "../components/forecast/ForecastList";
import Wrapper from "../components/wrapper/Wrapper";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

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
