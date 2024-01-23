import styles from "./photo_gallery.module.css";
import photoLayout1 from "./photo_layout_1.module.css";

//Photolayout2 isn't in use yet; may not need it
import photoLayout2 from "./photo_layout_2.module.css";

let thumbnailPath = "/assets/project_thumbnails/";

export default function PhotoGallery({ photos, photoLayout, inverted }) {
  let photoLayoutStyles;

  if (photoLayout === "1") {
    photoLayoutStyles = photoLayout1;
  } else if (photoLayout === "2") {
    photoLayoutStyles = photoLayout2;
  }

  return (
    <div
      className={`${styles["photo-gallery"]} ${
        inverted ? styles["inverted"] : ""
      }`}
    >
      <img
        className={`${styles["photo-1"]} ${
          photoLayoutStyles && photoLayoutStyles["photo-1"]
        } ${inverted && photoLayoutStyles && photoLayoutStyles["inverted"]}`}
        src={thumbnailPath + photos[0]}
      />
      <img
        className={`${styles["photo-2"]} ${
          photoLayoutStyles && photoLayoutStyles["photo-2"]
        } ${inverted && photoLayoutStyles && photoLayoutStyles["inverted"]}`}
        src={thumbnailPath + photos[1]}
      />
      <img
        className={`${styles["photo-3"]} ${
          photoLayoutStyles && photoLayoutStyles["photo-3"]
        } ${inverted && photoLayoutStyles && photoLayoutStyles["inverted"]}`}
        src={thumbnailPath + photos[2]}
      />
    </div>
  );
}
