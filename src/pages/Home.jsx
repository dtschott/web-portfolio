import HeroSection from "../components/HeroSection/HeroSection";
import ContentSection from "../components/ContentSection/ContentSection";
import TextContent from "../components/TextContent/TextContent";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const portfolioFileID = "14JPOT3cqd9ATq1mIJbMfCvSrUy18FR_3";

const portfolioDownloadLink =
  "https://drive.google.com/uc?export=download&id=" + portfolioFileID;

export default function HomePage() {
  const navigate = useNavigate();

  function handleResumeDownload() {
    window.open(portfolioDownloadLink, "_blank");
  }

  function handleAboutClick() {
    navigate("/about");
  }

  return (
    <>
      <HeroSection />
      <ContentSection colorStyle="light">
        <PhotoGallery
          photos={[
            "task-tracker-kanban_thumbnail.png",
            "rubicon-dog_thumbnail.png",
            "investment-calculator_thumbnail.png",
          ]}
        />
        <TextContent
          header="About Me"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, quis aliquet nisl nunc quis nisl."
          colorStyle="light"
        >
          <div className="content-button-container">
            <Button
              text="My Resume"
              icon="download"
              iconAfter
              color="blue"
              onClick={handleResumeDownload}
            />
            <Button
              text="Learn More"
              icon="arrow-right"
              iconAfter
              onClick={handleAboutClick}
            />
          </div>
        </TextContent>
      </ContentSection>
      <ContentSection colorStyle="dark">
        <PhotoGallery
          photos={[
            "task-tracker-kanban_thumbnail.png",
            "rubicon-dog_thumbnail.png",
            "investment-calculator_thumbnail.png",
          ]}
        />
        <TextContent
          header="My Work"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, quis aliquet nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, quis aliquet nisl nunc quis nisl."
          colorStyle="dark"
        />
      </ContentSection>
    </>
  );
}
