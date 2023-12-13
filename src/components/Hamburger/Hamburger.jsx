import React, { useState } from "react";
import "./hamburger.css";

export default function Hamburger({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger-container">
      <i className="fa-solid fa-bars hamburger" onClick={toggleMenu}></i>
      <div className={`menu ${menuOpen ? "open" : "closed"}`}>{children}</div>
    </div>
  );
}
