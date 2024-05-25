import React, { useEffect, useRef } from "react";
import EmployeeHeader from "./EmployeeHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ProjectReport = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/users/getProjectDetails",
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
        if (json?.projects) {
          setProjects(json.projects);
          console.log(json.projects);
        } else {
          throw new Error("No projects field in response");
        }
      } catch (error) {
        setError("Error fetching project data");
      }
    };

    fetchProjectDetails();
  }, []);

  const navigate = useNavigate();
  const project = useRef();
  const report = useRef();

  const handlesubmitform = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/api/v1/users/addProjectReport";

    const data = {
      project: project.current.value,
      report: report.current.value,
    };

    const reportDetails = JSON.stringify(data);
    console.log(reportDetails);
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: reportDetails,
    });
    const data2 = await response.json();
    if (response.ok === true) {
      alert("report submitted successfully");
      navigate("/employeeProjectReport");
    } else {
      console.log(data2);
      setError(data2?.message);
    }
  };

  return (
    <div>
      <div>
        <EmployeeHeader />
        <div>
          <div className="p-10 mt-8 text-center">
            <h1 className="font-bold text-2xl  ">Project Report</h1>
          </div>
          <form onSubmit={handlesubmitform}>
            <div className="w-6/12 mt-[-20px] m-auto">
              <div className="bg-gray-100 rounded-xl p-7  shadow-2xl">
                <h1 className="ml-9 text-sm font-medium">Select Project</h1>
                <label htmlFor="dropdown"></label>
                <select
                  ref={project}
                  name="projects"
                  id="project"
                  className="mt-1 ml-5 mr-5 border-2 px-3 text-sm border-gray-500 rounded-lg h-9"
                >
                  {projects.map((project) => (
                    <option key={project.id} value={project.projectTitle}>
                      {project.projectTitle}
                    </option>
                  ))}
                </select>
                <div className=" p-7 ">
                  <h1 className="ml-2 text-sm font-medium mb-4">
                    Project Report
                  </h1>
                  <textarea
                    ref={report}
                    className="rounded-lg w-[100%] p-2"
                    rows="4"
                    id="projectReportText"
                  />
                </div>
                <button className=" bg-violet-500 w-[100px] ml-[30px] h-10 rounded-lg  mt-3 text-white hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 active:border-collapse active:font-semibold active:shadow-2xl">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectReport;
