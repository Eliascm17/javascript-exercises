const githubSecrets = {
  baseURL: "https://api.github.com/",
  auth: {
    username: process.env.GITHUB_CLIENT_ID,
    password: process.env.GITHUB_CLIENT_SECRET,
  },
};

export default githubSecrets;
