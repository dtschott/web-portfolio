import styles from "./content_section.module.css";

const ContentSection = ({ children, colorStyle, inverted }) => {
  return (
    <div
      className={`${styles["content-section"]} ${styles[colorStyle]} ${
        inverted ? styles["inverted"] : ""
      }`}
    >
      {children}
    </div>
  );
};

export default ContentSection;
