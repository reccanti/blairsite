const { writeFile } = require("fs/promises");
const { resolve } = require("path");
const tokens = require("./tokens.json");
const { transformTokens } = require("token-transformer");

async function compileThemes(themeName, tokenSets) {
  const outFile = resolve(
    __dirname,
    "..",
    "src",
    "themes",
    `${themeName}.json`
  );
  const resolved = transformTokens(tokens, tokenSets);
  await writeFile(outFile, JSON.stringify(resolved, null, 2));
}

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
})();
