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
      <div className="  h-screen">
        <div className="w-9/12 mt-[80px] m-auto flex bg-white shadow-2xl h-[400px]  rounded-2xl">
          <div>
            <img
              src="https://upraise.io/wp-content/uploads/2022/12/10-Functions-of-Human-Resource-Management-banner2.webp"
              alt="this is login page logo"
              className="h-[400px] w-[400px]"
            />
          </div>
          <form className=" flex flex-col mt-10 ml-4">
            <h1 className="text-2xl text-violet-600  font-bold ml-6">
              Add Employee
            </h1>
            <div className="flex">
              <div>
                <label className="mt-3 ml-5">Username</label>
                <input
                  type="text"
                  placeholder="Enter Employee Name"
                  className="mt-1 ml-5 mr-5 border-2 w-[200px] px-3 text-sm border-gray-500 rounded-lg h-9"
                />
              </div>
              <div>
                <label className="mt-3 m-2">Fullname</label>
                <input
                  type="text"
                  placeholder="Enter Employee Name"
                  className="mt-1 ml-1 mr-5 border-2 w-[200px] px-3 text-sm border-gray-500 rounded-lg h-9"
                />
              </div>
            </div>
            <div className="flex mt-3">
              <div>
                <label className="mt-3 ml-5">Password</label>
                <input
                  type="password"
                  placeholder="Enter Employee Name"
                  className="mt-1 ml-5 mr-5 border-2 w-[200px] px-3 text-sm border-gray-500 rounded-lg h-9"
                />
              </div>
              <div className="flex-col">
                <label className="mt-3 m-2 mr-7">Email</label>
                <input
                  type="text"
                  placeholder="Enter Employee Name"
                  className="mt-1 ml-1 mr-5 border-2 w-[200px] px-3 text-sm border-gray-500 rounded-lg h-9"
                />
              </div>
            </div>
            <div className="flex mt-3">
              <div>
                <label className="mt-3 ml-5">Phone No.</label>
                <input
                  type="text"
                  placeholder="Enter Employee Name"
                  className="mt-1 ml-5 mr-5 border-2 w-[200px] px-3 text-sm border-gray-500 rounded-lg h-9"
                />
              </div>
              <div>
                <label className="mt-3 m-2 mr-7">Role</label>
                <input
                  type="text"
                  placeholder="Enter Employee Name"
                  className="mt-1 ml-1 mr-5 border-2 w-[200px] px-3 text-sm border-gray-500 rounded-lg h-9"
                />
              </div>
            </div>

            <button className="mt-7  ml-[170px] text-center w-[200px] text-white h-[34px]  bg-violet-500 mr-5  hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 rounded-xl active:border-collapse active:font-semibold active:shadow-2xl">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddEmployee;
