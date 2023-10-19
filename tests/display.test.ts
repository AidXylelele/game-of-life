import { Display } from "../src/display.js";
import { Logger } from "../src/logger.js";

describe("Display", () => {
  let display;

  beforeEach(() => {
    display = new Display();
  });

  describe("Initialization", () => {
    it("should initialize the borderDrafts array as empty", () => {
      expect(display.borderDrafts).toEqual({});
    });

    it("should initialize the logger instance", () => {
      expect(display.logger).toBeInstanceOf(Logger);
    });
  });
});
