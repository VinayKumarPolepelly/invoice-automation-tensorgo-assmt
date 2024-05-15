import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const handlesubmitform = async (e) => {
  e.preventDefault();
  const url = "http://localhost:1024/api/v1/users/logout";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok === true) {
    alert("logout Successfull");
  } else {
    console.log("internal error");
  }
};

const UserProfileIcon = (props) => {
  const { si } = props;
  return (
    <div>
      <FaUser size={si} />
    </div>
  );
};
const Logout = () => {
  return (
    <div className="flex justify-end ">
      <div className="w-[200px]  h-[200px] text-center p-5 bg-gray-100 border-4 border-violet-200 shadow-2xl mt-[-22px] mr-9  absolute rounded-xl rounded-tr-none ">
        <div className="ml-[52px] h-[65px] w-[65px] mt-[-6px] text-violet-500 rounded-full border-solid border-violet-500   border-4 p-1 cursor-pointer active:border-gray-400 ">
          <UserProfileIcon si={48} />
        </div>
        <h1 className="mt-4 ml-2 mb-3">Vinay Kumar</h1>
        <form onSubmit={handlesubmitform}>
          <button className="text-sm text-white border-2 p-[6px]  bg-violet-500 hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 rounded-lg active:border-collapse active:font-semibold active:shadow-2xl">
            LogOut
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
              className="h-9 w-10 mt-3 mr-5 text-white rounded-3xl border-solid  border-4 p-1 cursor-pointer active:text-violet-200 active:border-violet-200 "
              onClick={handleClick}
            >
              <UserProfileIcon si={25} />
            </div>
          </li>
        </ul>
        {showItem && <Logout />}
      </div>
    </div>
  );
};

export default AdminHeader;
