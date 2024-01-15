// Navbar.jsx
import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";
import Button from "../Button/Button";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import "./navbar.css";
import ContactPopup from "../ContactPopup/ContactPopup";

export default function Navbar() {
  const [contactPopupOpen, setContactPopupOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  function handleLogoClick() {
    navigate("/");
  }

  function handleContactClick() {
    setContactPopupOpen(true);
  }

  function handleContactPopupClose() {
    setContactPopupOpen(false);
  }

  return (
    <>
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
              onClick={handleContactClick}
            />
            <Socials color="white" />
            <ul>
              <li className={location.pathname === "/about" ? "active" : ""}>
                <NavLink to="/about">About Me</NavLink>
              </li>
              <li
                className={location.pathname === "/portfolio" ? "active" : ""}
              >
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
            </ul>
          </Hamburger>
        </div>
      </div>
      <ContactPopup open={contactPopupOpen} onClose={handleContactPopupClose} />
    </>
  );
}
