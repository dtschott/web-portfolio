import RowLogo from "../../assets/logos/Row.svg";
import ColumnLogo from "../../assets/logos/Column.svg";
import RowLogoInverted from "../../assets/logos/RowInverted.svg";
import ColumnLogoInverted from "../../assets/logos/ColumnInverted.svg";
import "./logo.css";

export default function Logo({ column, inverted, onClick, styles }) {
  const responsive = !column;

  const logo = column
    ? inverted
      ? ColumnLogoInverted
      : ColumnLogo
    : inverted
    ? RowLogoInverted
    : RowLogo;

  let containerClass = column ? "logo-column" : "logo-row";

  containerClass += onClick ? " logo-clickable" : "";

  containerClass += responsive ? " logo-responsive" : "";

  return (
    <div className={containerClass} {...styles} onClick={onClick}>
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
      {!responsive && <img src={logo}></img>}
    </div>
  );
}
