import { useRef } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import "../css/head.css";

const Navbar = () => {
  /**
   * @type {HTMLElement}
   */
  const sideNavRef = useRef();

  const toggleSideNav = () => {
    sideNavRef.current.classList.toggle("active");
  };

  return (
    <>
      <header>
        <div className="logo"></div>
        <nav className="navbar">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/contact-us" className="item">
            Contact Us
          </Link>
          <Link to="/online-filing" className="item">
            Online Filing
          </Link>
          <Link to="/register" className="item">
            Register
          </Link>
          <Link to="/login" className="item">
            Login
          </Link>
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
              <Link to="/">Home</Link>
            </li>
            <li className="sidenav-item">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="sidenav-item">
              <Link to="/online-filing">Online Filing</Link>
            </li>
            <li className="sidenav-item">
              <Link to="/register">Register</Link>
            </li>
            <li className="sidenav-item">
              <Link to="/login">Login</Link>
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
