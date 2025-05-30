import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../../features/user/userSlice";
import { IoCloseCircleOutline } from "react-icons/io5";
import { userLogin } from "../../utils/action";
import { toast } from "react-toastify";

const Login = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    const response = await userLogin(userData);
    if (response.status === 200) {
      dispatch(login(userData));
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 3000,
      });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/");
    } else if (response.status === 401) {
      toast.error("Invalid email or password!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else if (response.status === 404) {
      toast.error("User not found!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else if (response.status === 500) {
      toast.error("Internal server error!", {
        position: "top-center",
        autoClose: 3000,
      });
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
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <main className="flex flex-col justify-center items-center">
            <form
              className="flex flex-col justify-center items-center gap-6"
              onSubmit={handleLogin}
            >
              <div className="flex justify-start flex-col gap-3">
                <label htmlFor="email">Email:</label>
                <input
                  className="px-4 h-12 w-72 rounded-lg border border-black focus:border-transparent"
                  placeholder="Enter Email"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                Login
              </button>
            </form>
            <Link
              to="/register"
              className="text-sm text-center mt-6 hover:text-red-600 text-blue-500 hover:underline font-semibold"
            >
              Not a user?
            </Link>
          </main>
        </article>
      </section>
    </>
  );
};

export default Login;
