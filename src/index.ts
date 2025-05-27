export function cmToTwip(cm: number) {
  const inches = cmToInch(cm);
  return Math.round(inches * 72 * 20);
}

export function twipToCm(input: number) {
  return inchToCm(input / 20 / 72);
}

// =============

export function cmToDxa(cm: number) {
  return cmToTwip(cm);
}

export function dxaToCm(input: number) {
  return twipToCm(input);
}

// =============

export function cmToEmu(cm: number) {
  const inches = cmToInch(cm);
  return Math.round(inches * 914400);
}

export function emuToCm(emu: number) {
  return inchToCm(emu / 914400);
}

// =============

export function cmToInch(input: number) {
  return input / 2.54;
}

export function inchToCm(input: number) {
  return input * 2.54;
}

// =============

export function pointToDxa(input: number) {
  return input * 20;
}

export function dxaToPoint(input: number) {
  return input / 20;
}

// =============

export function degreeToOoDegree(degrees: number) {
  return Math.round(degrees * 60000);
}

export function ooDegreeToDegree(degrees: number) {
  return degrees / 60000;
}

// =============

const CAPITAL_A = "A".charCodeAt(0);

// Adapted from <https://github.com/exceljs/exceljs/issues/95#issuecomment-224336065>
export function cartesianToExcelCoords([col, row]: [number, number]) {
  let colStr = '';

  while(col > 0) {
      colStr = String.fromCharCode(CAPITAL_A+(col - 1) % 26) + colStr;
      col = Math.floor((col - 1) / 26);
  }

  return colStr + row;
}

// Adapted from <https://github.com/exceljs/exceljs/issues/95#issuecomment-224336065>
export function excelToCartesianCoords(excelCoords: string) {
  const match = excelCoords.match(/^([A-Z]+)(\d+)/);
  if (!match) {
    throw new Error(`Invalid coord: "${excelCoords}"`);
  }
  const row = Number(match[2]);
  const colChars = match[1]!.split('').reverse();

  let col = 0;
  let multiplier = 1;

  while(colChars.length) {
    const item = colChars.shift();
    if (item) {
      col += (item.charCodeAt(0) - CAPITAL_A + 1) * multiplier;
      multiplier *= 26;
    }
  }

  return [col, row];
}
