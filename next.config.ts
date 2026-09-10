import type { NextConfig } from "next";

const pagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "/hci";
const isPagesBuild =
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.NEXT_PUBLIC_DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  output: "export",
  ...(isPagesBuild ? { basePath: pagesBasePath } : {}),
};

export default nextConfig;
