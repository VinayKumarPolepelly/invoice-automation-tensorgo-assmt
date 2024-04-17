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
      <button className="mr-[48px] text-sm mt-[-30px] border-2 p-[4px]   rounded-lg rounded-tr-none active:bg-gray-300 border-gray-400 hover:bg-gray-200 bg-gray-100 active:border-gray-700">
        LogOut
      </button>
    </div>
  );
};
const AdminHeader = () => {
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowItem(!showItem);
  };
  return (
    <div>
      <div>
        <ul className="flex justify-between border shadow-lg bg-violet-500 text-white">
          <li className="m-5">Home</li>
          <Link to={"/admin/employees"}>
            <li className="m-5">Employees</li>
          </Link>
          <Link to={"/admin/addsalary"}>
            <li className="m-5">Add Salary</li>
          </Link>
          <Link to={"/admin/addproject"}>
            <li className="m-5">Add Project</li>
          </Link>
          <Link to={"/admin/salarydetails"}>
            <li className="m-5">Salary Details</li>
          </Link>
          <Link to={"/admin/projectdetails"}>
            <li className="m-5">Project Details</li>
          </Link>
          <Link to={"/admin/projectreport"}>
            <li className="m-5">Project Report</li>
          </Link>
          <Link to={"/admin/leavereport"}>
            <li className="m-5">Leave Reports</li>
          </Link>
          <li>
            <div
              className="h-9 w-10 mt-3 mr-2 text-white rounded-3xl border-solid  border-4 p-1 cursor-pointer active:border-gray-400 "
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

export default AdminHeader;
