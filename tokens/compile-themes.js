const { existsSync } = require("fs");
const { writeFile, mkdir } = require("fs/promises");
const { resolve } = require("path");
const tokens = require("./tokens.json");
const { transformTokens } = require("token-transformer");

const OUT_DIR = resolve(__dirname, "..", "src", "themes", "compiled");

async function compileThemes(themeName, tokenSets) {
  const outFile = resolve(OUT_DIR, `${themeName}.json`);
  const resolved = transformTokens(tokens, tokenSets);
  if (!existsSync(OUT_DIR)) {
    await mkdir(OUT_DIR);
  }
  await writeFile(outFile, JSON.stringify(resolved, null, 2));
}

// const generateVarFromFile = (filename) => {
//   const parts = filename.replace(".json", "").split(".");
//   const camelCasedParts = parts.map((part, i) => {
//     if (i !== 0) {
//       const [firstChar, ...rest] = part;
//       return `${firstChar.toUpperCase()}${rest.join("")}`;
//     }
//     return part;
//   });
//   return camelCasedParts.join("");
// };

// async function generateTypescriptTypeFile() {
//   const files = (await readdir(OUT_DIR)).filter((file) => file !== "index.ts");
//   const outFile = resolve(OUT_DIR, "index.ts");
//   const contents = `
// /**
//  * AUTO-GENERATED. Do not edit directly
//  */

// ${files
//   .map((file) => `import ${generateVarFromFile(file)} from "./${file}"`)
//   .join("\n")}

// export type TreeType = ${files
//     .map((file) => `typeof ${generateVarFromFile(file)}`)
//     .join(" | ")}
//   `;

//   await writeFile(outFile, contents);
// }

(async function () {
  // base theme
  await compileThemes("base", ["base"]);

  // color themes
  await compileThemes("light", ["base", "colors/semantic"]);
  await compileThemes("dark", ["base", "colors/semantic", "colors/dark"]);
  await compileThemes("highContrast", [
    "base",
    "colors/semantic",
    "colors/highContrast",
  ]);
  await compileThemes("highContrastDark", [
    "base",
    "colors/semantic",
    "colors/highContrast/dark",
  ]);

  // font themes
  await compileThemes("fonts", ["base", "fonts/semantic"]);
  await compileThemes("fontsLargeScreen", [
    "base",
    "fonts/semantic",
    "fonts/largeScreen",
  ]);
  await compileThemes("fontsSimple", [
    "base",
    "fonts/semantic",
    "fonts/simple",
  ]);
  await compileThemes("fontsLargeScreenSimple", [
    "base",
    "fonts/semantic",
    "fonts/largeScreen",
    "fonts/simple",
  ]);

  // generate the types of all these files
  // await generateTypescriptTypeFile();
})();
