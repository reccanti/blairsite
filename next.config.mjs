import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtraction = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ttf)$/i,
      type: "asset/resource",
    });

    return config;
  },
};

export default withVanillaExtraction(nextConfig);
