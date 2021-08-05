import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Contactus from "./components/Contactus";
import Onlinefiling from "./components/Onlinefiling";
import Departments from "./components/Department";
import { useEffect } from "react";
import "./css/app.css";

const App = () => {
  useEffect(() => {
    let cacheTheme = window.localStorage.getItem("theme");

    if (cacheTheme) {
      let root = document.querySelector("#root");
      switch (cacheTheme) {
        case "dark-theme":
          root.classList.add("dark-theme");
          break;
        case "light-theme":
          root.classList.add("light-theme");
          break;
        default:
          root.classList.add("dark-theme");
          break;
      }
    } else {
      // dark theme by default
      window.localStorage.setItem("theme", "dark-theme");
      let root = document.querySelector("#root");
      root.classList.add("dark-theme");
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contact-us" component={Contactus} />
          <Route path="/online-filine" component={Onlinefiling} />
          <Route path="/departments" component={Departments} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
