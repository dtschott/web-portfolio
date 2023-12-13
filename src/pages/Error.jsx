import ContentSection from "../components/ContentSection";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  return (
    <>
      <Navbar />
      <ContentSection>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </ContentSection>
    </>
  );
}
