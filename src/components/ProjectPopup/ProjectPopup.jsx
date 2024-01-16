import "./project_popup.css";
import Button from "../Button/Button";
import Tag from "../Tag/Tag";

const body = document.getElementsByTagName("body")[0];

export default function ProjectPopup({ projectData, open, onClose }) {
  let fileLocation = "";
  if (projectData) {
    fileLocation = projectData.fileName
      ? "/assets/project_files/" + projectData.fileName
      : "";
  }

  if (open) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }

  function download(fileLocation) {
    const a = document.createElement("a");
    a.href = fileLocation;
    a.download = fileLocation.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  if (projectData)
    return (
      <div>
        <div className={`project-popup-container ${open ? "open" : ""}`}>
          <div className="overlay"></div>
          <div className="popup-content">
            <img src={projectData.thumbnailImage} className="project-image" />
            <h1>{projectData.name}</h1>
            <div className="project-description">
              {projectData.longDescription}
            </div>
            <Button
              icon="x"
              className="close-button"
              onClick={onClose}
              color="navy"
            />
            <em>Primary technologies/languages:</em>
            <div className="tags">
              {projectData.tags.map((tagName) => (
                <Tag tagName={tagName} key={tagName} />
              ))}
            </div>
            <div className="link-buttons">
              {projectData.url && (
                <Button
                  text="Website"
                  icon="globe"
                  color="navy"
                  onClick={() => window.open(projectData.url, "_blank")}
                />
              )}
              {projectData.fileName && (
                <Button
                  text="Download File(s)"
                  icon="download"
                  color="navy"
                  onClick={() => download(fileLocation)}
                />
              )}
              {projectData.gitHub && (
                <Button
                  text="Source Code"
                  icon="github"
                  brand
                  color="navy"
                  onClick={() => window.open(projectData.url, "_blank")}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
