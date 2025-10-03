const DEFAULT_GITHUB_USERNAME = "jonassantoss";

export const githubUsername =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME ||
  process.env.GITHUB_USERNAME ||
  DEFAULT_GITHUB_USERNAME;

export const githubProfileUrl = `https://github.com/${githubUsername}`;
