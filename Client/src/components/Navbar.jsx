import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-blue-400 transition duration-300"
        >
          MERN Authentication
        </Link>

        {/* Right Section */}
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
