import { useState } from "react";
import Container from "../components/Container";
import Repository from "../components/Repository";
import Users from "../components/Users";
import { searchRepos, searchUsers } from "../lib/githubHelpers";

const search = ({ repos, users }) => {
  console.log(users[0]);
  const [type, setType] = useState("users");

  return (
    <Container>
      <div className="flex flex-start max-w-4xl w-full space-x-6 mt-4 items-start py-2">
        <div className="flex flex-col w-72">
          <>
            {type === "repositories" && (
              <div className="absolute h-10 w-0.5 bg-red-salmon rounded-sm" />
            )}
            <button
              onClick={() => setType("repositories")}
              className={`flex space-x-16 justify-between items-center h-10 w-26 px-4 py-2 rounded-t-md outline-none focus:outline-none focus:ring-opacity-0 border border-gray-700 hover:bg-black-nav ${
                type === "repositories" ? "bg-black-nav" : "bg-black-bg"
              }`}
            >
              <div className="text-sm text-gray-300">Repositories</div>
              <div
                className={`text-sm text-gray-300 bg-gray-500 h-5 rounded-full ${
                  repos.length > 9 ? "w-7" : "w-5"
                } `}
              >
                {repos.length}
              </div>
            </button>
          </>
          <>
            {type === "code" && (
              <div className="absolute h-10 w-0.5 mt-10 bg-red-salmon rounded-sm" />
            )}
            <button
              onClick={() => setType("code")}
              className={`flex space-x-16 justify-between items-center h-10 w-26 px-4 py-2 outline-none focus:outline-none focus:ring-opacity-0 border border-gray-700 hover:bg-black-nav ${
                type === "code" ? "bg-black-nav" : "bg-black-bg"
              }`}
            >
              <div className="text-sm text-gray-300">Code</div>
              <div className="text-sm text-gray-300 bg-gray-500 h-5 w-7 rounded-full">
                35
              </div>
            </button>
          </>
          <>
            {type === "commits" && (
              <div className="absolute h-10 w-0.5 mt-20 bg-red-salmon rounded-sm" />
            )}
            <button
              onClick={() => setType("commits")}
              className={`flex space-x-16 justify-between items-center h-10 w-30 px-4 py-2 outline-none focus:outline-none focus:ring-opacity-0 border border-gray-700 hover:bg-black-nav ${
                type === "commits" ? "bg-black-nav" : "bg-black-bg"
              }`}
            >
              <div className="text-sm text-gray-300">Commits</div>
              <div className="text-sm text-gray-300 bg-gray-500 h-5 w-7 rounded-full">
                79
              </div>
            </button>
          </>
          <>
            {type === "users" && (
              <div className="absolute h-10 w-0.5 mt-30 bg-red-salmon rounded-sm" />
            )}
            <button
              onClick={() => setType("users")}
              className={`flex space-x-16 justify-between items-center rounded-b-md h-10 w-26 px-4 py-2 outline-none focus:outline-none focus:ring-opacity-0 border border-gray-700 hover:bg-black-nav ${
                type === "users" ? "bg-black-nav" : "bg-black-bg"
              }`}
            >
              <div className="text-sm text-gray-300">Users</div>
              <div
                className={`text-sm text-gray-300 bg-gray-500 h-5 rounded-full ${
                  users.length > 9 ? "w-7" : "w-5"
                } `}
              >
                {users.length}
              </div>
            </button>
          </>
        </div>
        <div className="h-70 w-full bg-black-bg text-gray-300">
          {type === "repositories" && <Repository repos={repos} />}
          {type === "code" && <div></div>}
          {type === "commits" && <div></div>}
          {type === "users" && <Users users={users} />}
        </div>
      </div>
    </Container>
  );
};

export const getServerSideProps = async (ctx) => {
  const query = ctx.query.q;

  const reposRes = await searchRepos(query);
  const usersRes = await searchUsers(query);

  // const codeRes = await searchCode(query);
  // const commitsRes = await searchCommits(query);

  return {
    props: {
      repos: reposRes.data.items,
      users: usersRes,
      // code: codeRes.data.items,
      // commits: commitsRes.data.items,
    },
  };
};

export default search;
