import "./project.css";

export default function Project({ projectData, onClick }) {
  projectData.thumbnailImage =
    "../../assets/project_thumbnails/" + projectData.thumbnailImage;

  return (
    <div className="project-container" onClick={() => onClick(projectData)}>
      <img src={projectData.thumbnailImage} />
      <h2>{projectData.name}</h2>
      <p>{projectData.shortDescription}</p>
    </div>
  );
}
