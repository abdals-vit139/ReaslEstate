import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="navbar bg-primary">
        <div className="flex-1 pl-6 text-neutral">
          <p className="text-xl">Admin Dashboard</p>
        </div>
        <div className="flex-none gap-2 pr-6">
          <p>Welcome, {username}</p>
          <button onClick={handleLogout} className="btn bg-error">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
