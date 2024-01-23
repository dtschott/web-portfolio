import HeroSection from "../components/HeroSection/HeroSection";
import ContentSection from "../components/ContentSection/ContentSection";
import TextContent from "../components/TextContent/TextContent";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";

export default function HomePage() {
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
        />
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
