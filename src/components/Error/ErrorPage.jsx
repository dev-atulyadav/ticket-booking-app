import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-3xl font-bold">Oops! Page not found.</h2>
      </div>
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-600 underline hover:no-underline"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
