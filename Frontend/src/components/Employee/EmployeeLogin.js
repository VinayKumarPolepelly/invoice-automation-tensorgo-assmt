import React, { useRef } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handlesubmitform = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/api/v1/users/login";

    const data = {
      username: username.current.value,
      password: password.current.value,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const responseData = await response.json();
      console.log(responseData);
      console.log(responseData.data.accessToken);

      // Assuming responseData.accessToken contains the access token
      // Set the accessToken cookie
      document.cookie = `accessToken=${responseData.data.accessToken}; Secure; SameSite=None; Path=/`;

      navigate("/EmployeeHomepage");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error
    }
  };

  return (
    <div>
      <Header />
      <div className=" flex justify-center items-center   h-screen">
        <div className="flex bg-white shadow-2xl h-[400px] w-[700px] ">
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
              alt="this is login page logo"
              className="h-[400px] w-[400px]"
            />
          </div>
          <form className=" flex flex-col mt-10" onSubmit={handlesubmitform}>
            <h1 className="text-2xl text-violet-600  font-bold ml-6">
              Employee Login Page
            </h1>
            <label className="mt-3 ml-5 px-1 text-lg">Username</label>
            <input
              type="text"
              ref={username}
              placeholder="Enter Username"
              className="mt-2 ml-5 mr-5 border-2  px-3 text-md pt-1 border-gray-500   w-[200px] rounded-lg h-9"
            />
            <label className="mt-2 ml-5  px-1 text-lg">Password</label>
            <input
              type="password"
              ref={password}
              placeholder="Enter Password"
              className="mt-2 ml-5 mr-5 border-2 pt-1 border-gray-500 text-md rounded-lg h-9  w-[200px] px-3"
            />
            <button className=" mt-6 ml-5 text-center text-white h-[34px]  bg-violet-500 mr-5 w-[200px] hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 active:border-collapse active:font-semibold active:shadow-2xl rounded-lg">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
