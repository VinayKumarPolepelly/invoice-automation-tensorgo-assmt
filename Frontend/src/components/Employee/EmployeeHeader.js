import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
const UserProfileIcon = () => {
  return (
    <div>
      <FaUser size={25} />
    </div>
  );
};
const Logout = () => {
  return (
    <div className="flex justify-end">
      <button className="mr-[70px] text-sm mt-[-30px] border-2 p-[4px]   rounded-lg rounded-tr-none active:bg-gray-300 border-gray-400 hover:bg-gray-200 bg-gray-100 active:border-gray-700">
        LogOut
      </button>
    </div>
  );
};
const EmployeeHeader = () => {
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowItem(!showItem);
  };
  return (
    <div>
      <div className="">
        <ul className="flex justify-between px-10 py-4 text-center  bg-violet-500">
          <Link to="/employeeHomepage/">
            <li className="text-lg text-white">Home</li>
          </Link>
          <Link to="/employeeSalaryDetails/">
            <li className="text-white">Salary Details</li>
          </Link>
          <Link to="/employeeProjectDetails">
            <li className="text-white">Project Details</li>
          </Link>
          <Link to="/employeeProjectReport/">
            <li className="text-white">Project Report</li>
          </Link>
          <Link to="/employeeLeaveReport/">
            <li className="text-white">Leave Report</li>
          </Link>

          <li>
            <div
              className="h-9 w-10 mt-[-6px] text-white rounded-3xl border-solid  border-4 p-1 cursor-pointer active:border-gray-400 "
              onClick={handleClick}
            >
              <UserProfileIcon />
            </div>
          </li>
        </ul>
        {showItem && <Logout />}
      </div>
    </div>
  );
};

export default EmployeeHeader;
