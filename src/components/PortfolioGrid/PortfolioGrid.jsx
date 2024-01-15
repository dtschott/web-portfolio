import { useState } from "react";
import Project from "../Project/Project";
import ProjectPopup from "../ProjectPopup/ProjectPopup";
import ProjectExampleThumbnail from "../../assets/project_thumbnails/Project_Img_Ex1.png";
import "./portfolio_grid.css";

const noPopup = <ProjectPopup open={false} />;

export default function PortfolioGrid({ projects }) {
  const [popup, setPopup] = useState(noPopup);

  function handleProjectClick(projectData) {
    setPopup(
      <ProjectPopup
        open={true}
        onClose={() => setPopup(noPopup)}
        {...projectData}
      />
    );
  }

  return (
    <>
      <div id="portfolio-grid">
        <Project
          onClick={handleProjectClick}
          name="Rubicon Dog"
          shortDescription="Full website build in Shopify"
          longDescription="This is the long description for my Rubicon Dog project. Fill in sample text, Fill in sample text, Fill in sample text. Fill in sample text, Fill in sample text."
          thumbnailImage={ProjectExampleThumbnail}
          url="www.google.com"
          gitHub=""
        />
        <Project
          onClick={handleProjectClick}
          name="Rubicon Dog"
          shortDescription="Full website build in Shopify"
          longDescription="This is the long description for my Rubicon Dog project. Fill in sample text, Fill in sample text, Fill in sample text. Fill in sample text, Fill in sample text."
          thumbnailImage={ProjectExampleThumbnail}
          url="www.google.com"
          gitHub=""
        />
      </div>
      {popup}
    </>
  );
}
