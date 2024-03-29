import { useRef } from "react";
import { useAuth } from "../hooks/useAuth";
import "../css/login.scss";

const Login = ({ history }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setAuth } = useAuth();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("/auth/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      let json = await res.json();
      if (res.status === 200) {
        window.localStorage.setItem("token", json.token);
        setAuth(true);
        history.push("/online-filing");
      } else {
        window.alert(json.error);
        // todo: ask user to try again instead of an alert.
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
        <form className="login">
        <p className="title">Login</p>
        <input ref={emailRef} type="text" placeholder="Email" autoFocus />
        <i className="fa fa-user"></i>
        <input ref={passwordRef} type="password" placeholder="Password" />
        <i className="fa fa-key"></i>
        <a href="#">Forgot your password?</a>
        <button onClick={onLogin}>
          <i className="spinner"></i>
          <span className="state">Log In</span>
        </button>
      </form>
    </div>
  );
};
export default Login;
