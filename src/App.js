import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Contactus from "./components/Contactus";
import Onlinefiling from "./components/Onlinefiling";
import Departments from "./components/Department";
import { ThemeProvider } from "./hooks/useTheme";
import "./css/app.css";

const App = () => {
  return (
    <>
      <ThemeProvider>
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
      </ThemeProvider>
    </>
  );
};
export default App;
