import Icon from "../components/Icon";
import languageColors from "../styles/languageColors";

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

const Repository = ({ repos }) => {
  return (
    <div>
      <h1 className="text-xl font-bold flex-wrap">
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
        const daysSince = Math.round(milliSince / (60 * 60 * 24 * 1000));

        return (
          <>
            <div className="max-w-4xl w-full h-px bg-gray-800 my-2" />
            <div
              key={repo.id}
              className="flex items-start h-50 w-full text-lg text-white mt-3"
            >
              <Icon
                name="repository"
                className="w-5 h-5 fill-current text-gray-600 mt-2"
              />
              <div className="flex flex-col ml-2 flex-wrap w-5/6">
                <div>
                  <a
                    className="flex flex-wrap text-lg text-blue-400 hover:underline"
                    href={repo.html_url}
                  >
                    {repo.full_name}
                  </a>
                </div>
                {repo.description && (
                  <div className="text-xs flex-wrap">
                    {repo.description.length > 100
                      ? repo.description.substring(0, 100) + "..."
                      : repo.description}
                  </div>
                )}
                <div className="hidden md:flex items-center space-x-4 mt-2">
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
                        className={`h-3 w-3 rounded-full ${
                          languageColors[repo.language]
                            ? `bg-${repo.language}`
                            : "bg-green-500"
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
  );
};

export default Repository;
