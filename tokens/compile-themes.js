const { writeFile, readdir } = require("fs/promises");
const { resolve } = require("path");
const tokens = require("./tokens.json");
const { transformTokens } = require("token-transformer");

const OUT_DIR = resolve(__dirname, "..", "src", "themes", "compiled");

async function compileThemes(themeName, tokenSets) {
  const outFile = resolve(OUT_DIR, `${themeName}.json`);
  const resolved = transformTokens(tokens, tokenSets);
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

  // normal layouts on small screens
  await compileThemes("light", [
    "base",
    "fonts/semantic",
    "fonts/styled",
    "colors/semantic",
  ]);
  await compileThemes("dark", [
    "base",
    "fonts/semantic",
    "fonts/styled",
    "colors/dark",
  ]);
  await compileThemes("highContrast", [
    "base",
    "fonts/semantic",
    "fonts/styled",
    "colors/highContrast",
  ]);
  await compileThemes("highContrast.dark", [
    "base",
    "fonts/semantic",
    "fonts/styled",
    "colors/highContrast/dark",
  ]);

  // simple layouts on small screens
  await compileThemes("light.simple", [
    "base",
    "fonts/semantic",
    "colors/semantic",
  ]);
  await compileThemes("dark.simple", ["base", "fonts/semantic", "colors/dark"]);
  await compileThemes("highContrast.simple", [
    "base",
    "fonts/semantic",
    "colors/highContrast",
  ]);
  await compileThemes("highContrast.dark.simple", [
    "base",
    "fonts/semantic",
    "colors/highContrast/dark",
  ]);

  // normal layouts on large screens
  await compileThemes("light.largeScreen", [
    "base",
    "fonts/semantic",
    "fonts/styled",
    "fonts/largeScreen",
    "colors/semantic",
  ]);
  await compileThemes("dark.largeScreen", [
    "base",
    "fonts/semantic",
    "fonts/styled",
    "fonts/largeScreen",
    "colors/dark",
  ]);
  await compileThemes("highContrast.simple", [
    "base",
    "fonts/semantic",
    "fonts/styled",
    "fonts/largeScreen",
    "colors/highContrast",
  ]);
  await compileThemes("highContrast.dark.simple", [
    "base",
    "fonts/semantic",
    "fonts/styled",
    "fonts/largeScreen",
    "colors/highContrast/dark",
  ]);

  // simple layouts on large screens
  await compileThemes("light.simple.largeScreen", [
    "base",
    "fonts/semantic",
    "fonts/largeScreen",
    "colors/semantic",
  ]);
  await compileThemes("dark.simple.largeScreen", [
    "base",
    "fonts/semantic",
    "fonts/largeScreen",
    "colors/dark",
  ]);
  await compileThemes("highContrast.simple.largeScreen", [
    "base",
    "fonts/semantic",
    "fonts/styled",
    "fonts/largeScreen",
    "colors/highContrast",
  ]);
  await compileThemes("highContrast.dark.simple.largeScreen", [
    "base",
    "fonts/semantic",
    "fonts/styled",
    "fonts/largeScreen",
    "colors/highContrast/dark",
  ]);

  // generate the types of all these files
  // await generateTypescriptTypeFile();
})();
