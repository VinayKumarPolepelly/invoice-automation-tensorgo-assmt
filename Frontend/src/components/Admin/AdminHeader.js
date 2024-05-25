import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const UserProfileIcon = ({ size }) => (
  <div>
    <FaUser size={size} />
  </div>
);

const Logout = ({ handleLogout }) => (
  <div className="absolute top-12 right-0 mt-2 mr-5">
    <div className="w-48 text-center p-5 bg-gray-100 border-4 border-violet-200 shadow-2xl rounded-xl rounded-tr-none">
      <div className="mx-auto h-16 w-16 text-violet-500 rounded-full border-4 border-violet-500 p-1 cursor-pointer active:border-gray-400">
        <UserProfileIcon size={48} />
      </div>
      <h1 className="mt-4 mb-3">Vinay Kumar</h1>
      <button
        onClick={handleLogout}
        className="text-sm text-white border-2 p-2 bg-violet-500 hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 rounded-lg"
      >
        Logout
      </button>
    </div>
  </div>
);

const AdminHeader = () => {
  const [showItem, setShowItem] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate("/Adminlogin");
  };

  return (
    <div className="sticky top-0 bg-violet-500 shadow-lg">
      <ul className="flex justify-between items-center border-b rounded-b-lg text-white">
        <Link to="/admin">
          <li className="m-5 active:font-semibold">Home</li>
        </Link>
        <Link to="/admin/employees">
          <li className="m-5 active:font-semibold">Employees</li>
        </Link>
        <Link to="/admin/addsalary">
          <li className="m-5 active:font-semibold">Add Salary</li>
        </Link>
        <Link to="/admin/addproject">
          <li className="m-5 active:font-semibold">Add Project</li>
        </Link>
        <Link to="/admin/salarydetails">
          <li className="m-5 active:font-semibold">Salary Details</li>
        </Link>
        <Link to="/admin/projectdetails">
          <li className="m-5 active:font-semibold">Project Details</li>
        </Link>
        <Link to="/admin/projectreport">
          <li className="m-5 active:font-semibold">Project Report</li>
        </Link>
        <Link to="/admin/leavereport">
          <li className="m-5 active:font-semibold">Leave Reports</li>
        </Link>
        <li className="relative">
          <div
            className="h-9 w-10 mt-3 mr-5 text-white rounded-3xl border-solid border-4 p-1 cursor-pointer active:text-violet-200 active:border-violet-200"
            onClick={() => setShowItem(!showItem)}
          >
            <UserProfileIcon size={25} />
          </div>
          {showItem && <Logout handleLogout={handleLogout} />}
        </li>
      </ul>
    </div>
  );
};

export default AdminHeader;
