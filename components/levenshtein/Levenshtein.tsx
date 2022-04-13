//Interface
import { useEffect, useState } from "react";
import { LevenshteinAlgorithm } from "./functions/levenshteinAlgorithm";
import { CellState, ILevenshtein, ILevenshteinAlgorithmValue } from "./Levenshtein.interface";

//Styles
import styles from "./Levenshtein.module.scss";

const Levenshtein = ({ stringOne, stringTwo }: ILevenshtein) => {
  const [result, setResult] = useState<ILevenshteinAlgorithmValue[][] | null>(null);

  useEffect(() => {
    setResult(LevenshteinAlgorithm(stringOne, stringTwo));
  }, [stringOne, stringTwo]);

  const getCellStyle = (cell: ILevenshteinAlgorithmValue) => {
    if (cell.state == CellState.NOT_RESULT) {
      return styles.notResult;
    } else if (cell.state == CellState.RESULT) {
      return styles.path;
    } else {
      return styles.answer;
    }
  };

  return (
    <div className={styles.container}>
      {result && (
        <table>
          <thead>
            <tr>
              <th></th>
              {Array.from(" " + stringOne).map((c, i) => {
                return <th key={c + i}>{c}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {Array.from(" " + stringTwo).map((c1, i) => {
              return (
                <tr>
                  <th>{c1}</th>
                  {Array.from(stringOne + " ").map((c, j) => {
                    if (result[j] && result[j][i]) {
                      return (
                        <td className={getCellStyle(result[j][i])} key={c + i + j}>
                          {result[j][i].value}
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Levenshtein;
