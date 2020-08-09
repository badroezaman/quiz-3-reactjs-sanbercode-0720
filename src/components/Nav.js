import React from "react";
// import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../assets/css/theme.css";

const Nav = () => {
  return (
    <header>
      <img src={logo} width="200px" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/film">Film</Link>
          </li> */}
          <li className="login">
            <Link to="/movie-list">Movie List Editor</Link>
          </li>
          <li className="login">
            <Link to="/auth">Login</Link>
          </li>
          {/* <li className="logout">
            <Link to="/auth">Signup</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
