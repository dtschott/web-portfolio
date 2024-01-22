import HeroSection from "../components/HeroSection/HeroSection";
import ContentSection from "../components/ContentSection/ContentSection";
import TextContent from "../components/TextContent/TextContent";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContentSection colorStyle="light">
        <PhotoGallery />
        <TextContent
          header="About Me"
          body="I live in Tacoma, WA.  live in Tacoma, WA.  live in Tacoma, WA. "
          colorStyle="light"
        />
      </ContentSection>
      <ContentSection colorStyle="dark">
        <TextContent
          header="About Me"
          body="I live in Tacoma, WA.  live in Tacoma, WA.  live in Tacoma, WA. "
          colorStyle="dark"
        />
        <div></div>
      </ContentSection>
    </>
  );
}
