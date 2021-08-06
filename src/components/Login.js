import React from "react";
import "../css/login.scss";

const Login = () => {
  return (
    <div className="wrapper">
      <form className="login">
        <p className="title">Login</p>
        <input type="text" placeholder="Email" autoFocus />
        <i className="fa fa-user"></i>
        <input type="password" placeholder="Password" />
        <i className="fa fa-key"></i>
        <a href="#">Forgot your password?</a>
        <button>
          <i className="spinner"></i>
          <span className="state">Log In</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
