// Navbar.jsx
import React from "react";
import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";
import Button from "../Button/Button";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogoClick() {
    navigate("/");
  }

  function handleContactClick() {
    window.open("mailto:dtschott5@gmail.com", "_blank");
  }

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Logo inverted onClick={handleLogoClick} />
      </div>
      <div className="nav-menu">
        <ul className="nav-links">
          <li className={location.pathname === "/about" ? "active" : ""}>
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li className={location.pathname === "/portfolio" ? "active" : ""}>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
        <Socials color="white" styles={{ marginRight: "2vw" }} />
        <Button
          color="white"
          text="Contact Me"
          onClick={handleContactClick}
          styles={{ height: "3rem", fontSize: "1.15rem", fontWeight: "600" }}
        />
      </div>
      <div className="hamburger-menu">
        <Hamburger>
          <Button
            color="white"
            text="Contact Me"
            styles={{
              height: "4rem",
              padding: "0 4rem",
              fontSize: "1.25rem",
              fontWeight: "600",
            }}
          />
          <Socials color="white" />
          <ul>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li className={location.pathname === "/portfolio" ? "active" : ""}>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
          </ul>
        </Hamburger>
      </div>
    </div>
  );
}
