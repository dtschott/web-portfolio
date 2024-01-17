import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";
import Button from "../Button/Button";
import Hamburger from "../Hamburger/Hamburger";
import styles from "./navbar.module.css";
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
      <div className={styles["nav-container"]}>
        <div className={styles["nav-logo"]}>
          <Logo inverted onClick={handleLogoClick} />
        </div>
        <div className={styles["nav-menu"]}>
          <ul className={styles["nav-links"]}>
            <li className={location.pathname === "/about" ? styles.active : ""}>
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li
              className={
                location.pathname === "/portfolio" ? styles.active : ""
              }
            >
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
            <li className={location.pathname === "/about" ? styles.active : ""}>
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li
              className={
                location.pathname === "/portfolio" ? styles.active : ""
              }
            >
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
          </ul>
        </Hamburger>
      </div>
      <ContactPopup open={contactPopupOpen} onClose={handleContactPopupClose} />
    </>
  );
}
