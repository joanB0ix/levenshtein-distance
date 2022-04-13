//Styling
import styles from "./Input.module.scss";

//Interface
import { IInput } from "./Input.interface";

export const Input = ({ placeholder, handleOnChange }: IInput) => {
  return (
    <span
      contentEditable
      spellCheck={false}
      data-placeholder={placeholder}
      onInput={(e) => handleOnChange(e.currentTarget.textContent ? e.currentTarget.textContent : "")}
      className={styles.container}
    />
  );
};
