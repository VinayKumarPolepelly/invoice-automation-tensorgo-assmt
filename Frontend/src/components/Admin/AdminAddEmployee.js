import React, { useRef } from "react";
import AdminHeader from "./AdminHeader";

const AdminAddEmployee = () => {
  const username = useRef();
  const fullname = useRef();
  const email = useRef();
  const password = useRef();
  const phoneNumber = useRef();
  const role = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      user_name: username.current.value,
      full_name: fullname.current.value,
      email: email.current.value,
      password: password.current.value,
      phone_Number: phoneNumber.current.value,
      role: role.current.value,
    };
    const data1 = JSON.stringify(userDetails);
    const url = "http://localhost:3001/api/additem";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data1,
    });
    const data = await response.json();
    if (response.ok === true) {
      console.log(data);
      alert("item inserted successfully");
    } else {
      alert(data);
      console.log(response.ok);
      console.log(data);
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className=" flex justify-center items-center  bg-violet-500 h-screen">
        <div className="flex bg-white shadow-2xl h-[400px] w-[700px] ">
          <div>
            <img
              src="https://upraise.io/wp-content/uploads/2022/12/10-Functions-of-Human-Resource-Management-banner2.webp"
              alt="this is login page logo"
              className="h-[400px] w-[400px]"
            />
          </div>
          <form className=" flex flex-col mt-10">
            <h1 className="text-2xl text-violet-600  font-bold ml-6">
              Add Employee
            </h1>
            <label className="mt-3 ml-5">Employee Name</label>
            <input
              type="text"
              placeholder="Enter Employee Name"
              className="mt-1 ml-5 mr-5 border-2  px-3 text-sm border-gray-500 rounded-lg h-9"
            />
            <label className="mt-3 ml-5 px-1">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="mt-1 ml-5 mr-5 border-2  px-3 text-sm border-gray-500 rounded-lg h-9"
            />
            <label className="mt-2 ml-5  px-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="mt-1 ml-5 mr-5 border-2 border-gray-500 text-sm rounded-lg h-9  px-3"
            />
            <button className=" mt-6 ml-5 text-center text-white h-[34px]  bg-violet-500 mr-5 rounded-md">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddEmployee;
