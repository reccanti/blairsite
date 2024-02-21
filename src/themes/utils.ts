/**
 * The following Stackoverflow seems like it might be able to make a type-safe
 * tree-traversal function, but I can't get it working right now, so I'm using
 * any types for the tiime being:
 *
 * https://stackoverflow.com/a/61260820
 *
 * ~Blair 2/21/2024
 */

function visit(
  path: string[],
  tree: any,
  cb: (path: string[], tree: any) => void
) {
  cb(path, tree);
  if (typeof tree === "object" && tree !== null) {
    Object.entries(tree).forEach(([k, v]) => {
      visit([...path, k], v, cb);
    });
  }
}

function addToObjectAtPath<T>(
  obj: Record<string, any>,
  path: string[],
  value: T
) {
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

function createColors(tree: any) {
  const colors: Record<string, any> = {};
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

function createBorders(tree: any) {
  const borders: Record<string, any> = {};
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

function createBorderWidths(tree: any) {
  const borderWidths: Record<string, any> = {};
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

function createBoxShadows(tree: any) {
  const boxShadows: Record<string, any> = {};
  visit([], tree, (path, node) => {
    if (
      typeof node === "object" &&
      node !== null &&
      "type" in node &&
      node.type === "boxShadow" &&
      "value" in node &&
      Array.isArray(node.value)
    ) {
      const shadows = node.value.map((shadow: any) => {
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

function createFontSizes(tree: any) {
  const fontSizes: Record<string, any> = {};
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

function createFontFamilies(tree: any) {
  const fontFamilies: Record<string, any> = {};
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

function createLineHeights(tree: any) {
  const lineHeights: Record<string, any> = {};
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

function createFontWeights(tree: any) {
  const fontWeights: Record<string, any> = {};
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

const fmtFontFamily = (value: string) => (!!value ? ` ${value}` : "");
const fmtFontSize = (value: string) => (!!value ? ` ${value}` : "");
const fmtFontWeight = (value: string) => (!!value ? ` ${value}` : "");
const fmtLineHeight = (value: string) => (!!value ? `/${value}` : "");
const fmtTextDecoration = (value: string) => (!!value ? value : "none");
const fmtTextCase = (value: string) => (!!value ? ` ${value}` : "");

function createTypographies(tree: any) {
  const typographies: Record<string, any> = {};
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
      const {
        fontFamily,
        fontWeight,
        fontSize,
        textCase,
        lineHeight,
        textDecoration,
      } = node.value;

      const fontValue =
        fmtTextCase(textCase) +
        fmtFontWeight(fontWeight) +
        fmtFontSize(fontSize) +
        fmtLineHeight(lineHeight) +
        fmtFontFamily(fontFamily);

      const textDecorationValue = fmtTextDecoration(textDecoration);
      const newValue = { font: fontValue, textDecoration: textDecorationValue };
      addToObjectAtPath(typographies, path, newValue);
    }
  });

  return typographies;
}

function createSpacings(tree: any) {
  const spacings: Record<string, any> = {};
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

export function createTheme<T extends object>(themeObj: T) {
  return {
    colors: createColors(themeObj),
    borders: createBorders(themeObj),
    borderWidths: createBorderWidths(themeObj),
    boxShadows: createBoxShadows(themeObj),
    fontSizes: createFontSizes(themeObj),
    fontFamilies: createFontFamilies(themeObj),
    fontWeights: createFontWeights(themeObj),
    lineHeights: createLineHeights(themeObj),
    typographies: createTypographies(themeObj),
    spacing: createSpacings(themeObj),
  };
}
