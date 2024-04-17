import EmployeeHeader from "./EmployeeHeader";
import ApplyForLeave from "./ApplyForLeave";
import { useState } from "react";

const LeaveReport = () => {
  const [showItem, setShowItem] = useState(false);
  const handlerClick = () => {
    setShowItem(true);
  };

  return (
    <div>
      <div>
        <EmployeeHeader />
        <div className="mt-4">
          <h1 className="text-xl font-bold m-3 mt-5 ml-4">Leave Dashboard</h1>
          <div className="flex ">
            <div className="bg-gray-100  pr-2 pt-2 pb-3 w-4/12  rounded-2xl ml-3">
              <div className="flex p-3 border-4 border-gray-300 px-5 ml-3">
                <div className="border-black  p-2 ">
                  <div className="bg-green-300 p-2 w-11 text-center rounded-md">
                    <h1
                      className="text-white font-bold text-2xl "
                      id="daysLeft"
                    >
                      6
                    </h1>
                  </div>
                  <h2 className="text-gray-700 font-semibold text-sm ml-1">
                    Days
                  </h2>
                </div>
                <h1 className="mt-5 text-lg font-font-medium ml-9">
                  Available Leaves
                </h1>
                <div>
                  <button
                    className=" bg-violet-500 w-[100px] h-10 rounded-lg ml-[50px] mt-4  text-white hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 active:border-collapse active:font-semibold active:shadow-2xl"
                    onClick={handlerClick}
                  >
                    Apply
                  </button>
                </div>
              </div>
              {showItem && <ApplyForLeave />}
            </div>
            <div className="bg-gray-100 w-8/12 h-[530px] ml-2 mr-2 rounded-t-2xl">
              <div className="bg-violet-500 p-3 rounded-t-2xl text-center">
                <h1 className="text-white font-bold text-xl">LEAVE HISTORY</h1>
              </div>
              <div className="bg-gray-200 text-black p-2  font-bold flex justify-between ">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
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
                      <td className="px-6 py-4 whitespace-no-wrap">
                        15-04-2024
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        17-04-2024
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        20-04-2024
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        Family Trip
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">Pending</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        18-03-2024
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        19-03-2024
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        21-03-2024
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        Health Issue
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">Approved</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveReport;
