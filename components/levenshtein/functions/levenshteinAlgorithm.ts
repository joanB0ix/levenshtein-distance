import { CellState, ILevenshteinAlgorithmValue } from "../Levenshtein.interface";

export const LevenshteinAlgorithm = (stringOne: string, stringTwo: string) => {
  stringOne = stringOne.toLowerCase();
  stringTwo = stringTwo.toLowerCase();
  let result: ILevenshteinAlgorithmValue[][] = Array.from(
    Array(stringOne.length + 1),
    () => new Array(stringTwo.length + 1)
  );

  let i, j, cost;

  for (i = 0; i <= stringOne.length; i++) {
    result[i][0] = {
      state: CellState.NOT_RESULT,
      value: i,
    };
  }

  for (j = 0; j <= stringTwo.length; j++) {
    result[0][j] = {
      state: CellState.NOT_RESULT,
      value: j,
    };
  }

  for (i = 1; i <= stringOne.length; i++) {
    for (j = 1; j <= stringTwo.length; j++) {
      cost = stringOne[i - 1] == stringTwo[j - 1];
      result[i][j] = {
        state: CellState.NOT_RESULT,
        value: Math.min(
          result[i - 1][j].value + 1,
          result[i][j - 1].value + 1,
          result[i - 1][j - 1].value + (cost ? 0 : 1)
        ),
      };
    }
  }

  for (i = stringOne.length; i >= 0; i--) {
    for (j = stringTwo.length; j >= 0; j--) {
      if (i == stringOne.length && j == stringTwo.length) {
        result[i][j].state = CellState.FINAL;
      }
      if (result[i][j].state == CellState.FINAL || result[i][j].state == CellState.RESULT) {
        if (i > 0 && j > 0) {
          if (
            result[i - 1][j - 1].value <= result[i][j - 1].value &&
            result[i - 1][j - 1].value <= result[i - 1][j].value
          ) {
            result[i - 1][j - 1].state = CellState.RESULT;
          } else if (
            result[i - 1][j].value <= result[i][j - 1].value &&
            result[i - 1][j].value <= result[i - 1][j - 1].value
          ) {
            result[i - 1][j].state = CellState.RESULT;
          } else if (
            result[i][j - 1].value <= result[i - 1][j].value &&
            result[i][j - 1].value <= result[i - 1][j - 1].value
          ) {
            result[i][j - 1].state = CellState.RESULT;
          }
        } else if (i == 0 && j > 0) {
          result[i][j - 1].state = CellState.RESULT;
        } else if (j == 0 && i > 0) {
          result[i - 1][j].state = CellState.RESULT;
        }
      }
    }
  }

  result[0][0].state = CellState.RESULT;

  return result;
};
