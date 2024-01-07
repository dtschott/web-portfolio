import Button from "../components/Button/Button";
import InputField from "../components/InputField/InputField";
import Logo from "../components/Logo/Logo";
import Socials from "../components/Socials/Socials";
import TextContent from "../components/TextContent/TextContent";
import ContentSection from "../components/ContentSection/ContentSection";
import PortraitImage from "./../assets/photos/Portrait_Image.png";
import PortraitImageClose from "./../assets/photos/Portrait_Image_Close.png";

export default function HomePage() {
  return (
    <>
      <ContentSection>
        <TextContent hero>
          <Button
            text="Let's Talk"
            styles={{ fontSize: "1.25rem", height: "3rem" }}
          />
        </TextContent>
        <picture>
          <source
            media="(min-width:768px)"
            srcSet={PortraitImage}
            className="portrait-img"
          />
          <img src={PortraitImageClose} className="portrait-img" />
        </picture>
      </ContentSection>
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
