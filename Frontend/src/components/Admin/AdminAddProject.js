import React, { useRef, useState } from "react";
import AdminHeader from "./AdminHeader";
import { useNavigate } from "react-router-dom";

const AdminAddProject = () => {
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
    const url = "http://localhost:3001/api/v1/admins/addProject";

    const data = {
      projectTitle: projectTitle.current.value,
      clientName: clientName.current.value,
      projectType: projectType.current.value,
      developingPlatform: developingPlatform.current.value,
      databaseTechnology: databaseTechnology.current.value,
      projectDescription: projectDescription.current.value,
    };

    const projectDetails = JSON.stringify(data);
    console.log(projectDetails);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: projectDetails,
    });
    const data2 = await response.json();
    if (response.ok === true) {
      alert("project added successfully");
      navigate("/admin/projectdetails");
    } else {
      console.log(data2);
      setError(data2?.message);
    }
  };
  return (
    <div>
      <AdminHeader />
      <div className=" bg-violet-700 h-[100vh]">
        <h1 className="text-center text-white text-xl font-bold py-5">
          {" "}
          ADD PROJECT
        </h1>
        <form onSubmit={handlesubmitform}>
          <div className="flex flex-row m-10 flex-wrap">
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
          {error && <div className="text-red-500 text-center">{error}</div>}
          <button>Add Project</button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddProject;
