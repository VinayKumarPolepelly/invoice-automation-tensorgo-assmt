import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import { MdDelete } from 'react-icons/md'
const AdminProjectReport = () => {
  const [projectReports, setProjectReports] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjectReportDetails = async () => {
      try {
        const response = await fetch(
          'http://localhost:3001/api/v1/admins/getProjectReports',
          {
            method: 'GET',
            credentials: 'include', // Include credentials (cookies)
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const json = await response.json()
        if (json?.projectReports) {
          setProjectReports(json.projectReports)
          console.log(json.projectReports)
        } else {
          throw new Error('No project Reports field in response')
        }
      } catch (error) {
        setError('Error fetching project Reports data')
      }
    }

    fetchProjectReportDetails()
  }, [])
  return (
    <div>
      <AdminHeader />
      <div className="p-2">
        <div className="bg-gray-50  h-[570px] rounded-t-2xl m-auto  mt-6 p-1">
          <div className="bg-violet-500 p-3 rounded-t-2xl text-center">
            <h1 className="text-white font-bold text-xl">PROJECT REPORT</h1>
          </div>
          <div className="bg-gray-200 text-black p-2  font-bold flex justify-between ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>

                  <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Report
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projectReports.map((report) => {
                  return (
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap font-normal text-center">
                        {report.project}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap font-normal text-center">
                        {report.user}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap font-normal text-center">
                        <div className="flex justify-center items-center">
                          <span>{report.report}</span>
                          <button className=" text-purple-500  hover:text-purple-700">
                            <MdDelete className="ml-5 w-6 h-6" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProjectReport
