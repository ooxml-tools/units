<h1>
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://ooxml-tools.github.io/design/images/units-dark.png">
        <source media="(prefers-color-scheme: light)" srcset="https://ooxml-tools.github.io/design/images/units-light.png">
        <img alt="@ooxml-tools/units" height="56" src="https://ooxml-tools.github.io/design/images/units-light.png">
    </picture>
</h1>

Conversion for the strange and wonderful Office Open XML units

Supports conversion from `cm` to

- `twip`
- `dxa`
- `emu`
- `inch`

### DXA

From Ecma Office Open XML Part 1 - Fundamentals And Markup Language Reference.pdf (page 1503)

Specifies that the value for the measurement of the current table width property in the parent table shall be interpreted as twentieths of a point (1/1440 of an inch).

### Twips

From Ecma Office Open XML Part 1 - Fundamentals And Markup Language Reference.pdf (page 1587)

Units for window widths and other dimensions are expressed in twips. Twip measurements are portable between different display resolutions. The formula is (screen pixels) _ (20 _ 72) / (logical device dpi), where the logical device dpi can be different for x and y coordinates.

### EMU

From Ecma Office Open XML Part 1 - Fundamentals And Markup Language Reference.pdf (page 2728)

Throughout ECMA-376, the EMU is used as a unit of measurement for length. An EMU is defined as follows:

```
1 emu = 1/914400 US inch = 1/360000 cm
```

[Rationale: The EMU was created in order to be able to evenly divide in both English and Metric units, in order to avoid rounding errors during the calculation. The usage of EMUs also facilitates a more seamless system switch and interoperability between different locales utilizing different units of measurement. EMUs define an integer based, high precision coordinate system. end rationale]

## API

- `cmToTwip(number)`/`twipToCm(number)`
- `cmToDxa(number)`/`dxaToCm(number)`
- `cmToEmu(number)`/`emuToCm(number)`
- `cmToInch(number)`/`inchToCm(number)`
- `pointToDxa(number)`/`dxaToPoint(number)`
- `toOoDegree(number)`/`fromOoDegree(number)`

## CLI

```bash
npx @ooxml-tools/units --help
# ooxml-units <command> [args]
#
# Commands:
#   convert <from> <to> <value>  convert between units
#   list                         list valid formats
#
# Options:
#   --version  Show version number                                       [boolean]
#   --help     Show help                                                 [boolean]
#
# Examples:
#   ooxml-units convert <from> <to> <value>
```

## License

MIT
