import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AdminProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/admins/getProjects",
          {
            method: "GET",
            credentials: "include", // Include credentials (cookies)
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        //console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        if (json?.projects) {
          setProjects(json.projects);
          console.log(json.projects);
        } else {
          throw new Error("No projects field in response");
        }
      } catch (error) {
        //console.log(error.message);
        if (error.message === "Network response was not ok") navigate("/");
        setError("Error fetching project data");
      }
    };

    fetchProjectDetails();
  }, []);

  return (
    <div>
      <AdminHeader />
      <div className="p-2">
        <div className="bg-gray-50 rounded-t-2xl m-auto mt-6 p-1">
          <div className="bg-violet-500 p-3 rounded-t-2xl text-center">
            <h1 className="text-white font-bold text-xl">PROJECT DETAILS</h1>
          </div>
          <div className="bg-gray-200 text-black p-2 font-bold flex justify-between overflow-x-visible">
            {error ? (
              <div className="text-red-500">{error}</div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Project Title
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Project Type
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Client Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Developing Platform
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Database Used
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Project Description
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Employee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.length > 0 ? (
                    projects.map((project) => (
                      <tr key={project._id}>
                        <td className="px-6 py-3 w-1/12 whitespace-wrap break-all font-normal text-center">
                          {project.projectTitle}
                        </td>
                        <td className="px-6 py-3 w-1/12 whitespace-wrap break-all font-normal text-center">
                          {project.clientName}
                        </td>
                        <td className="px-6 py-3 w-1/12 whitespace-wrap break-all font-normal text-center">
                          {project.projectType}
                        </td>
                        <td className="px-6 py-3 w-1/12 whitespace-wrap break-all font-normal text-center">
                          {project.developingPlatform}
                        </td>
                        <td className="px-6 py-3 w-1/12 whitespace-wrap break-all font-normal text-center">
                          {project.databaseTechnology}
                        </td>
                        <td className="px-6 py-3 w-1/12 whitespace-wrap break-all font-normal text-center">
                          {project.projectDescription}
                        </td>
                        <td className="px-6 py-3 w-1/12 whitespace-wrap break-all font-normal text-center">
                          <div className="flex justify-center items-center">
                            <span>{project.projectManager}</span>
                            <button className="mx-3 text-blue-500 hover:text-blue-700">
                              <MdEdit className="w-6 h-6" />
                            </button>
                            <button className=" text-red-500  hover:text-red-700">
                              <MdDelete className="w-6 h-6" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-4 whitespace-no-wrap text-center font-normal"
                      >
                        No projects available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectDetails;
