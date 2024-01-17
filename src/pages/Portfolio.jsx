import ContentSection from "../components/ContentSection/ContentSection";
import PortfolioGrid from "../components/PortfolioGrid/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <>
      <ContentSection first noConstraint>
        <PortfolioGrid />
      </ContentSection>
    </>
  );
}
