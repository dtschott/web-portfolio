// Footer.jsx
import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Socials from "../Socials/Socials";
import styles from "./footer.module.css";

export default function Footer() {
  function handleEmailClick() {
    window.open("mailto:dtschott5@gmail.com", "_blank");
  }

  function handleLocationClick() {
    window.open("https://maps.app.goo.gl/NH64nJteQDCMVLqj7", "_blank");
  }

  return (
    <div className={styles.footer}>
      <div>
        <div className={styles["footer-top"]}>
          <Logo inverted column />
          <div className={styles["footer-buttons"]}>
            <Button
              text="dtschott5@gmail.com"
              icon="envelope"
              onClick={handleEmailClick}
              footer
            />
            <Button
              text="Fircrest, WA 98466"
              icon="location-dot"
              onClick={handleLocationClick}
              footer
            />
          </div>
        </div>
      </div>
      <Socials color="white" />
    </div>
  );
}
