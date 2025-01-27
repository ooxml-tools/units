#!/usr/bin/env ./node_modules/.bin/tsx
import yargs from "yargs/yargs";
import * as commands from "../src/commands";

const scriptName = "ooxml-units";

yargs(process.argv.slice(2))
  .usage(`${scriptName} <command> [args]`)
  // HACK to remove script-name from commands
  .scriptName("")
  .example([[`${scriptName} convert <from> <to> <value>`]])
  .command(
    commands.convert.cmd,
    commands.convert.desc,
    commands.convert.builder,
    commands.convert.handler,
  )
  .command(
    commands.list.cmd,
    commands.list.desc,
    commands.list.builder,
    commands.list.handler,
  )
  .demand(1)
  .help().argv;
