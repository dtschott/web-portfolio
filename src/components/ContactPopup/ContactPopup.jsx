import React, { useState, useEffect } from "react";
import styles from "./contact_popup.module.css";
import Button from "../Button/Button";
import Socials from "../Socials/Socials";

const body = document.getElementsByTagName("body")[0];
const isMobileDevice =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

export default function ContactPopup({ open, onClose }) {
  const [isSMSError, setIsSMSError] = useState(false);

  useEffect(() => {
    if (open) {
      body.classList.add(styles["no-scroll"]);
    } else {
      body.classList.remove(styles["no-scroll"]);
    }

    return () => {
      body.classList.remove(styles["no-scroll"]);
    };
  }, [open]);

  function copyToClipboard() {
    navigator.clipboard.writeText("2533247247");
  }

  return (
    <div>
      <div
        className={`${styles["contact-popup-container"]} ${
          open ? styles.open : ""
        }`}
      >
        <div className={styles.overlay}></div>
        <div className={styles["popup-content"]}>
          <h1>Contact Me</h1>
          <h2>*Email or text preferred</h2>
          <div className={styles["contact-buttons"]}>
            <Button
              icon="envelope"
              text="dtschott5@gmail.com"
              onClick={() => {
                window.open("mailto:dtschott5@gmail.com", "_blank");
              }}
              color="navy"
            />
            <Button
              icon="phone"
              text="(253) 324-7247"
              onClick={() => {
                if (isMobileDevice) {
                  window.open("sms:+12533247247");
                } else {
                  setIsSMSError(true);
                  copyToClipboard();
                }
              }}
              color="navy"
            />
            <strong
              className={`${styles.error} ${
                isSMSError ? styles["display-error"] : ""
              }`}
            >
              Copied phone number to clipboard.
            </strong>
            <Socials color="navy" />
          </div>
          <Button
            icon="x"
            className={styles["close-button"]}
            onClick={onClose}
            color="navy"
          />
        </div>
      </div>
    </div>
  );
}
