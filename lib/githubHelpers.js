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
  //limitting to 5 for complexity sake
  const resp = await axios.get(`search/users?q=${q}&per_page=5`, githubSecrets);

  let userInfo = [];

  for (let i = 0; i < resp.data.items.length; i++) {
    let userResp = await getUserByName(resp.data.items[i].login);
    userInfo.push(userResp.data);
  }

  return userInfo;
};

const searchCode = async (q) => {
  const resp = await axios.get(`search/code?q=${q}&order=desc`, githubSecrets);

  return resp;
};

const searchCommits = async (q) => {
  const resp = await axios.get(`search/commits?q=${q}`, githubSecrets);

  return resp;
};

const getUserByID = async (id) => {
  const resp = await axios.get(`user/:${id}`, githubSecrets);

  return resp;
};

const getUserByName = async (name) => {
  const resp = await axios.get(`users/${name}`, githubSecrets);

  return resp;
};

export { searchRepos, searchUsers, searchCode, searchCommits, getUserByID };
