import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
<<<<<<< HEAD
import "../cssfile/headcss.css";
=======
import "../css/head.css";
>>>>>>> c85a3a4569574f61f5d7c8d05ee48a97442d4047

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="menu">
            <a href="/Home" className="opt">
              Home
            </a>
            <a href="/Contactus" className="opt">
              Contactus
            </a>
            <a href="/Onlinefiling" className="opt">
              Onlinefiling
            </a>
            <a href="/Register" className="opt">
              Registration
            </a>
            <a href="/Login" className="opt">
              Login
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
