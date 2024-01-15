import "./contact_popup.css";
import Button from "../Button/Button";
import Socials from "../Socials/Socials";
import { useState } from "react";

const body = document.getElementsByTagName("body")[0];
const isMobileDevice =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

export default function ContactPopup({ open, onClose }) {
  const [isSMSError, setIsSMSError] = useState(false);

  if (open) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }

  function copyToClipboard() {
    navigator.clipboard.writeText("2533247247");
  }

  return (
    <div>
      <div className={`contact-popup-container ${open ? "open" : ""}`}>
        <div className="overlay"></div>
        <div className="popup-content">
          <h1>Contact Me</h1>
          <h2>*Email or text preferred</h2>
          <div className="contact-buttons">
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
            <strong className={`error ${isSMSError ? "display-error" : ""}`}>
              Copied phone number to clipboard.
            </strong>
            <Socials color="navy" />
          </div>
          <Button
            icon="x"
            className="close-button"
            onClick={onClose}
            color="navy"
          />
        </div>
      </div>
    </div>
  );
}
