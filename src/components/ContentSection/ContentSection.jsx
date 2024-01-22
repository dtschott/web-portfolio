import styles from "./content_section.module.css";

const ContentSection = ({ children, colorStyle }) => {
  return (
    <div className={`${styles["content-section"]} ${styles[colorStyle]}`}>
      {children}
    </div>
  );
};

export default ContentSection;
