import Image from "next/image";

const Users = ({ users }) => {
  return (
    <>
      <h1 className="text-xl font-bold">{users.length} User results</h1>
      <div className="">
        {users.map((user, _) => {
          return (
            <>
              <div className="max-w-4xl w-full h-px bg-gray-800 mt-2" />
              <div
                className="flex items-start h-50 w-full text-lg text-white mt-4 space-x-2"
                key={user.id}
              >
                <Image
                  src={user.avatar_url}
                  width={25}
                  height={25}
                  className="rounded-full mt-4"
                />
                <div className="flex flex-col items-start">
                  <div className="flex items-center space-x-2">
                    {user.name && (
                      <a href={user.html_url}>
                        <div className="text-md text-blue-500 hover:underline">
                          {user.name}
                        </div>
                      </a>
                    )}
                    {user.login && (
                      <a href={user.html_url}>
                        <div className="text-md font-semibold text-gray-400 hover:underline">
                          {user.login}
                        </div>
                      </a>
                    )}
                  </div>
                  {user.bio && (
                    <div className="text-sm text-gray-400">
                      {user.bio.length > 60
                        ? user.bio.substring(0, 60) + "..."
                        : user.bio}
                    </div>
                  )}
                  <div className="flex space-x-4 mt-1">
                    {user.location && (
                      <div className="text-xs text-gray-400">
                        {user.location}
                      </div>
                    )}
                    {user.email && (
                      <a href={`mailto:${user.email}`}>
                        <div className="text-xs text-gray-400 hover:text-blue-500">
                          {user.email}
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Users;
