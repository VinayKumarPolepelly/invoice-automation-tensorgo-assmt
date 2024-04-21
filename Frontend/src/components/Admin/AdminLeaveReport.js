import React from "react";
import AdminHeader from "./AdminHeader";
import { useState, useEffect } from "react";
const AdminLeaveReport = () => {
  const [selectedOption, setSelectedOption] = useState("Pending");
  const handleChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedOptionText = event.target.options[selectedIndex].text;
    setSelectedOption(selectedOptionText);
  };

  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const jsonData = await fetch(
      "http://localhost:3000/api/v1/admins/getLeaveReports"
    );
    console.log(jsonData);
  };
  return (
    <div>
      <AdminHeader />
      <div className="p-2">
        <div className="bg-gray-100  h-[600px] m-auto  mt-6">
          <div className="bg-violet-500 p-3 rounded-t-2xl text-center">
            <h1 className="text-white font-bold text-xl">LEAVE REQUESTS</h1>
          </div>
          <div className="bg-gray-200 text-black p-2  font-bold flex justify-between ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Requested On
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    From
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    To
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Reason
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap font-normal">
                    Mike
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    21-03-2024
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    19-03-2024
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    21-03-2024
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    Health Issue
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    <select
                      id="dropdown"
                      value={selectedOption}
                      onChange={handleChange}
                    >
                      <option
                        value="option1"
                        className="text-gray-500 text-sm "
                      >
                        {selectedOption}
                      </option>
                      <option value="option1">Pending</option>
                      <option value="option2">Approve</option>
                      <option value="option3">Decline</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLeaveReport;
