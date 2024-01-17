import React, { useEffect, useState } from "react";
import styles from "./inputField.module.css";

export default function InputField({
  placeholder,
  type,
  required,
  textarea,
  error,
  onChange,
  styles: customStyles,
  containerClassName,
  inputClassName,
}) {
  const [errorMessage, setErrorMessage] = useState(error);

  useEffect(() => {
    // Update errorStatus when the error prop changes
    setErrorMessage(error);
  }, [error]);

  function handleInputChange(newValue) {
    setErrorMessage("");
    onChange(newValue);
  }

  let commonProps = {
    placeholder: required ? `${placeholder} *` : placeholder,
    type,
    style: customStyles,
    onInput: (e) => handleInputChange(e.target.value),
  };

  const commonClassNames = `${errorMessage ? styles.error : ""} ${
    inputClassName ? inputClassName : ""
  } ${styles["input-field"]}`;

  return (
    <>
      <div
        className={`${styles["input-field-container"]} ${containerClassName}`}
      >
        {!textarea && <input {...commonProps} className={commonClassNames} />}
        {textarea && <textarea {...commonProps} className={commonClassNames} />}
      </div>
      {errorMessage && (
        <div className={styles["input-error-msg"]}>{errorMessage}</div>
      )}
    </>
  );
}
