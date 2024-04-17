import React from "react";
import EmployeeHeader from "./EmployeeHeader";

const SalaryDetails = () => {
  return (
    <div>
      <div>
        <EmployeeHeader />
        <div className="p-2">
          <div className="bg-gray-50  h-[570px] m-auto  mt-6 p-1">
            <div className="bg-violet-500 p-3 rounded-t-2xl text-center">
              <h1 className="text-white font-bold text-xl">SALARY DETAILS</h1>
            </div>
            <div className="bg-gray-200 text-black p-2  font-bold flex justify-between ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Salary amount
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      start date
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      end date
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      credited on
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap font-normal">
                      77078.60
                    </td>
                    <td className="px-5 py-4 whitespace-no-wrap font-normal">
                      15-03-2024
                    </td>
                    <td className="px-5 py-4 whitespace-no-wrap font-normal">
                      14-03-2024
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
    </div>
  );
};

export default SalaryDetails;
