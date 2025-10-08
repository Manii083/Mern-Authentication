import React from "react";
import { Link } from "react-router-dom"; // Add this import

const Home = ({ user, error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        {user ? (
            <div className="p-5 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Welcome, <span className="text-blue-600">{user.username}</span>
              </h2>
              <p className="text-gray-600">
                Email: <span className="text-gray-800 font-medium">{user.email}</span>
              </p>
            </div>

        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Welcome!
            </h2>
            <p>Please Login or Register</p>
            <div className="mt-6">
           <Link
                to="/login"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:from-indigo-600 hover:to-blue-500 transition duration-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="ml-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:from-red-500 hover:to-pink-500 transition duration-300"
              >
                Register
              </Link>


            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
