import React, { useEffect, useState } from "react";
import Logout from "../Logout";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { MutatingDots } from "react-loader-spinner";
import { Navigate } from "react-router-dom";

const UserProfile = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  if (!user) {
    return <MutatingDots>Loading...</MutatingDots>;
  }

  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-semibold">Welcome</p>
          <p className="text-lg font-bold">User Profile</p>
          <img src={user.photoURL} className="h-32 w-32" alt="" />
          <p className="text-lg font-bold">{user?.displayName}</p>
          <p className="text-lg font-bold">{user?.email}</p>
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default UserProfile;
