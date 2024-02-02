import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtraction = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withVanillaExtraction(nextConfig);
