import { useState } from "react";
import { useEffect } from "react";

export default function GitUser() {
  let [users, setUsers] = useState([]);
  const getUser = async () => {
    let response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(">>>>>>>>>>>!", users);
  return (
    <>
      <div className="container  bg-slate-800 h-[aut0] min-h-[100vh] w-[100%]">
        <h1 className="text-center text-white font-bold text-2xl">Git Users</h1>
        <div className=" flex flex-wrap  justify-center ">
          {users.map((user, index) => (
            <>
              <div
                key={index}
                className="card m-2 w-[20rem] rounded-md h-[10rem] bg-slate-500"
              >
                <div className="flex items-center p-2    h-full">
                  <img
                    className="h-[7rem] rounded-full border-2 border-pink-300  bg-slate-500"
                    src={user.avatar_url}
                    alt="avatar"
                  />
                  <div className="details text-white h-full w-full pt-5">
                    <h1 className="name font-bold text-center">{user.login}</h1>
                    <div className="flex justify-between  px-5 mt-8">
                      <div className="folllower">
                        <h1>Followers</h1>
                        <h1 className="text-center">
                          {user.followers_url.length}
                        </h1>
                      </div>
                      <div className="following">
                        <h1>Following</h1>
                        <h1 className="text-center">
                          {user.following_url.length}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
