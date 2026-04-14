import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "scmesh";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: isGithubActions ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io/${repoName}` : "http://localhost:4321",
  base: isGithubActions ? `/${repoName}` : "/",
  output: "static"
});
