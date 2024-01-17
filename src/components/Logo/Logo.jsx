import React from "react";
import RowLogo from "/assets/logos/Row.svg";
import ColumnLogo from "/assets/logos/Column.svg";
import RowLogoInverted from "/assets/logos/RowInverted.svg";
import ColumnLogoInverted from "/assets/logos/ColumnInverted.svg";
import styles from "./logo.module.css";

export default function Logo({
  column,
  inverted,
  onClick,
  styles: customStyles,
}) {
  const responsive = !column;

  const logo = column
    ? inverted
      ? ColumnLogoInverted
      : ColumnLogo
    : inverted
    ? RowLogoInverted
    : RowLogo;

  let containerClass = column ? styles["logo-column"] : styles["logo-row"];

  containerClass += onClick ? ` ${styles["logo-clickable"]}` : "";
  containerClass += responsive ? ` ${styles["logo-responsive"]}` : "";

  return (
    <div className={containerClass} style={customStyles} onClick={onClick}>
      {responsive && !inverted && (
        <picture>
          <source
            srcSet={ColumnLogo}
            media="(min-width: 768px) and (max-width: 1023px)"
          />
          <img src={RowLogo} alt="Logo" />
        </picture>
      )}
      {responsive && inverted && (
        <picture>
          <source
            srcSet={ColumnLogoInverted}
            media="(min-width: 768px) and (max-width: 1023px)"
          />
          <img src={RowLogoInverted} alt="Logo" />
        </picture>
      )}
      {!responsive && <img src={logo} alt="Logo" />}
    </div>
  );
}
