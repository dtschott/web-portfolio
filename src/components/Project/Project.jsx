import "./project.css";
import SampleImage from "./../../assets/project_thumbnails/Project_Img_Ex1.png";

export default function Project() {
  return (
    <div className="project-container">
      <img src={SampleImage} />
      <h2>Rubicon Dog</h2>
      <p>Full website rework in Shopify</p>
    </div>
  );
}
