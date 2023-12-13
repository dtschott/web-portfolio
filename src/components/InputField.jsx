import React, { useEffect, useState } from "react";

export default function InputField({
  placeholder,
  type,
  required,
  textarea,
  error,
  onChange,
  styles,
}) {
  const [errorMessage, setErrorMessage] = useState(error);

  useEffect(() => {
    // Update errorStatus when the error prop changes
    setErrorMessage(error);
  }, [error]);

  function handleEmailChange(newEmail) {
    setErrorMessage("");
    onChange(newEmail);
  }

  let commonProps = {
    placeholder: required ? placeholder + "*" : placeholder,
    type,
    style: styles,
    onInput: (e) => handleEmailChange(e.target.value),
  };

  const commonClassNames = `${errorMessage ? "error" : ""} input-field`;

  return (
    <>
      <div className="input-field-container">
        {!textarea && <input {...commonProps} className={commonClassNames} />}
        {textarea && <textarea {...commonProps} className={commonClassNames} />}
      </div>
      {errorMessage && <div className="input-error-msg">{errorMessage}</div>}
    </>
  );
}
