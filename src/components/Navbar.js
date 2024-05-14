import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/cuppy/logo.png";
import "../stylesheets/Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav_left">
            <div>
                <img src={logo} />
            </div>
        </div>
        <div className="nav_right">
                <ul className="nav_links">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/musics">
                        Music
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                    <NavLink to="/contact">
                        Newsletter
                    </NavLink>
                </ul>
        </div>  
      </nav>
    </div>
  );
};

export default Navbar;
