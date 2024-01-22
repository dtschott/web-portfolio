import React from "react";
import Button from "../Button/Button";
import PortraitImage from "/assets/photos/Portrait_Image.png";
import PortraitImageClose from "/assets/photos/Portrait_Image_Close.png";
import styles from "./hero_section.module.css";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  function handleNavigatePortfolio() {
    navigate("/portfolio");
  }

  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-header"]}>
        <h2>Hello, I&apos;m</h2>
        <h1>Daniel Schott</h1>
        <div className={styles["description"]}>
          I&apos;m a freelance web designer/developer who loves a challenge. I
          have a passion for building beautiful and easy-to-use websites that
          will help bring your ideas and products to life.
        </div>
        <Button
          text="My Work"
          icon="arrow-right"
          iconAfter
          className="hero-cta"
          onClick={handleNavigatePortfolio}
        />
      </div>
      <div className={styles["portrait-img-container"]}>
        <picture>
          <source
            media="(min-width:768px)"
            srcSet={PortraitImage}
            className={styles["portrait-img"]}
          />
          <img src={PortraitImageClose} className={styles["portrait-img"]} />
        </picture>
      </div>
    </div>
  );
}
