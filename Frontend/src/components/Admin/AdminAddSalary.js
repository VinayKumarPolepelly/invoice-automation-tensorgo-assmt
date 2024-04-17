import React from "react";
import AdminHeader from "./AdminHeader";

const AdminAddSalary = () => {
  return (
    <div>
      <AdminHeader />
      <div className=" flex justify-center items-center  h-screen">
        <div className="flex bg-white shadow-2xl h-[400px] w-[700px]  rounded-2xl">
          <div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/salary-receipt-9522699-7725497.png?f=webp"
              alt="this is login page logo"
              className="h-[400px] w-[400px]"
            />
          </div>
          <form className=" flex flex-col mt-10">
            <h1 className="text-2xl text-violet-600  font-bold ml-6">
              Add Salary
            </h1>
            <label className="mt-3 ml-5">Employee Name</label>
            <input
              type="text"
              placeholder="Enter Employee Name"
              className="mt-1 ml-5 mr-5 border-2  px-3 text-sm border-gray-500 rounded-lg h-9"
            />
            <label className="mt-3 ml-5">Month</label>
            <select
              name="month"
              id="month"
              className="mt-1 ml-5 mr-5 border-2  px-3 text-sm border-gray-500 rounded-lg h-9"
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <label className="mt-2 ml-5  px-1">Amount</label>
            <input
              type="text"
              placeholder="Enter Amount"
              className="mt-1 ml-5 mr-5 border-2 border-gray-500 text-sm rounded-lg h-9  px-3"
            />
            <button className=" mt-6 ml-5 text-center text-white h-[34px]  bg-violet-500 mr-5 hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 rounded-lg active:border-collapse active:font-semibold active:shadow-2xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddSalary;
