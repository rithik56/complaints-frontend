import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "../css/head.css";

const Navbar = () => {
  /**
   * @type {HTMLElement}
   */
  const sideNavRef = useRef();
  const toggleTheme = useTheme();
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"));

  const toggleSideNav = () => {
    sideNavRef.current.classList.toggle("active");
  };

  const changeTheme = () => {
    setTheme(toggleTheme());
  };

  return (
    <>
      <header>
        <div className="logo"></div>
        <nav className="navbar">
          <NavLink to="/" className="item">
            Home
          </NavLink>
          <NavLink to="/contact-us" className="item">
            Contact Us
          </NavLink>
          <NavLink to="/online-filing" className="item">
            Online Filing
          </NavLink>
          <NavLink to="/register" className="item">
            Register
          </NavLink>
          <NavLink to="/login" className="item">
            Login
          </NavLink>
          <NavLink to="#" className="item" onClick={changeTheme}>
            {theme === "dark-theme" ? (
              <svg
                className="icon sun"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="icon moon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </NavLink>
        </nav>
        <nav id="sidenav" ref={sideNavRef}>
          <div className="close-icon" onClick={toggleSideNav}>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul>
            <li className="sidenav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to="/online-filing">Online Filing</NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to="/register">Register</NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to="#" className="item" onClick={changeTheme}>
                {theme === "dark-theme" ? (
                  <svg
                    className="icon sun"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="icon moon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
        <span className="menu-burger" onClick={toggleSideNav}>
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
      </header>
    </>
  );
};

export default Navbar;
