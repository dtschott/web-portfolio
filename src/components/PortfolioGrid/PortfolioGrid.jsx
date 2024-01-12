import Project from "../Project/Project";
import "./portfolio_grid.css";

export default function PortfolioGrid({ projects }) {
  return (
    <div id="portfolio-grid">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}
