import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  let history = useHistory();

  return (
    <div className="navbar__top">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" />
      </div>
      <nav>
        <NavLink
          to="/#home"
          className={history.location.hash === "#home" ? "active" : ""}
        >
          Home
        </NavLink>
        <NavLink
          to="/#about"
          className={history.location.hash === "#about" ? "active" : ""}
        >
          About
        </NavLink>
        <NavLink
          to="/#app"
          className={history.location.hash === "#app" ? "active" : ""}
        >
          App
        </NavLink>
        <NavLink
          to="/#info"
          className={history.location.hash === "#info" ? "active" : ""}
        >
          Info
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
