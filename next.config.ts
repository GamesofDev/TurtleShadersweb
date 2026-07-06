import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/TurtleShadersweb",
  assetPrefix: "/TurtleShadersweb/",
  trailingSlash: true,
};

export default nextConfig;
