const { resolve } = require("path");
const { readdirSync } = require("fs");

const THEME_DIR = resolve(__dirname, "..", "src", "themes", "compiled");
const jsons = readdirSync(THEME_DIR).map((jsonFile) => {
  return require(resolve(THEME_DIR, jsonFile));
});
function visit(tree, cb) {
  cb(tree);
  if (typeof tree === "object" && tree !== null) {
    Object.values(tree).forEach((leaf) => {
      visit(leaf, cb);
    });
  }
}

const types = new Set();
jsons.forEach((json) => {
  visit(json, (obj) => {
    if (typeof obj === "object" && obj !== null) {
      if (obj.type) {
        types.add(obj.type);
      }
    }
  });
});

console.log(types);
