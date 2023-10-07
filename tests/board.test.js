import { Board } from "../src/board.js";

describe("Board", () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });

  test("initializes with correct values", () => {
    expect(board.rows).toBeNull();
    expect(board.columns).toBeNull();
    expect(board.isUpdated).toBe(false);
    expect(board.matrix).toEqual([]);
  });

  test("initializes with provided config", () => {
    const config = {
      rows: 3,
      columns: 3,
      matrix: ["x0x", "0x0", "x0x"],
    };
    board.init(config);
    expect(board.rows).toBe(3);
    expect(board.columns).toBe(3);
    expect(board.matrix).toEqual([
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ]);
  });

  test("_setMatrixValues sets matrix correctly", () => {
    const inputMatrix = ["0x", "x0"];
    board._setMatrixValues(inputMatrix);
    expect(board.matrix).toEqual([
      [0, 1],
      [1, 0],
    ]);
  });

  test("_countNeighborOfNode counts neighbors correctly", () => {
    board.init({
      rows: 3,
      columns: 3,
      matrix: ["x0x", "0x0", "x0x"],
    });
    const count = board._countNeighborOfNode(1, 1);
    expect(count).toBe(4);
  });

  test("nextGeneration generates the next state correctly", () => {
    board.init({
      rows: 3,
      columns: 3,
      matrix: ["x0x", "0x0", "x0x"],
    });
    board.nextGeneration();
    expect(board.matrix).toEqual([
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ]);
  });
});
