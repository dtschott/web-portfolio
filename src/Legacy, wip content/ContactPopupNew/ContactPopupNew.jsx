import "./contact_popup_new.css";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

const body = document.getElementsByTagName("body")[0];

export default function ContactPopupNew({ open, onClose }) {
  if (open) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }

  return (
    <div>
      <div className={`contact-popup-container ${open ? "open" : ""}`}>
        <div className="overlay"></div>
        <div className="popup-content">
          <h1>Contact Me</h1>
          <div className="small-inputs-container">
            <InputField
              placeholder="First Name"
              containerClassName="small-input-container"
              inputClassName="small-input"
            />
            <InputField
              placeholder="Last Name"
              containerClassName="small-input-container"
              inputClassName="small-input"
            />
            <InputField
              placeholder="Email Address"
              required
              containerClassName="small-input-container"
              inputClassName="small-input"
            />
            <InputField
              placeholder="Subject"
              required
              containerClassName="small-input-container"
              inputClassName="small-input"
            />
          </div>
          <InputField
            textarea
            placeholder="
          Your message..."
            required
            containerClassName="large-input-container"
            inputClassName="large-input"
          />
          <Button text="Send" color="navy" icon="paper-plane" />
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
