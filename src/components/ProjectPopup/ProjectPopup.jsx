import "./project_popup.css";
import Button from "../Button/Button";

const body = document.getElementsByTagName("body")[0];

export default function ProjectPopup({ open, onClose }) {
  if (open) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }

  return (
    <div>
      <div className={`project-popup-container ${open ? "open" : ""}`}>
        <div className="overlay"></div>
        <div className="popup-content">
          <h1>Project Popup</h1>
          <h2>Subheading</h2>
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
