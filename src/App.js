import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Contactus from "./components/Contactus";
import Onlinefiling from "./components/Onlinefiling";
import Departments from "./components/Department";
import { ThemeProvider } from "./hooks/useTheme";
import { AuthGuard } from "./hooks/useAuth";
import "./css/app.css";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <AuthGuard>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/contact-us" component={Contactus} />
              <Route path="/online-filing" component={Onlinefiling} />
              <Route path="/departments" component={Departments} />
            </Switch>
          </BrowserRouter>
        </AuthGuard>
      </ThemeProvider>
    </>
  );
};
export default App;
