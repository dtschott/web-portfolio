import React from "react";
import Button from "../Button/Button";
import IndeedWhite from "/assets/other/indeed_white.svg";
import IndeedNavy from "/assets/other/indeed_navy.svg";
import styles from "./socials.module.css";

export default function Socials({ color, styles: customStyles }) {
  let indeedLogo = IndeedWhite;
  if (color === "white") {
    indeedLogo = IndeedNavy;
  }

  function handleIconClick(icon) {
    let url = "";
    switch (icon) {
      case "github":
        url = "https://github.com/dtschott";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/daniel-schott-598414264/";
        break;
      case "indeed":
        url = "https://profile.indeed.com/p/daniels-5w0krqg";
        break;
      default:
        break;
    }
    window.open(url, "_blank");
  }

  return (
    <div className={styles["socials-container"]} style={customStyles}>
      <Button
        brand
        icon="github"
        onClick={() => handleIconClick("github")}
        color={color}
      />
      <Button
        brand
        icon="linkedin-in"
        onClick={() => handleIconClick("linkedin")}
        color={color}
      />
      <Button onClick={() => handleIconClick("indeed")} color={color}>
        <img
          src={indeedLogo}
          className={styles["indeed-social-icon"]}
          alt="Indeed Logo"
        />
      </Button>
    </div>
  );
}
