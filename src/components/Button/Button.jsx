import "./button.css";

export default function Button({
  text,
  icon,
  iconAfter = false,
  color = "cyan",
  brand,
  onClick,
  styles,
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
      className={`button button-${color} ${buttonType}`}
      style={styles}
    >
      <span className="button-content-container">
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
