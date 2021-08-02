import React from 'react'
import { NavLink } from 'react-router-dom'
import '../cssfile/headcss.css'

const Navbar = () => {
    return (
        <> 
      <header>
       
          <nav>
          <div className="menu">
          
            <a href="/Home" className="opt">Home</a>
            <a href="/Contactus" className="opt">Contactus</a>
            <a href="/Onlinefiling" className="opt">Onlinefiling</a>
            <a href="/Register" className="opt">Registration</a>
            <a href="/Login" className="opt">Login</a>
            </div>
            
          </nav>
       
      </header>

        </>
    )
}

export default Navbar

