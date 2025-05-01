import { useEffect, useState } from "react";
import Logout from "../Logout";
import { MutatingDots } from "react-loader-spinner";

const UserProfile = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  if (!user) {
    return <MutatingDots>Loading...</MutatingDots>;
  }

  return (
    <div className="flex justify-center flex-col mt-10 gap-6 items-center min-h-[50vh]">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <div className="bg-white rounded-xl shadow-xl p-8 w-[80%] sm:w-96 border border-gray-200">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <img
              // src={user.photoURL}
              className="h-32 w-32 rounded-full border-4 border-gray-200 shadow-lg"
              // alt={user.displayName}
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 px-3 py-1 rounded-full">
              <span className="text-white text-sm font-medium">Active</span>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>

          <div className="w-full border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Member since</p>
                <p className="font-semibold">
                  {new Date(user?.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">Last login</p>
                <p className="font-semibold">
                  {new Date(user?.lastLoginAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
