import React from "react";
import AdminHeader from "./AdminHeader";

const AdminSalaryDetails = () => {
  return (
    <div>
      <AdminHeader />
      <div className="p-2">
        <div className="bg-gray-50  h-[570px] rounded-t-2xl m-auto  mt-6 p-1">
          <div className="bg-violet-500 p-3 rounded-t-2xl text-center">
            <h1 className="text-white font-bold text-xl">SALARY DETAILS</h1>
          </div>
          <div className="bg-gray-200 text-black p-2  font-bold flex justify-between ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Salary Ammount
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    End Date
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Credited On
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap font-normal">
                    Vinay Kumar
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    1000000
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    14-03-2024
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    14-04-2024
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    15-04-2024
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

export default AdminSalaryDetails;
