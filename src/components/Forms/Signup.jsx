import React, { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  db,
} from "../../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { login } from "../../features/user/userSlice";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function Signup() {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isSignUpWithPhone, setIsSignUpWithPhone] = useState(false);

  const handleEmailPasswordRegistration = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      dispatch(login(auth.currentUser.email));
      localStorage.setItem("userInfo", auth.currentUser.email);
      console.log("User registered successfully");
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  const handleGoogleRegistration = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, googleProvider);
      dispatch(login(auth.currentUser));
      const user = {
        email: auth.currentUser.email,
        displayName: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
        phoneNumber: auth.currentUser.phoneNumber,
        gender: "Not Specified",
        city: localStorage.getItem("userLocation"),
      };
      await addDoc(collection(db, "users"), user);
      localStorage.setItem("userInfo", auth.currentUser.email);
      console.log("User registered with Google successfully");
    } catch (error) {
      console.error("Error registering with Google:", error.message);
    }
  };

  const handlePhoneRegistration = async (e) => {
    e.preventDefault();
    const phone = "+91" + phoneNumber;
    try {
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {}
      );
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
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
      localStorage.setItem("userInfo", auth.currentUser.phoneNumber);
      dispatch(login(auth.currentUser.phoneNumber));
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
          <h2 className="text-3xl font-bold mb-4">Register</h2>
          <main className="flex flex-col justify-center items-center">
            {!isSignUpWithPhone ? (
              <form
                className="flex flex-col justify-center items-center gap-6"
                onSubmit={handleEmailPasswordRegistration}
              >
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
            ) : (
              !confirmationResult && (
                <form
                  className="flex flex-col justify-center items-center gap-6"
                  onSubmit={handlePhoneRegistration}
                >
                  <div className="flex justify-start flex-col gap-3">
                    <label htmlFor="phone">Phone:</label>
                    <input
                      className="px-4 h-12 w-72 rounded-lg border border-black focus:border-transparent"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Phone Number"
                      required
                    />
                    <div id="recaptcha-container"></div>
                  </div>
                  <button
                    className="px-3 w-28 uppercase py-2 border-sky-400 border rounded-lg text-sky-500 font-semibold hover:bg-sky-500 hover:text-white duration-200"
                    type="submit"
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
                    type="text"
                    id="otp"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    required
                  />
                </div>
                <button
                  className="px-3 w-28 uppercase py-2 border-sky-400 border rounded-lg text-sky-500 font-semibold hover:bg-sky-500 hover:text-white duration-200"
                  type="submit"
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
                  onClick={handleGoogleRegistration}
                >
                  Continue with Google
                </button>
                <button
                  className="px-3 py-2 bg-white rounded-full border border-red-400 hover:bg-red-400 hover:text-white duration-200 text-red-400 mb-2"
                  onClick={() => setIsSignUpWithPhone(!isSignUpWithPhone)}
                >
                  Continue with {isSignUpWithPhone ? "Email" : "Phone"}
                </button>
              </div>
            </div>
            <Link
              to="/login"
              className="text-sm text-center mt-2 hover:text-red-600 text-blue-500 hover:underline font-semibold"
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
