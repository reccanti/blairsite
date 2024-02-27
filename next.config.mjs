import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

import createMDX from "@next/mdx";

const withMDX = createMDX();
const withVanillaExtraction = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md"],
  outputFileTracing: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ttf)$/i,
      type: "asset/resource",
    });

    return config;
  },
};

export default withVanillaExtraction(withMDX(nextConfig));
