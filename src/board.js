export class Board {
  constructor() {
    this.rows = null;
    this.columns = null;
    this.isUpdated = false;
    this.matrix = [];
  }

  init(config) {
    const { rows, columns, matrix } = config;
    this.rows = rows;
    this.columns = columns;
    this._setMatrixValues(matrix);
  }

  _setMatrixValues(inputMatrix) {
    this.matrix = inputMatrix.map((row) =>
      row.split("").map((cell) => (cell === "x" ? 1 : 0))
    );
  }

  _countNeighborOfNode(r, c) {
    let counter = 0;
    for (let nr = r - 1; nr <= r + 1; nr++) {
      for (let nc = c - 1; nc <= c + 1; nc++) {
        if (nr < 0 || nr >= this.matrix.length) {
          continue;
        }

        if (nc < 0 || nc >= this.matrix[0].length) {
          continue;
        }

        if (nr === r && nc === c) {
          continue;
        }

        if (this.matrix[nr][nc]) {
          counter++;
        }
      }
    }

    return counter;
  }

  nextGeneration() {
    const matrixCopy = JSON.parse(JSON.stringify(this.matrix));

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        const count = this._countNeighborOfNode(i, j);

        if (this.matrix[i][j]) {
          if (count < 2 || count > 3) {
            matrixCopy[i][j] = 0;
            this.isUpdated = true;
          }
        } else {
          if (count === 3) {
            matrixCopy[i][j] = 1;
            this.isUpdated = true;
          }
        }
      }
    }
    this.matrix = matrixCopy;
  }
}
