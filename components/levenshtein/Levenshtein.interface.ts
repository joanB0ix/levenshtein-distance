export interface ILevenshtein {
  stringOne: string;
  stringTwo: string;
}

export enum CellState {
  NOT_RESULT,
  RESULT,
  FINAL,
}

export interface ILevenshteinAlgorithmValue {
  value: number;
  state: CellState;
}
