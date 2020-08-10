import React, { useContext } from "react";
// import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../assets/css/theme.css";
import { AuthContext } from "../context/AuthContext";
import { AuthProvider } from "../context/AuthContext";

const Nav = () => {
  const [menu, setMenu] = useContext(AuthContext);

  const visibleMenu = () => {
    setMenu(menu === "login" ? "logout" : "login");
  };

  return (
    <AuthProvider>
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
            <li style={{ display: menu === "logout" ? "none" : "" }}>
              <Link to="/movie-list">Movie List Editor</Link>
            </li>
            <li>
              <Link to="/auth" onClick={visibleMenu}>
                {menu === "login" ? "logout" : "login"}
              </Link>
            </li>
            {/* <li className="logout">
            <Link to="/auth">Signup</Link>
          </li> */}
          </ul>
        </nav>
      </header>
    </AuthProvider>
  );
};

export default Nav;
