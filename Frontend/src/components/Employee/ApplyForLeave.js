import React, { useState } from "react";

const ApplyForLeave = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Leave Request Submitted:", { fromDate, toDate, reason });
  };
  return (
    <div>
      <div className=" p-2 m-2 mr-[-1px] bg-violet-500  rounded-lg mt-3">
        <h1 className="font-semibold text-white text-lg">Request for Leave</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group ml-[75px]  mt-3">
            <label htmlFor="fromDate" className="text-sm">
              From Date:
            </label>
            <input
              className="ml-[10px] "
              type="date"
              id="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group ml-[75px] mt-3">
            <label htmlFor="toDate" className="text-sm">
              To Date:
            </label>
            <input
              className="ml-7 "
              type="date"
              id="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group ml-[75px]  mt-3">
            <label htmlFor="reason" className="text-sm ">
              Reason:
            </label>
            <textarea
              className="ml-4 "
              id="reason"
              value={reason}
              rows="3"
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason for leave"
              required
            ></textarea>
          </div>
          <div className="flex mt-8 ml-[70px]">
            <input type="checkbox" className="mr-3 mt-[-12px]" required />
            <h1 className="text-xs text-gray-600">
              I accepts all the terms and conditions of <br /> the company
            </h1>
          </div>
          <button
            type="submit"
            className=" bg-violet-500 w-[100px] h-10 rounded-lg ml-[130px] mt-6 text-white hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 active:border-collapse active:font-semibold active:shadow-2xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForLeave;
