import styles from "./content_section.module.css";

const ContentSection = ({ children, first, noConstraint }) => {
  return (
    <div
      className={`${styles["content-section-container"]} ${
        first ? styles["bg-gradient"] : ""
      } ${noConstraint ? styles["no-constraint"] : ""}`}
    >
      {children}
    </div>
  );
};

export default ContentSection;
