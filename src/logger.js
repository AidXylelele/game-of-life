import DraftLog from "draftlog";

export class Logger {
  constructor() {
    this.util = DraftLog;
  }

  init() {
    this.util(console);
  }

  createDraft() {
    return console.draft();
  }
}
