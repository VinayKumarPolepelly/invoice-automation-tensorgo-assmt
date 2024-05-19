import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const UserProfileIcon = (props) => {
  const { size } = props;
  return (
    <div>
      <FaUser size={size} />
    </div>
  );
};

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/api/v1/users/logout";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}), // Ensure body is an empty JSON object
      });

      if (response.ok) {
        alert("Logout Successful");
        navigate("/");
      } else {
        const errorData = await response.json();
        console.error("Logout failed:", errorData);
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert(
        "Failed to fetch. Please check your network connection and try again."
      );
    }
  };

  return (
    <div className="flex justify-end absolute right-0 mt-2 mr-5">
      <div className="w-48 h-48 text-center p-5 bg-gray-100 border-4 border-violet-200 shadow-2xl rounded-xl rounded-tr-none">
        <div className="mx-auto h-16 w-16 text-violet-500 rounded-full border-4 border-violet-500 p-1 cursor-pointer active:border-gray-400">
          <UserProfileIcon size={48} />
        </div>
        <h1 className="mt-4 mb-3">Vinay Kumar</h1>
        <form onSubmit={handleLogout}>
          <button className="text-sm text-white border-2 p-2 bg-violet-500 hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 rounded-lg">
            Logout
          </button>
        </form>
      </div>
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
      <ul className="flex justify-between border rounded-b-lg shadow-lg bg-violet-500 text-white">
        <Link to={"/admin"}>
          <li className="m-5 active:font-semibold">Home</li>
        </Link>
        <Link to={"/admin/employees"}>
          <li className="m-5 active:font-semibold">Employees</li>
        </Link>
        <Link to={"/admin/addsalary"}>
          <li className="m-5 active:font-semibold">Add Salary</li>
        </Link>
        <Link to={"/admin/addproject"}>
          <li className="m-5 active:font-semibold">Add Project</li>
        </Link>
        <Link to={"/admin/salarydetails"}>
          <li className="m-5 active:font-semibold">Salary Details</li>
        </Link>
        <Link to={"/admin/projectdetails"}>
          <li className="m-5 active:font-semibold">Project Details</li>
        </Link>
        <Link to={"/admin/projectreport"}>
          <li className="m-5 active:font-semibold">Project Report</li>
        </Link>
        <Link to={"/admin/leavereport"}>
          <li className="m-5 active:font-semibold">Leave Reports</li>
        </Link>
        <li>
          <div
            className="h-9 w-10 mt-3 mr-5 text-white rounded-3xl border-solid border-4 p-1 cursor-pointer active:text-violet-200 active:border-violet-200"
            onClick={handleClick}
          >
            <UserProfileIcon size={25} />
          </div>
        </li>
      </ul>
      {showItem && <Logout />}
    </div>
  );
};

export default AdminHeader;
