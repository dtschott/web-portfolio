import styles from "./text_content.module.css";

export default function TextContent({ hero, header, body, children }) {
  return (
    <div className={styles["text-content-container"]}>
      {hero ? (
        <>
          <h2>Hello! I&apos;m</h2>
          <h1>Daniel Schott</h1>
          <div>
            I&apos;m a freelance web designer/developer who loves a challenge. I
            have a passion for building beautiful and easy-to-use websites that
            will help bring your ideas and products to life.
          </div>
        </>
      ) : (
        <>
          <h2>{header}</h2>
          <div>{body}</div>
        </>
      )}
      <div className={styles["children"]}>{children}</div>
    </div>
  );
}
