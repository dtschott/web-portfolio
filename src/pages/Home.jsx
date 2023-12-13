import Button from "../components/Button";
import InputField from "../components/InputField";
import Logo from "../components/Logo";
import Socials from "../components/Socials";

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Buttons</h1>
        <Button
          text="Text Only"
          color="navy"
          styles={{ padding: "0px 3rem", height: "3rem" }}
        />
        <Button text="Text Icon" icon="house" color="white" />
        <Button text="Icon After" icon="arrow-right" iconAfter />
        <Button icon="house" />
      </div>
      <div>
        <h1>InputFields</h1>
        <InputField placeholder="Your Email" required />
        <InputField placeholder="My Message" textarea />
        <InputField
          placeholder="Your Message"
          textarea
          required
          error="Error message!"
        />
        <InputField
          placeholder="Your Big Name"
          textarea
          styles={{ fontSize: "1.2rem", maxWidth: "20rem", maxHeight: "10rem" }}
        />
      </div>
      <div>
        <h1>Logos</h1>
        <Logo />
        <Logo inverted />
        <Logo column />
        <Logo column inverted />
      </div>
      <div>
        <h1>Socials</h1>
        <Socials />
        <Socials color="white" />
        <Socials color="navy" />
      </div>
    </>
  );
}
