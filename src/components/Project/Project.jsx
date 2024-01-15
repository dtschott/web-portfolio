import "./project.css";
import SampleImage from "./../../assets/project_thumbnails/Project_Img_Ex1.png";

export default function Project({
  name,
  shortDescription,
  longDescription,
  thumbnailImage,
  url,
  gitHub,
  onClick,
}) {
  return (
    <div
      className="project-container"
      onClick={() =>
        onClick(
          name,
          shortDescription,
          longDescription,
          thumbnailImage,
          url,
          gitHub
        )
      }
    >
      <img src={SampleImage} />
      <h2>Rubicon Dog</h2>
      <p>Full website rework in Shopify</p>
    </div>
  );
}
