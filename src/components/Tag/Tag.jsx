import styles from "./tag.module.css";

export default function Tag({ tagName }) {
  return <div className={styles["tag"]}>{tagName}</div>;
}
