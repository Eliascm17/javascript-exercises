import axios from "axios";
import githubSecrets from "../githubSecrets";

const getRepos = async (q) => {
  const resp = await axios.get(
    `search/repositories?q=${q}&sort=stars&order=desc`,
    githubSecrets
  );

  console.log("RESP:", resp);
  return resp;
};

export { getRepos };
