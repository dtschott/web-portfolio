import React, { useState } from "react";
import styles from "./hamburger.module.css";
import { toggleScroll } from "./../../utils.js";

export default function Hamburger({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    toggleScroll();
    setMenuOpen((prevStatus) => !prevStatus);
  };

  return (
    <div className={styles["hamburger-menu"]}>
      <div className={styles["hamburger-container"]}>
        <i
          className={`fa-solid fa-bars ${styles.hamburger}`}
          onClick={toggleMenu}
        ></i>
        <div
          className={`${styles.menu} ${menuOpen ? styles.open : styles.closed}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
