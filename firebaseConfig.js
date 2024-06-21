// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC11RROAFan_m00bXOv_4LJ-3VUwwBG8cI",
  authDomain: "ticket-booking-app-8c76e.firebaseapp.com",
  projectId: "ticket-booking-app-8c76e",
  storageBucket: "ticket-booking-app-8c76e.appspot.com",
  messagingSenderId: "563996198666",
  appId: "1:563996198666:web:d26bdc4d30b75441bc9cf3",
  databaseURL: "https://ticket-booking-app-8c76e-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, RecaptchaVerifier, signInWithPhoneNumber };
