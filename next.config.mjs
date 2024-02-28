import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtraction = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  outputFileTracing: false,
  webpack: (config) => {
    // add rules to load font file paths
    config.module.rules.push({
      test: /\.(ttf)$/i,
      type: "asset/resource",
    });
    // add rules to load markdown as strings
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    return config;
  },
};

export default withVanillaExtraction(nextConfig);
