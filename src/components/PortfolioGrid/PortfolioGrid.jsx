import { useState } from "react";
import Project from "../Project/Project";
import ProjectPopup from "../ProjectPopup/ProjectPopup";
import projectData from "../../../src/data/project_data.json";
import "./portfolio_grid.css";

const noPopup = <ProjectPopup open={false} />;

export default function PortfolioGrid() {
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

  return (
    <>
      <div id="portfolio-grid">
        {projectData.map((project, index) => (
          <Project
            key={index}
            onClick={() => handleProjectClick(project)}
            projectData={project}
          />
        ))}
      </div>
      {popup}
    </>
  );
}
