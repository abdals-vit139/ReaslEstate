import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-5">
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
