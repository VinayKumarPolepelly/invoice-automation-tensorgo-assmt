import React from "react";
import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";

const AdminEmployees = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex mt-5 justify-center">
        <img
          className="w-7 my-2"
          src="https://cdn-icons-png.flaticon.com/128/2476/2476725.png"
          alt="employee logo"
        />
        <p className="my-3 ml-1">Employee List</p>
      </div>
      <div className="mx-auto w-40 ">
        <Link to={"/admin/addEmployee"}>
          <button className="mt-1 mx-4 border p-2 rounded-lg bg-violet-600 text-white">
            Add Employee
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminEmployees;
