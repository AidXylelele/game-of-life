import { Display } from "../src/display";
import { Logger } from "../src/logger";

describe("Display", () => {
  let display;

  beforeEach(() => {
    display = new Display();
  });

  describe("Initialization", () => {
    it("should initialize the borderDrafts array as empty", () => {
      expect(display.borderDrafts).toEqual([]);
    });

    it("should initialize the logger instance", () => {
      expect(display.logger).toBeInstanceOf(Logger);
    });
  });

  describe("init", () => {
    it("should initialize borderDrafts with drafts based on the number of rows", () => {
      display.init(3);
      expect(display.borderDrafts.length).toBe(3);
    });
  });
});
