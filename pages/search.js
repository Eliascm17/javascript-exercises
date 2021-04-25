import { useState } from "react";
import Container from "../components/Container";
import Icon from "../components/Icon";
import languageColors from "../styles/languageColors";
import {
  searchRepos,
  searchUsers,
  searchCode,
  searchCommits,
} from "../lib/githubHelpers";

const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentDay = now.getDate();
const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getMinutes()}`;
const today = new Date(
  `${currentYear}-${currentMonth + 1}-${currentDay} ${currentTime}`
);

const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "June",
  6: "July",
  7: "Aug",
  8: "Sept",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

const search = ({ repos }) => {
  console.log(repos[0]);
  const [type, setType] = useState("repositories");

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
              <div className="text-sm text-gray-300 bg-gray-500 h-5 w-5 rounded-full">
                3
              </div>
            </button>
          </>
        </div>
        <div className="h-70 w-full bg-black-bg text-gray-300">
          {type === "repositories" && (
            <div>
              <h1 className="text-xl font-bold">
                {repos.length} repository result
              </h1>
              {repos.map((repo, _) => {
                const updatedAt = new Date(repo.updated_at);
                const monthUpdated = updatedAt.getMonth();
                const dayUpdated = updatedAt.getDate();
                const diff = Math.abs(updatedAt - today);
                const milliSince = new Date(diff); // -> milliseconds
                // milliseconds -> hours
                const hoursSince = Math.round(milliSince / (60 * 60 * 1000));
                // milliseconds -> days
                const daysSince = Math.round(
                  milliSince / (60 * 60 * 24 * 1000)
                );

                return (
                  <>
                    <div className="max-w-4xl w-full h-px bg-gray-800 mt-2" />
                    <div
                      key={repo.id}
                      className="flex items-start h-50 w-full text-lg text-white mt-3"
                    >
                      <Icon
                        name="repository"
                        className="w-5 h-5 fill-current text-gray-600 mt-2"
                      />
                      <div className="flex flex-col ml-2">
                        <div>
                          <a
                            className="text-lg text-blue-400 hover:underline"
                            href="#"
                          >
                            {repo.full_name}
                          </a>
                        </div>
                        {repo.description && (
                          <div className="text-xs">
                            {repo.description.length > 100
                              ? repo.description.substring(0, 100) + "..."
                              : repo.description}
                          </div>
                        )}
                        <div className="flex items-center space-x-4 mt-2">
                          {repo.stargazers_count > 0 && (
                            <div className="flex">
                              <a
                                className="flex items-center space-x-1 text-xs stroke-current text-gray-400 hover:text-blue-400"
                                href="#"
                              >
                                <Icon className="h-3 w-3" name="star" />
                                {repo.stargazers_count}
                              </a>
                            </div>
                          )}
                          {repo.language && (
                            <div className="flex items-center space-x-1">
                              <div
                                className={`h-3 w-3 rounded-full bg-${
                                  languageColors[repo.language]
                                    ? `${repo.language}`
                                    : "green-500"
                                } border border-black-bg`}
                              />
                              <div className="text-xs text-gray-400">
                                {repo.language}
                              </div>
                            </div>
                          )}
                          {repo.license?.name && (
                            <div className="text-xs text-gray-400">
                              {repo.license.name}
                            </div>
                          )}
                          <div className="text-xs text-gray-400">
                            {hoursSince < 24
                              ? `Updated ${hoursSince} hours ago`
                              : daysSince < 30
                              ? `Updated ${daysSince} days ago`
                              : `Updated ${months[monthUpdated]} ${dayUpdated}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          )}
          {type === "code" && <div></div>}
          {type === "commits" && <div></div>}
          {type === "users" && <div></div>}
        </div>
      </div>
    </Container>
  );
};

export const getServerSideProps = async (ctx) => {
  const query = ctx.query.q;

  const reposRes = await searchRepos(query);
  // const usersRes = await searchUsers(query);
  // const codeRes = await searchCode(query);
  // const commitsRes = await searchCommits(query);

  return {
    props: {
      repos: reposRes.data.items,
      //     users: usersRes.data.items,
      // code: codeRes.data.items,
      // commits: commitsRes.data.items,
    },
  };
};

export default search;
