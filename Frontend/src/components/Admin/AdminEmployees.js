import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const AdminEmployees = () => {
  const [employees, setEmployees] = useState(null);
  const [error, setError] = useState(null); // Add state for error
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/admins/getEmployees",
          {
            method: "GET",
            credentials: "include", // Include credentials (cookies)
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setEmployees(json);
      } catch (error) {
        if (error.message === "Network response was not ok") navigate("/");
        setError("Error fetching employee data"); // Set error message
      }
    };

    fetchEmployeeDetails();
  }, []);

  const handleDeleteEmployee = async (username) => {
    const url = "http://localhost:3001/api/v1/admins/deleteEmployee";
    const data = {
      username: username,
    };

    const userdetails = JSON.stringify(data);

    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: userdetails,
      });

      const data2 = await response.json();
      if (!response.ok) {
        console.log(data2);
        setError(data2?.message);
      } else {
        alert("Employee Deleted Successfully");
        // Remove the deleted employee from the state
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.username !== username)
        );
      }
    } catch (error) {
      if (error.message === "Network response was not ok") navigate("/");
      console.error("Submit error:", error);
      setError("Error submitting employee data");
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="h-[100vh]">
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
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : employees ? (
          <div className="bg-gray-50 rounded-t-2xl h-[570px] m-auto mt-6 p-1">
            <div className="bg-violet-500 p-3 rounded-t-2xl text-center">
              <h1 className="text-white font-bold text-xl">EMPLOYEES</h1>
            </div>
            <div className="bg-gray-200 text-black p-2 font-bold flex justify-between ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      User name
                    </td>
                    <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Full name
                    </td>
                    <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </td>
                    <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Phone number
                    </td>

                    <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </td>
                    <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Created At
                    </td>
                    <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></td>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee._id}>
                      <td className="px-6 py-4 whitespace-no-wrap font-normal">
                        {employee.username}
                      </td>
                      <td className="px-5 py-4 whitespace-no-wrap font-normal">
                        {employee.fullname}
                      </td>
                      <td className="px-5 py-4 whitespace-no-wrap font-normal">
                        {employee.email}
                      </td>
                      <td className="px-5 py-4 whitespace-no-wrap font-normal">
                        {employee.phoneNumber}
                      </td>
                      <td className="px-5 py-4 whitespace-no-wrap font-normal">
                        {employee.role}
                      </td>
                      <td className="px-5 py-4 whitespace-no-wrap font-normal">
                        {employee.createdAt}
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            handleDeleteEmployee(employee.username)
                          }
                          className="text-purple-500 hover:text-purple-700"
                        >
                          <MdDelete className="ml-5 w-7 h-7" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>Loading employees...</p>
        )}
      </div>
    </div>
  );
};

export default AdminEmployees;
