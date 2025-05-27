import {
  cartesianToExcelCoords,
  cmToDxa,
  cmToEmu,
  cmToInch,
  cmToTwip,
  degreeToOoDegree,
  dxaToCm,
  emuToCm,
  excelToCartesianCoords,
  inchToCm,
  ooDegreeToDegree,
  twipToCm,
} from "./";
import { describe, expect, it } from "vitest";

const DATA = {
  twip: [
    [1, 567],
    [0, 0],
    [-1, -567],
    [1.4, 794],
    [-1.4, -794],
  ],
  ooDegree: [
    [1, 60000],
    [0, 0],
    [-1, -60000],
    [1.4, 84000],
    [-1.4, -84000],
  ],
  emu: [
    [1, 360000],
    [0, 0],
    [-1, -360000],
    [1.4, 504000],
    [-1.4, -504000],
  ],
  inch: [
    [1, 0.3937],
    [0, 0],
    [-1, -0.3937],
    [1.4, 0.5511],
    [-1.4, -0.5511],
  ],
  excel: [
    [[1, 1], "A1"],
    [[27, 1], "AA1"],
    [[18278, 100001], "ZZZ100001"],
  ] as [[number, number], string][]
} as const;

describe("cmToTwip(number): number", () => {
  for (const [initial, expected] of DATA.twip) {
    it(`cmToTwip(${initial}) ≈ ${expected}`, () => {
      expect(cmToTwip(initial)).toBeCloseTo(expected);
    });
  }
});

describe("twipToCm(number): number", () => {
  for (const [initial, expected] of DATA.twip) {
    it(`twipToCm(${expected}) ≈ ${initial}`, () => {
      expect(twipToCm(expected)).toBeCloseTo(initial);
    });
  }
});

describe("cmToDxa(number): number", () => {
  for (const [initial, expected] of DATA.twip) {
    it(`cmToDxa(${initial}) ≈ ${expected}`, () => {
      expect(cmToDxa(initial)).toBeCloseTo(expected);
    });
  }
});

describe("dxaToCm(number): number", () => {
  for (const [initial, expected] of DATA.twip) {
    it(`dxaToCm(${expected}) ≈ ${initial}`, () => {
      expect(dxaToCm(expected)).toBeCloseTo(initial);
    });
  }
});

describe("cmToInch(number): number", () => {
  for (const [initial, expected] of DATA.inch) {
    it(`cmToInch(${initial}) ≈ ${expected}`, () => {
      expect(cmToInch(initial)).toBeCloseTo(expected);
    });
  }
});

describe("inchToCm(number): number", () => {
  for (const [initial, expected] of DATA.inch) {
    it(`inchToCm(${expected}) ≈ ${initial}`, () => {
      expect(inchToCm(expected)).toBeCloseTo(initial);
    });
  }
});

describe("cmToEmu(number): number", () => {
  for (const [initial, expected] of DATA.emu) {
    it(`cmToEmu(${initial}) ≈ ${expected}`, () => {
      expect(cmToEmu(initial)).toBeCloseTo(expected);
    });
  }
});

describe("emuToCm(number): number", () => {
  for (const [initial, expected] of DATA.emu) {
    it(`emuToCm(${expected}) ≈ ${initial}`, () => {
      expect(emuToCm(expected)).toBeCloseTo(initial);
    });
  }
});

describe("degreeToOoxmlDegree(number): number", () => {
  for (const [initial, expected] of DATA.ooDegree) {
    it(`degreeToOoxmlDegree(${initial}) ≈ ${expected}`, () => {
      expect(degreeToOoDegree(initial)).toBeCloseTo(expected);
    });
  }
});

describe("ooxmlDegreeToDegree(number): number", () => {
  for (const [initial, expected] of DATA.ooDegree) {
    it(`ooxmlDegreeToDegree(${expected}) ≈ ${initial}`, () => {
      expect(ooDegreeToDegree(expected)).toBeCloseTo(initial);
    });
  }
});

describe("cartesianToExcelCoords(row, col): number", () => {
  for (const [initial, expected] of DATA.excel) {
    it(`cartesianToExcelCoords(${JSON.stringify(initial)}) ≈ ${JSON.stringify(expected)}`, () => {
      expect(cartesianToExcelCoords(initial)).toEqual(expected);
    });
  }
});

describe("excelToCartesianCoords(excelCoord): number", () => {
  for (const [initial, expected] of DATA.excel) {
    it(`cartesianToExcelCoords(${JSON.stringify(expected)}) ≈ ${JSON.stringify(initial)}`, () => {
      expect(excelToCartesianCoords(expected)).toEqual(initial);
    });
  }
});

describe("excelToCartesianCoords(excelCoord) throws when invalid", () => {
  it(`cartesianToExcelCoords("a1")`, () => {
    expect(() => excelToCartesianCoords("a1")).toThrow(`Invalid coord: "a1"`);
  });
});
