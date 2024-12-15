import React, { useEffect, useState } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  googleProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "../../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login } from "../../features/user/userSlice";
import { IoCloseCircleOutline } from "react-icons/io5";

const Login = () => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user, isLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isLoginWithPhone, setIsLoginWithPhone] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(login(auth.currentUser.email));
      localStorage.setItem("userInfo", auth.currentUser.email);
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      dispatch(login(auth.currentUser.email));
      localStorage.setItem("userInfo", auth.currentUser.email);
      // alert("Login successful");
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };

  const handlePhoneLogin = async (e) => {
    e.preventDefault();
    const phoneNumber = "+91" + phone;
    try {
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {}
      );
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier
      );
      setConfirmationResult(confirmationResult);
      alert("OTP has been sent");
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      await confirmationResult.confirm(otp);
      alert("Phone Login successful");
      dispatch(login(phone));
      localStorage.setItem("userInfo", auth.currentUser.phoneNumber);
    } catch (error) {
      alert("Error verifying OTP: " + error.message);
    }
  };

  return (
    <>
      {isLoggedIn && <Navigate to="/" />}
      <section className=" top-0 absolute flex justify-center items-center h-screen w-full bg-[#b8b8b856] backdrop-blur-[3px] z-40 ">
        <article className="relative p-6 rounded-2xl shadow-xl shadow-[#0000005d] bg-white">
          <Link to="/" className="absolute right-4 text-3xl text-red-600 top-8">
            <IoCloseCircleOutline />
          </Link>
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <main className="flex flex-col justify-center items-center">
            {!isLoginWithPhone ? (
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
            ) : (
              !confirmationResult && (
                <form
                  className="flex flex-col justify-center items-center gap-6"
                  onSubmit={handlePhoneLogin}
                >
                  <div className="flex justify-start flex-col gap-3">
                    <label htmlFor="phone">Phone:</label>
                    <input
                      className="px-4 h-12 w-72 rounded-lg border border-black focus:border-transparent"
                      placeholder="Enter Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <div id="recaptcha-container"></div>
                  </div>
                  <button
                    type="submit"
                    className="px-3 w-28 uppercase py-2 border-sky-400 border rounded-lg text-sky-500 font-semibold hover:bg-sky-500 hover:text-white duration-200"
                  >
                    Send OTP
                  </button>
                </form>
              )
            )}
            {confirmationResult && (
              <form
                className="flex flex-col justify-center items-center gap-6"
                onSubmit={verifyOtp}
              >
                <div className="flex justify-start flex-col gap-3">
                  <label htmlFor="otp">OTP:</label>
                  <input
                    className="px-4 h-12 w-72 rounded-lg border border-black focus:border-transparent"
                    placeholder="Enter OTP"
                    type="text"
                    id="otp"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 w-28 uppercase py-2 border-sky-400 border rounded-lg text-sky-500 font-semibold hover:bg-sky-500 hover:text-white duration-200"
                >
                  Verify OTP
                </button>
              </form>
            )}
            <div className="flex justify-center items-center flex-col gap-4 mt-4 border-y border-black p-2 w-full">
              <span>Or</span>
              <div className="flex justify-center items-center flex-col gap-4">
                <button
                  className="px-3 py-2 bg-white rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-white duration-200 text-yellow-400"
                  onClick={handleGoogleLogin}
                >
                  Continue with Google
                </button>
                <button
                  className="px-3 py-2 bg-white rounded-full border border-red-400 hover:bg-red-400 hover:text-white duration-200 text-red-400 mb-2"
                  onClick={() => setIsLoginWithPhone(!isLoginWithPhone)}
                >
                  Continue with {isLoginWithPhone ? "Email" : "Phone"}
                </button>
              </div>
            </div>
            <Link
              to="/register"
              className="text-sm text-center mt-2 hover:text-red-600 text-blue-500 hover:underline font-semibold"
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
