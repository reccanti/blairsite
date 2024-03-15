const { existsSync } = require("fs");
const { writeFile, mkdir } = require("fs/promises");
const { resolve } = require("path");
const tokens = require("./tokens.json");
const { transformTokens } = require("token-transformer");

/**
 * The following Stackoverflow seems like it might be able to make a type-safe
 * tree-traversal function, but I can't get it working right now, so I'm using
 * any types for the tiime being:
 *
 * https://stackoverflow.com/a/61260820
 *
 * ~Blair 2/21/2024
 */

function visit(path, tree, cb) {
  cb(path, tree);
  if (typeof tree === "object" && tree !== null) {
    Object.entries(tree).forEach(([k, v]) => {
      visit([...path, k], v, cb);
    });
  }
}

function addToObjectAtPath(obj, path, value) {
  let cur = obj;
  const [key, ...pathToKey] = [...path.reverse()];
  pathToKey.reverse().forEach((p) => {
    if (!(p in cur)) {
      cur[p] = {};
    }
    cur = cur[p];
  });
  cur[key] = value;
}

// function convertToArray(arrayObj) {
//   if (Array.isArray(arrayObj)) {
//     return arrayObj;
//   } else if (typeof arrayObj === "object" && arrayObj !== null) {
//     const arr = Object.entries(arrayObj)
//       .map(([key, value]) => {
//         const k = Number(key);
//         if (Number.isNaN(k)) {
//           throw Error(`${key} cannot be converted into an array index`);
//         }
//         return [Number(key), value];
//       })
//       .sort((a, b) => a[0] - b[0])
//       .map(([_k, value]) => value);
//     return arr;
//   }
//   throw Error("Object could not be converted into an array");
// }

function createColors(tree) {
  const colors = {};
  visit([], tree, (path, node) => {
    if (
      typeof node === "object" &&
      node !== null &&
      "type" in node &&
      node.type === "color" &&
      "value" in node
    ) {
      addToObjectAtPath(colors, path, node.value);
    }
  });
  return colors;
}

function createBorders(tree) {
  const borders = {};
  visit([], tree, (path, node) => {
    if (
      typeof node === "object" &&
      node !== null &&
      "type" in node &&
      node.type === "border" &&
      "value" in node &&
      typeof node.value === "object" &&
      node.value !== null
    ) {
      const newValue = `${node.value.width}px ${node.value.style} ${node.value.color}`;
      addToObjectAtPath(borders, path, newValue);
    }
  });
  return borders;
}

function createBorderWidths(tree) {
  const borderWidths = {};
  visit([], tree, (path, node) => {
    if (
      typeof node === "object" &&
      node !== null &&
      "type" in node &&
      node.type === "borderWidth" &&
      "value" in node
    ) {
      const newValue = `${node.value}px`;
      addToObjectAtPath(borderWidths, path, newValue);
    }
  });
  return borderWidths;
}

function createBoxShadows(tree) {
  const boxShadows = {};
  visit([], tree, (path, node) => {
    if (
      typeof node === "object" &&
      node !== null &&
      "type" in node &&
      node.type === "boxShadow" &&
      "value" in node &&
      Array.isArray(node.value)
    ) {
      const shadows = node.value.map((shadow) => {
        const { x, y, blur, spread, color, type } = shadow;
        if (type === "innerShadow") {
          return `inset ${x}px ${y}px ${blur}px ${spread}px ${color}`;
        }
        return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
      });
      addToObjectAtPath(boxShadows, path, shadows.join(","));
    }
  });
  return boxShadows;
}

function createFontSizes(tree) {
  const fontSizes = {};
  visit([], tree, (path, node) => {
    if (
      typeof node === "object" &&
      node !== null &&
      "type" in node &&
      node.type === "fontSizes" &&
      "value" in node
    ) {
      addToObjectAtPath(fontSizes, path, node.value);
    }
  });
  return fontSizes;
}

function createFontFamilies(tree) {
  const fontFamilies = {};
  visit([], tree, (path, node) => {
    if (
      typeof node === "object" &&
      node !== null &&
      "type" in node &&
      node.type === "fontFamilies" &&
      "value" in node
    ) {
      addToObjectAtPath(fontFamilies, path, node.value);
    }
  });
  return fontFamilies;
}

function createLineHeights(tree) {
  const lineHeights = {};
  visit([], tree, (path, node) => {
    if (
      typeof node === "object" &&
      node !== null &&
      "type" in node &&
      node.type === "lineHeights" &&
      "value" in node
    ) {
      addToObjectAtPath(lineHeights, path, node.value);
    }
  });
  return lineHeights;
}

function createFontWeights(tree) {
  const fontWeights = {};
  visit([], tree, (path, node) => {
    if (
      typeof node === "object" &&
      node !== null &&
      "type" in node &&
      node.type === "fontWeights" &&
      "value" in node
    ) {
      addToObjectAtPath(fontWeights, path, node.value);
    }
  });
  return fontWeights;
}

const fmtFontFamily = (value) => (!!value ? ` ${value}` : "");
const fmtFontSize = (value) => (!!value ? ` ${value}` : "");
const fmtFontWeight = (value) =>
  !!value && value !== "Regular" ? ` ${value}` : "";
