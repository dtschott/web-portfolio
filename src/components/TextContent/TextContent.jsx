import styles from "./text_content.module.css";

export default function TextContent({ header, body, children, colorStyle }) {
  return (
    <div className={styles["text-content-container"]}>
      <h2 className={`${styles[colorStyle]} ${styles["header"]}`}>{header}</h2>
      <span className={`${styles[colorStyle]} ${styles["body"]}`}>{body}</span>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
}
