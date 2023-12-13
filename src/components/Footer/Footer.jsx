import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Socials from "../Socials/Socials";
import "./footer.css";

export default function Footer() {
  function handleEmailClick() {
    window.open("mailto:dtschott5@gmail.com", "_blank");
  }

  function handleLocationClick() {
    window.open("https://maps.app.goo.gl/NH64nJteQDCMVLqj7", "_blank");
  }

  return (
    <div className="footer">
      <div>
        <div className="footer-top">
          <Logo inverted column />
          <div className="footer-buttons">
            <Button
              text="dtschott5@gmail.com"
              icon="envelope"
              styles={{ backgroundColor: "transparent", boxShadow: "none" }}
              onClick={handleEmailClick}
            />
            <Button
              text="Fircrest, WA 98466"
              icon="location-dot"
              styles={{ backgroundColor: "transparent", boxShadow: "none" }}
              onClick={handleLocationClick}
            />
          </div>
        </div>
      </div>
      <Socials color="white" />
    </div>
  );
}
