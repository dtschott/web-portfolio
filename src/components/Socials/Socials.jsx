import React from "react";
import Button from "../Button/Button";
import IndeedWhite from "../../assets/other/indeed_white.svg";
import IndeedNavy from "../../assets/other/indeed_navy.svg";
import "./socials.css";

export default function Socials({ color, styles }) {
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
    }
    window.open(url, "_blank");
  }

  return (
    <div className="socials-container" style={styles}>
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
        <img src={indeedLogo} className="indeed-social-icon" />
      </Button>
    </div>
  );
}
