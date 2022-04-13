import { Input } from "../common/input/Input";
import { IPrompt } from "./Prompt.interface";

import styles from "./Prompt.module.scss";

const Prompt = ({ setStringOne, setStringTwo }: IPrompt) => {
  return (
    <div className={styles.container}>
      <span>
        What is the <b>Levenshtein Distance</b> between
      </span>
      <Input placeholder="word 1" handleOnChange={setStringOne} />
      <span>and</span>
      <Input placeholder="word 2" handleOnChange={setStringTwo} />
    </div>
  );
};

export default Prompt;
