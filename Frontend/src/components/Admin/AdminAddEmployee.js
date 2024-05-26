import React, { useRef, useState } from "react";
import AdminHeader from "./AdminHeader";
import { useNavigate } from "react-router-dom";

const AdminAddEmployee = () => {
  const [error, setError] = useState(null);
  const username = useRef();
  const fullname = useRef();
  const email = useRef();
  const password = useRef();
  const phoneNumber = useRef();
  const role = useRef();
  const navigate = useNavigate();

  const handlesubmitform = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/api/v1/admins/register";

    const data = {
      username: username.current.value,
      password: password.current.value,
      fullname: fullname.current.value,
      email: email.current.value,
      phoneNumber: phoneNumber.current.value,
      role: role.current.value,
    };

    const userDetails = JSON.stringify(data);
    console.log(userDetails);
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: userDetails,
    });
    const data2 = await response.json();
    if (response.ok === true) {
      alert("employee added successfully");
      navigate("/admin/employees");
    } else {
      console.log(data2?.message);
      if (error.message === "Network response was not ok") navigate("/");
      setError(data2?.message);
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="  h-screen">
        <div className="w-9/12 mt-[80px] m-auto flex bg-white shadow-2xl h-[400px]  rounded-2xl">
          <div>
            <img
              src="https://upraise.io/wp-content/uploads/2022/12/10-Functions-of-Human-Resource-Management-banner2.webp"
              alt="this is login page logo"
              className="h-[400px] w-[400px]"
            />
          </div>
          <form
            onSubmit={handlesubmitform}
            className=" flex flex-col mt-10 ml-4"
          >
            <h1 className="text-2xl text-violet-600  font-bold ml-6">
              Add Employee
            </h1>
            <div className="flex">
              <div>
                <label className="mt-3 ml-5">Username</label>
                <input
                  ref={username}
                  type="text"
                  placeholder="Enter Employee username"
                  className="mt-1 ml-5 mr-5 border-2 w-[200px] px-3 text-sm border-gray-500 rounded-lg h-9"
                />
              </div>
              <div>
                <label className="mt-3 m-2">Fullname</label>
                <input
                  ref={fullname}
                  type="text"
                  placeholder="Enter Employee Fullname"
                  className="mt-1 ml-1 mr-5 border-2 w-[200px] px-3 text-sm border-gray-500 rounded-lg h-9"
                />
              </div>
            </div>
            <div className="flex mt-3">
              <div>
                <label className="mt-3 ml-5">Password</label>
                <input
                  ref={password}
                  type="password"
                  placeholder="Enter Employee Password"
                  className="mt-1 ml-5 mr-5 border-2 w-[200px] px-3 text-sm border-gray-500 rounded-lg h-9"
                />
              </div>
              <div className="flex-col">
                <label className="mt-3 m-2 mr-7">Email</label>
                <input
                  ref={email}
                  type="text"
                  placeholder="Enter Employee Email"
                  className="mt-1 ml-1 mr-5 border-2 w-[200px] px-3 text-sm border-gray-500 rounded-lg h-9"
                />
              </div>
            </div>
            <div className="flex mt-3">
              <div>
                <label className="mt-3 ml-5">Phone No.</label>
                <input
                  ref={phoneNumber}
                  type="text"
                  placeholder="Enter Employee Phone No"
                  className="mt-1 ml-5 mr-5 border-2 w-[200px] px-3 text-sm border-gray-500 rounded-lg h-9"
                />
              </div>
              <div>
                <label className="mt-3 m-2 mr-7">Role</label>
                <input
                  ref={role}
                  type="text"
                  placeholder="Enter Employee Role"
                  className="mt-1 ml-1 mr-5 border-2 w-[200px] px-3 text-sm border-gray-500 rounded-lg h-9"
                />
              </div>
            </div>
            {error && (
              <div className="text-red-900  ml-[130px] text-center w-[200px] mt-3 font-bold">
                <h2>{error}</h2>
              </div>
            )}
            <button className="mt-3  ml-[130px] text-center w-[200px] text-white h-[34px]  bg-violet-500 mr-5  hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 rounded-xl active:border-collapse active:font-semibold active:shadow-2xl">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddEmployee;
