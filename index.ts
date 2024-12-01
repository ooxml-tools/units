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

export function ooxmlDegreeToDegree(degrees: number) {
    return degrees / 60000;
}

export function degreeToOoxmlDegree(degrees: number) {
    return Math.round(degrees * 60000);
}

// =============

export function pointToDxa(input: number) {
    return input * 20;
}

export function dxaToPoint(input: number) {
    return input / 20;
}

// =============

export function lineHeightToDxa(pointHeight: number, multiplier: number) {
    return Math.round(pointToDxa(pointHeight) * multiplier);
}
