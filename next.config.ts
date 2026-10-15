import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/YOUR-REPO-NAME" : "",
  assetPrefix: isProd ? "/YOUR-REPO-NAME/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;