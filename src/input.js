import fs from "fs";

export const readInputFile = (filePath) => {
  const data = fs.readFileSync(filePath, "utf8");

  const [generations, columns, rows] = data.match(/\d+/g).map(Number);

  const matrix = data.split("\n").slice(2);

  const isValidRowsCount = rows === matrix.length;

  const isValidColumnsCount = matrix.every(
    (row) => row.length === columns
  );

  if (!isValidColumnsCount || !isValidRowsCount) {
    throw new Error("Invalid input!");
  }
  return {
    rows,
    columns,
    generations,
    matrix,
  };
};
