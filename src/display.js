import { Logger } from "./logger.js";

export class Display {
  icons = { dead: ".", live: "x" };

  constructor() {
    this.borderDrafts = [];
    this.logger = new Logger();
  }

  init(rows) {
    this.logger.init();
    this._setBorderDrafts(rows);
  }

  _setBorderDrafts(rows) {
    for (let i = 0; i < rows; i++) {
      const draft = this.logger.createDraft();
      this.borderDrafts.push(draft);
    }
  }

  print(board) {
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      const displayValue = row.reduce(
        (acc, cell) => acc + (cell ? this.icons.live : this.icons.dead),
        ""
      );
      this.borderDrafts[i](displayValue);
    }
  }
}
