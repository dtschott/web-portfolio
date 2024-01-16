import { useState } from "react";
import Project from "../Project/Project";
import ProjectPopup from "../ProjectPopup/ProjectPopup";
import "./portfolio_grid.css";

const noPopup = <ProjectPopup open={false} />;

export default function PortfolioGrid({ projects }) {
  const [popup, setPopup] = useState(noPopup);

  function handleProjectClick(projectData) {
    setPopup(
      <ProjectPopup
        open={true}
        onClose={() => setPopup(noPopup)}
        projectData={projectData}
      />
    );
  }

  const sampleProjectData1 = {
    name: "Rubicon Dog",
    shortDescription: "Full website build in Shopify",
    longDescription:
      "This is the long description for my Rubicon Dog project. Fill in sample text, Fill in sample text, Fill in sample text. Fill in sample text, Fill in sample text.",
    thumbnailImage: "Project_Img_Ex1.png",
    tags: ["Shopify", "CSS", "JavaScript"],
    url: "https://www.example.com",
    gitHub: "https://www.example.com",
    fileName: "",
  };

  const sampleProjectData2 = {
    name: "Example 2",
    shortDescription: "Random made up project",
    longDescription:
      "This is the long description for my random made up project. Fill in sample text, Fill in sample text, Fill in sample text. Fill in sample text, Fill in sample text.",
    thumbnailImage: "Project_Img_Ex1.png",
    tags: ["Random Tag", "Responsive Design", "Nice"],
    url: "",
    gitHub: "",
    fileName: "Rock.png",
  };
  return (
    <>
      <div id="portfolio-grid">
        <Project
          onClick={handleProjectClick}
          projectData={sampleProjectData1}
        />
        <Project
          onClick={handleProjectClick}
          projectData={sampleProjectData2}
        />
      </div>
      {popup}
    </>
  );
}
