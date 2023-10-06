import { Game } from "./src/game.js";
import { readInputFile } from "./src/input.js";

(() => {
  const pathToFile = "./input.txt";
  const config = readInputFile(pathToFile);
  new Game().start(config);
})();
