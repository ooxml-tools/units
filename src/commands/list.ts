import { Argv } from "yargs";
import { conversionTypes } from "./helper";

export const cmd = "list";
export const desc = `list valid formats`;
export const builder = (yargs: Argv) => {
  yargs;
};
export async function handler() {
  console.log(conversionTypes.join("\n"));
}
