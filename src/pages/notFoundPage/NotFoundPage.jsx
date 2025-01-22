import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="max-w-md p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-xl text-gray-700">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          onClick={handleBackHome}
          className="mt-6 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
