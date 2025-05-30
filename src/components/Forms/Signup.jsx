import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { login } from "../../features/user/userSlice";
import { userRegistration } from "../../utils/action";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    const response = await userRegistration(userData);
    if (response.status === 201) {
      dispatch(login(userData));
      toast.success("User registered successfully!");
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/");
    }
    if (response.status === 400) {
      toast.error("User already exists!");
    }
  };

  return (
    <>
      {isLoggedIn && <Navigate to="/" />}
      <section className="top-0 absolute flex justify-center items-center h-screen w-full bg-[#b8b8b856] backdrop-blur-[3px] z-40">
        <article className="relative p-6 rounded-2xl shadow-xl shadow-[#0000005d] bg-white">
          <Link to="/" className="absolute right-4 text-3xl text-red-600 top-8">
            <IoCloseCircleOutline />
          </Link>
          <h2 className="text-3xl font-bold mb-4">Register</h2>
          <main className="flex flex-col justify-center items-center">
            <form
              className="flex flex-col justify-center items-center gap-6"
              onSubmit={handleRegistration}
            >
              <div className="flex justify-start flex-col gap-3">
                <label htmlFor="name">Name:</label>
                <input
                  className="px-4 h-12 w-72 rounded-lg border border-black focus:border-transparent"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="flex justify-start flex-col gap-3">
                <label htmlFor="email">Email:</label>
                <input
                  className="px-4 h-12 w-72 rounded-lg border border-black focus:border-transparent"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="flex justify-start flex-col gap-3">
                <label htmlFor="password">Password:</label>
                <input
                  className="px-4 h-12 w-72 rounded-lg border border-black focus:border-transparent"
                  placeholder="Enter Password"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                className="px-3 w-24 uppercase py-2 border-sky-400 border rounded-lg text-sky-500 font-semibold hover:bg-sky-500 hover:text-white duration-200"
                type="submit"
              >
                Register
              </button>
            </form>
            <Link
              to="/login"
              className="text-sm text-center mt-6 hover:text-red-600 text-blue-500 hover:underline font-semibold"
            >
              Already a user?
            </Link>
          </main>
        </article>
      </section>
    </>
  );
}

export default Signup;
