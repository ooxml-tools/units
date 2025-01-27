import { ArgumentsCamelCase, Argv } from "yargs";
import { conversions, ConversionType, conversionTypes } from "./helper";

export const cmd = "convert <from> <to> <value>";
export const desc = `convert between units`;
export const builder = (yargs: Argv) => {
  yargs
    .positional("from", {
      type: "string",
      describe: "unit to convert from",
      choices: conversionTypes,
    })
    .positional("to", {
      type: "string",
      describe: "unit to convert to",
      choices: conversionTypes,
    })
    .positional("value", {
      type: "number",
      describe: "unit to convert",
    });
};
export async function handler({
  from,
  to,
  value,
}: ArgumentsCamelCase<{
  from: ConversionType;
  to: ConversionType;
  value: number;
}>) {
  const cmValue = conversions[from].toCm(value);
  const output = conversions[to].fromCm(cmValue);
  console.error(`${value}${from} => ${output}${to}`);
  console.log(output);
}
