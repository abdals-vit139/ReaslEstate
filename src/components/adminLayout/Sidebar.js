import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-gray-800 text-white p-5 transition-all duration-300 sm:w-64`}
    >
      <h2 className="text-2xl font-semibold mb-5">Dashboard</h2>
      <ul>
        <li className="mb-3">
          <Link to="#sale" className="hover:text-gray-400">
            Sale
          </Link>
        </li>
        <li className="mb-3">
          <Link to="#lease" className="hover:text-gray-400">
            Lease
          </Link>
        </li>
        <li className="mb-3">
          <Link to="#rent" className="hover:text-gray-400">
            Rent
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
