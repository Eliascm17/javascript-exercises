import Icon from "../components/Icon";

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

const Commits = ({ commits }) => {
  return (
    <div>
      <>
        <h1 className="text-xl font-bold">{commits.length} Commit results</h1>
        <div className="">
          {commits.map((commit, _) => {
            const updatedAt = new Date(commit.commit.author.date);
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
                <div className="max-w-4xl w-full h-px bg-gray-800 mt-2" />
                <div
                  className="flex items-start justify-between h-50 w-full text-lg text-white mt-4 space-x-2"
                  key={commit.id}
                >
                  <div className="flex flex-col">
                    <a href={commit.repository.html_url}>
                      <div className="text-xs text-gray-500 hover:text-blue-500 hover:underline">
                        {commit.repository.full_name}
                      </div>
                    </a>
                    {commit.commit.message && (
                      <a href={commit.url}>
                        <div className="text-md text-blue-500 hover:underline">
                          {commit.commit.message.substring(0, 50)}
                        </div>
                      </a>
                    )}
                    <div className="flex space-x-4 items-center">
                      {commit.repository.owner.login && (
                        <div className="text-xs text-gray-500 hover:underline">
                          {commit.repository.owner.login}
                        </div>
                      )}
                      <div className="text-xs text-gray-500">
                        commited
                        {hoursSince < 24
                          ? ` ${hoursSince} hours ago`
                          : daysSince < 30
                          ? ` ${daysSince} days ago`
                          : ` on ${months[monthUpdated]} ${dayUpdated}`}
                      </div>
                      <div>
                        <Icon
                          className="h-4 w-4 fill-current text-green-400"
                          name="check"
                        />
                      </div>
                      {commit.commit.comment_count > 0 && (
                        <div className="text-xs text-gray-500">
                          {commit.commit.comment_count} comment
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="bg-verified border border-green-600 rounded-full text-xs text-green-600 px-1 hover:border-green-400 mt-1">
                      Verified
                    </div>
                    <div className="flex space-x-0.5">
                      <button className="bg-commitButton rounded-l-md py-1 px-2 ring-1 ring-black-bg hover:ring-blue-500">
                        <Icon
                          className="h-5 w-5 stroke-current text-gray-500 hover:text-blue-400"
                          name="copy"
                        />
                      </button>
                      <button className="bg-commitButton text-xs text-blue-500 rounded-r-md p-1 ring-1 ring-black-bg hover:ring-blue-500">
                        {commit.sha.substring(0, 7)}
                      </button>
                    </div>
                    <div>
                      <button className="bg-commitButton rounded-md py-1 px-2 ring-1 ring-black-bg hover:ring-blue-500">
                        <Icon
                          className="h-5 w-4 fill-current text-gray-500 hover:text-blue-400"
                          name="carrots"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default Commits;
