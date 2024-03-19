import { readFile, readdir, writeFile } from "fs/promises";
import { resolve, dirname, parse } from "path";
import { fileURLToPath } from "url";
import { transform } from "@svgr/core";
import template from "./template.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMG_DIR = resolve(__dirname, "img");

async function transformSvg(code, componentName) {
  const res = await transform(
    code,
    {
      plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
      typescript: true,
      jsxRuntime: "automatic",
      replaceAttrValues: {
        "#222222": "currentColor",
      },
      // template,
      icon: true,
    },
    { componentName }
  );
  return res;
}

(async function () {
  const fileNames = await readdir(IMG_DIR);

  for (const file of fileNames) {
    const { name: componentName } = parse(file);
    const filePath = resolve(IMG_DIR, file);
    const outPath = resolve(
      __dirname,
      "../src/components/Icons",
      `${componentName}Icon.tsx`
    );
    const fileContents = await readFile(filePath, "utf-8");
    const transformed = await transformSvg(
      fileContents,
      `${componentName}Icon`
    );

    const annotatedTransform = `
/**
 * AUTO GENERATED - don't edit directly. Instead modify the \`npm run build-icons\` script.
 * 
 * Last Updated: ${new Date().toLocaleString("en-US", {
   year: "numeric",
   month: "long",
   day: "2-digit",
 })}
 */

${transformed}
`;

    await writeFile(outPath, annotatedTransform, "utf-8");
  }
})();
