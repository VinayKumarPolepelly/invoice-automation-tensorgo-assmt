import React, { useEffect, useRef, useState } from "react";
import AdminHeader from "./AdminHeader";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { BASE_URL } from "../helper";

const AdminAddProject = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/admins/getEmployees`, {
          method: "GET",
          credentials: "include", // Include credentials (cookies)
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        setEmployees(json);
      } catch (error) {
        if (error.message === "Network response was not ok") navigate("/");
        setError("Error fetching employee data"); // Set error message
      }
    };

    fetchEmployeeDetails();
  }, [navigate]);

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const projectTitle = useRef();
  const clientName = useRef();
  const projectType = useRef();
  const developingPlatform = useRef();
  const databaseTechnology = useRef();
  const projectDescription = useRef();

  const handlesubmitform = async (e) => {
    e.preventDefault();
    const url = `${BASE_URL}/api/v1/admins/addProject`;
    for (const employee of selectedEmployees) {
      const data = {
        projectTitle: projectTitle.current.value,
        clientName: clientName.current.value,
        projectType: projectType.current.value,
        developingPlatform: developingPlatform.current.value,
        databaseTechnology: databaseTechnology.current.value,
        projectDescription: projectDescription.current.value,
        projectManager: employee.value,
      };

      const projectDetails = JSON.stringify(data);
      console.log(projectDetails);

      try {
        const response = await fetch(url, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: projectDetails,
        });

        const data2 = await response.json();
        if (!response.ok) {
          console.log(data2);
          setError(data2?.message);
        }
      } catch (error) {
        console.error("Submit error:", error);
        setError("Error submitting project data");
      }
    }

    if (!error) {
      alert("Project(s) added successfully");
      navigate("/admin/projectdetails");
    }
  };
  const employeeOptions = employees.map((employee) => ({
    value: employee.username,
    label: employee.username,
  }));

  return (
    <div>
      <AdminHeader />
      <div className=" bg-violet-600 h-[100vh]">
        <h1 className="text-center text-white text-xl font-bold py-5">
          {" "}
          ADD PROJECT
        </h1>
        <form onSubmit={handlesubmitform}>
          <div className="flex flex-row m-4 flex-wrap">
            <div className=" px-8 py-5 ">
              <div className="flex flex-col">
                <label className="text-white pl-1 py-2">Project Name</label>
                <input
                  ref={projectTitle}
                  type="text"
                  className="w-[40vw] h-[40px] rounded-xl"
                />
              </div>
              <div className="flex flex-col my-5">
                <label className="text-white pl-1 py-2">Project Type</label>
                <input
                  ref={clientName}
                  type="text"
                  className="w-[40vw ] h-[40px] rounded-xl"
                />
              </div>
              <div className="flex flex-col my-5">
                <label className="text-white pl-1 py-2">Client Name</label>
                <input
                  ref={projectType}
                  type="text"
                  className="w-[40vw ] h-[40px] rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white pl-1 py-2">Project Manager</label>
                <Select
                  isMulti
                  name="projectManagers"
                  options={employeeOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={setSelectedEmployees}
                />
              </div>
            </div>
            <div className="pl-32 py-5">
              <div className="flex flex-col">
                <label className="text-white pl-1 py-2">
                  Developing Platform
                </label>
                <input
                  ref={developingPlatform}
                  type="text"
                  className="w-[40vw] h-[40px] rounded-xl"
                />
              </div>
              <div className="flex flex-col  my-5">
                <label className="text-white pl-1 py-2">
                  Database Technology
                </label>
                <input
                  ref={databaseTechnology}
                  type="text"
                  className="w-[40vw] h-[40px] rounded-xl"
                />
              </div>
              <div className="flex flex-col  my-5">
                <label className="text-white pl-1 py-2">
                  Project Description
                </label>
                <input
                  ref={projectDescription}
                  type="text"
                  className="w-[40vw] h-[120px] rounded-xl"
                />
              </div>
            </div>
          </div>
          {error && (
            <div className="text-red-500 font-bold text-center mt-0">
              {error}
            </div>
          )}
          <button className=" mx-[46%] w-28 mt-0 text-center text-white h-[34px] bg-violet-500 mr-5 hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 rounded-lg active:font-semibold active:shadow-2xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddProject;
