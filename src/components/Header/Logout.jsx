import React from "react";
import { FaPowerOff } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { auth } from "../../../firebaseConfig";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <article className="flex justify-center items-center flex-col mr-4">
      <button
        onClick={() => {
          dispatch(logout());
          auth.signOut();
          localStorage.removeItem("isLogged");
          window.location.href = "/login";
        }}
        className="flex justify-center items-center gap-2 border p-2 rounded-lg border-red-500 text-red-500 hover:bg-red-500 hover:text-white duration-200"
      >
        <p className="uppercase font-semibold">Logout</p>
        <FaPowerOff className="text-xl" />
      </button>
      <main></main>
    </article>
  );
};

export default Logout;
