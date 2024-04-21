import React from "react";
import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";

const AdminEmployees = () => {
  return (
    <div>
      <AdminHeader />
      <div className="  h-[100vh]">
        <div className="flex justify-center">
          <img
            className="w-7 ml-[-40px] mt-5"
            src="https://cdn-icons-png.flaticon.com/128/2476/2476725.png"
            alt="employee logo"
          />
        </div>
        <div className="mx-auto w-40 ">
          <Link to={"/admin/addEmployee"}>
            <button className="mt-1  border p-2  rounded-lg bg-violet-500 text-white  hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 active:border-collapse active:font-semibold active:shadow-2xl">
              Add Employee
            </button>
          </Link>
        </div>
        <div className="mt-5 p-2">
          {" "}
          <div className="bg-gray-50 rounded-t-2xl  h-[570px] m-auto  mt-6 p-1">
            <div className="bg-violet-500 p-3 rounded-t-2xl text-center">
              <h1 className="text-white font-bold text-xl">EMPLOYEES</h1>
            </div>
            <div className="bg-gray-200 text-black p-2  font-bold flex justify-between ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      User name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      full name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      email
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Password
                    </th>

                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      phone number
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      role
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap font-normal">
                      Nikhil
                    </td>
                    <td className="px-5 py-4 whitespace-no-wrap font-normal">
                      NikhilSathwika
                    </td>
                    <td className="px-5 py-4 whitespace-no-wrap font-normal">
                      dyagavontela@gmail.com
                    </td>
                    <td className="px-5 py-4 whitespace-no-wrap font-normal">
                      vontela
                    </td>

                    <td className="px-5 py-4 whitespace-no-wrap font-normal">
                      9999999888
                    </td>
                    <td className="px-5 py-4 whitespace-no-wrap font-normal">
                      Full Stack Developer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEmployees;
