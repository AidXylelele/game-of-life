import { Board } from "./board.js";
import { Display } from "./display.js";

export class Game {
  constructor() {
    this.board = new Board();
    this.display = new Display();
  }

  _init(config) {
    this.display.init(config.rows);
    this.board.init(config);
  }

  start(config) {
    this._init(config);
    this.display.print(this.board.matrix);
    const interval = setInterval(() => {
      config.generations -= 1;
      this.board.nextGeneration();
      if (!this.board.isUpdated || !config.generations) {
        clearInterval(interval);
      }
      this.display.print(this.board.matrix);
    }, 300);
  }
}