const fmtLineHeight = (value) => (!!value ? `/${value}` : "");
const fmtTextDecoration = (value) => (!!value ? value : "none");
const fmtTextCase = (value) => (!!value ? ` ${value}` : "");

function createTypographies(tree) {
  const typographies = {};
  visit([], tree, (path, node) => {
    if (
      typeof node === "object" &&
      node !== null &&
      "type" in node &&
      node.type === "typography" &&
      "value" in node &&
      typeof node.value === "object" &&
      node.value !== null
    ) {
      const {
        fontFamily,
        fontWeight,
        fontSize,
        textCase,
        lineHeight,
        textDecoration,
      } = node.value;

      const fontValue =
        fmtFontWeight(fontWeight) +
        fmtFontSize(fontSize) +
        fmtLineHeight(lineHeight) +
        fmtFontFamily(fontFamily);

      const textDecorationValue = fmtTextDecoration(textDecoration);
      const textTransformValue = fmtTextCase(textCase);

      const newValue = {
        font: fontValue.trim(),
        textDecoration: textDecorationValue.trim(),
        textTransform: textTransformValue.trim(),
      };
      addToObjectAtPath(typographies, path, newValue);
    }
  });

  return typographies;
}

function createSpacings(tree) {
  const spacings = {};
  visit([], tree, (path, node) => {
    if (
      typeof node === "object" &&
      node !== null &&
      "type" in node &&
      node.type === "spacing" &&
      "value" in node
    ) {
      addToObjectAtPath(spacings, path, node.value);
    }
  });
  return spacings;
}

function createThemeObject(tokens) {
  /**
   * Not a fan of this typing. I'm going to need to fix this.
   *
   * ~Blair 2/21/2024
   */
  const themeObj = {
    colors: createColors(tokens),
    borders: createBorders(tokens),
    borderWidths: createBorderWidths(tokens),
    boxShadows: createBoxShadows(tokens),
    fontSizes: createFontSizes(tokens),
    fontFamilies: createFontFamilies(tokens),
    fontWeights: createFontWeights(tokens),
    lineHeights: createLineHeights(tokens),
    typographies: createTypographies(tokens),
    spacing: createSpacings(tokens),
  };

  const newObj = {};
  for (const [k, v] of Object.entries(themeObj)) {
    if (typeof v === "object" && v !== null && Object.keys(v).length) {
      newObj[k] = { ...v };
    }
  }

  return newObj;
}

function createThemeContractObject(theme) {
  const contract = {};
  visit([], theme, (path, node) => {
    if (typeof node !== "object") {
      addToObjectAtPath(contract, path, null);
    }
  });
  return contract;
}

const OUT_DIR = resolve(__dirname, "..", "src", "tokens", "compiled");

function compileThemes(tokenSets) {
  const resolved = transformTokens(tokens, tokenSets);
  const formatted = createThemeObject(resolved);
  return formatted;
}

function compileThemeContracts(themeObj) {
  const formatted = createThemeContractObject(themeObj);
  return formatted;
}

async function writeThemeFile(fileName, contents) {
  const outFile = resolve(OUT_DIR, `${fileName}.json`);
  await writeFile(outFile, JSON.stringify(contents, null, 2));
}

(async function () {
  // base theme
  const baseTheme = compileThemes(["base"]);
  await writeThemeFile("base", baseTheme);

  // color themes
  const lightTheme = compileThemes(["base", "colors/semantic"]);
  await writeThemeFile("light", lightTheme);
  const darkTheme = compileThemes(["base", "colors/semantic", "colors/dark"]);
  await writeThemeFile("dark", darkTheme);
  const highContrastTheme = compileThemes([
    "base",
    "colors/semantic",
    "colors/highContrast",
  ]);
  await writeThemeFile("highContrast", highContrastTheme);
  const highContrastDarkTheme = compileThemes([
    "base",
    "colors/semantic",
    "colors/highContrast/dark",
  ]);
  await writeThemeFile("highContrastDark", highContrastDarkTheme);

  // color theme contract
  const colorThemeContract = compileThemeContracts(lightTheme);
  await writeThemeFile("colorThemeContract", colorThemeContract);

  // font themes
  const fontsTheme = compileThemes(["base", "fonts/semantic", "fonts/styled"]);
  await writeThemeFile("fonts", fontsTheme);
  const fontsPrintTheme = compileThemes([
    "base",
    "fonts/semantic",
    "fonts/styled",
    "fonts/print",
  ]);
  await writeThemeFile("fontsPrint", fontsPrintTheme);
  const fontsLargeScreenTheme = compileThemes([
    "base",
    "fonts/semantic",
    "fonts/styled",
    "fonts/largeScreens",
  ]);
  await writeThemeFile("fontsLargeScreen", fontsLargeScreenTheme);
  const fontsSimpleTheme = compileThemes(["base", "fonts/semantic"]);
  await writeThemeFile("fontsSimple", fontsSimpleTheme);
  const fontsLargeScreenSimpleTheme = compileThemes([
    "base",
    "fonts/semantic",
    "fonts/largeScreens",
  ]);
  await writeThemeFile("fontsLargeScreenSimple", fontsLargeScreenSimpleTheme);

  // font theme contract
  const fontThemeContract = compileThemeContracts(fontsTheme);
  await writeThemeFile("fontsThemeContract", fontThemeContract);
})();
