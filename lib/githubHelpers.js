import axios from "axios";
import githubSecrets from "../githubSecrets";

const searchRepos = async (q) => {
  const resp = await axios.get(
    `search/repositories?q=${q}&sort=stars&order=desc`,
    githubSecrets
  );

  return resp;
};

const searchUsers = async (q) => {
  const resp = await axios.get(`search/users?q=${q}`, githubSecrets);

  return resp;
};

const searchCode = async (q) => {
  const resp = await axios.get(`search/code?q=${q}&order=desc`, githubSecrets);

  return resp;
};

const searchCommits = async (q) => {
  const resp = await axios.get(`search/commits?q=${q}`, githubSecrets);

  return resp;
};

export { searchRepos, searchUsers, searchCode, searchCommits };
