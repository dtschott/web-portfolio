import styles from "./photo_gallery.module.css";

let thumbnailPath = "/assets/project_thumbnails/";

export default function PhotoGallery({ arrangement, photos }) {
  return (
    <div className={styles["photo-gallery"]}>
      <img className={styles["photo-1"]} src={thumbnailPath + photos[0]} />
      <img className={styles["photo-2"]} src={thumbnailPath + photos[1]} />
      <img className={styles["photo-3"]} src={thumbnailPath + photos[2]} />
    </div>
  );
}
