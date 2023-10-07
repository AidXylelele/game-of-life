import fs from "fs";
import { readInputFile } from "../src/input";

jest.mock("fs");

describe("readInputFile function", () => {
  const pathToFile = "../input.txt";
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("reads and parses valid input file correctly", () => {
    const mockData = "3\n4 5\n.x.x\nx.x.\n.x.x\nx.x.\n.x.x";
    fs.readFileSync.mockReturnValueOnce(mockData);

    const result = readInputFile(pathToFile);

    expect(result).toEqual({
      rows: 5,
      columns: 4,
      generations: 3,
      matrix: [".x.x", "x.x.", ".x.x", "x.x.", ".x.x"],
    });
  });

  it("throws an error for invalid input file with incorrect row count", () => {
    const mockData = "3 4 2\n0101\n1010\n";
    fs.readFileSync.mockReturnValueOnce(mockData);

    expect(() => {
      readInputFile("invalidInput.txt");
    }).toThrow("Invalid input!");
  });

  it("throws an error for invalid input file with incorrect column count", () => {
    const mockData = "3 4 3\n0101\n1010\n01\n";
    fs.readFileSync.mockReturnValueOnce(mockData);

    expect(() => {
      readInputFile("invalidInput.txt");
    }).toThrow("Invalid input!");
  });

  it("throws an error for invalid input file with inconsistent column count", () => {
    const mockData = "3 4 3\n0101\n1010\n01010\n";
    fs.readFileSync.mockReturnValueOnce(mockData);

    expect(() => {
      readInputFile("invalidInput.txt");
    }).toThrow("Invalid input!");
  });
});
