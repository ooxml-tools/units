import {
  cmToDxa,
  cmToEmu,
  cmToInch,
  cmToTwip,
  dxaToCm,
  emuToCm,
  inchToCm,
  twipToCm,
} from "..";
import { ArgumentsCamelCase, Argv } from "yargs";

const noop = (v: number) => v;
const conversions = {
  twip: {
    toCm: twipToCm,
    fromCm: cmToTwip,
  },
  dxa: {
    toCm: dxaToCm,
    fromCm: cmToDxa,
  },
  emu: {
    toCm: emuToCm,
    fromCm: cmToEmu,
  },
  inch: {
    toCm: inchToCm,
    fromCm: cmToInch,
  },
  cm: {
    toCm: noop,
    fromCm: noop,
  },
} as const;

const conversionTypes = Object.keys(conversions);

export type ConversionType = keyof typeof conversions;

export { conversions, conversionTypes };
