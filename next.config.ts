import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repositoryBasePath = "/CaritaEducatrice";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? repositoryBasePath : "",
  assetPrefix: isProd ? `${repositoryBasePath}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;