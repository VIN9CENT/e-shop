import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
