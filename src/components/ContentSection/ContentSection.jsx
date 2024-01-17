import "./content_section.css";

export default function ContentSection({ children, first, noConstraint }) {
  return (
    <div
      className={`content-section-container ${first ? "bg-gradient" : ""} ${
        noConstraint ? "no-constraint" : ""
      }`}
    >
      {children}
    </div>
  );
}
