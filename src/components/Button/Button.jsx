import styles from "./button.module.css";

export default function Button({
  text,
  icon,
  iconAfter = false,
  color,
  brand,
  onClick,
  styles: customStyles,
  className,
  footer,
  children,
}) {
  let buttonType = "text";

  if (text && icon) {
    buttonType = "text-icon";
  } else if (!text) {
    buttonType = "icon";
  }

  return (
    <button
      onClick={onClick}
      className={`${styles["button"]} ${
        color ? styles[`button-${color}`] : ""
      } ${styles[buttonType]} ${footer ? styles["footer"] : ""} ${className}`}
      style={customStyles}
    >
      <span className={styles["button-content-container"]}>
        {!children && !iconAfter && icon && (
          <span>
            <i className={`${brand ? "fa-brands" : "fa-solid"} fa-${icon}`}></i>
          </span>
        )}
        {!children && text && <span>{text}</span>}
        {!children && iconAfter && icon && (
          <span>
            <i className={`solo-icon fa-solid fa-${icon}`}></i>
          </span>
        )}
        {children}
      </span>
    </button>
  );
}
