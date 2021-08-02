import React from "react";
import { Route, Switch } from "react-router-dom";

import "./css/app.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Contactus from "./components/Contactus";
import Onlinefiling from "./components/Onlinefiling";
import Departments from "./components/Department";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/contact-us" component={Contactus} />
      <Route path="/online-filine" component={Onlinefiling} />
      <Route path="/departments" component={Departments} />
    </Switch>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routing />
    </>
  );
};
export default App;
