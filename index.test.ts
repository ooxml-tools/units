import { cmToDxa, cmToEmu, cmToInch, cmToTwip, degreeToOoxmlDegree, ooxmlDegreeToDegree } from "index";
import {expect, test} from "vitest";

test("cmToTwip", () => {
    expect(cmToTwip(1)).toEqual(567);
    expect(cmToTwip(0)).toEqual(0);
    expect(cmToTwip(-1)).toEqual(-567);
    expect(cmToTwip(1.4)).toEqual(794);
    expect(cmToTwip(-1.4)).toEqual(-794);
})

test("cmToDxa", () => {
    // expect(cmToDxa(1)).toEqual(567);
    // expect(cmToDxa(0)).toEqual(0);
    // expect(cmToDxa(-1)).toEqual(-567);
    // expect(cmToDxa(1.4)).toEqual(794);
    // expect(cmToDxa(-1.4)).toEqual(-794);
})

test("cmToEmu", () => {
    expect(cmToEmu(1)).toEqual(360000);
    expect(cmToEmu(0)).toEqual(0);
    expect(cmToEmu(-1)).toEqual(-360000);
    expect(cmToEmu(1.4)).toEqual(504000);
    expect(cmToEmu(-1.4)).toEqual(-504000);
})

test("cmToInch", () => {
    expect(cmToInch(1)).toBeCloseTo(0.3937);
    expect(cmToInch(0)).toEqual(0);
    expect(cmToInch(-1)).toBeCloseTo(-0.3937);
    expect(cmToInch(1.4)).toBeCloseTo(0.5511);
    expect(cmToInch(-1.4)).toBeCloseTo(-0.5511);
})

test("degreeToOoxmlDegree", () => {
    expect(degreeToOoxmlDegree(1)).toBeCloseTo(60000);
    expect(degreeToOoxmlDegree(0)).toEqual(0);
    expect(degreeToOoxmlDegree(-1)).toBeCloseTo(-60000);
    expect(degreeToOoxmlDegree(1.4)).toBeCloseTo(84000);
    expect(degreeToOoxmlDegree(-1.4)).toBeCloseTo(-84000);
})

test("pointToDxa", () => {
    
})
