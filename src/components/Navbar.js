import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/head.css"

const Navbar = () => {
  /**
   * @type {HTMLElement}
   */
  const sideNavRef = React.useRef();

  const toggleSideNav = () => {
    sideNavRef.current.classList.toggle("active");
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
