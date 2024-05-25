import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import { MdDelete } from 'react-icons/md'
const AdminSalaryDetails = () => {
  const [salaries, setSalaries] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSalaryDetails = async () => {
      try {
        const response = await fetch(
          'http://localhost:3001/api/v1/admins/getSalarees',
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
        if (json?.salarees) {
          setSalaries(json.salarees)
        } else {
          throw new Error('No Salary field in response')
        }
      } catch (error) {
        setError('Error fetching Salaries data')
      }
    }

    fetchSalaryDetails()
  }, [])

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }

  return (
    <div>
      <AdminHeader />
      <div className="p-2">
        <div className="bg-gray-50 h-[570px] rounded-t-2xl m-auto mt-6 p-1">
          <div className="bg-violet-500 p-3 rounded-t-2xl text-center">
            <h1 className="text-white font-bold text-xl text-center">
              SALARY DETAILS
            </h1>
          </div>
          {error ? (
            <div className="bg-red-500 text-white p-3 rounded-t-2xl text-center">
              <h2 className="text-white font-bold text-xl text-center">
                {error}
              </h2>
            </div>
          ) : (
            <div className="bg-gray-200 text-black p-2 font-bold flex justify-between">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-center bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-center bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Salary Amount
                    </th>
                    <th className="px-6 py-3 text-center bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Month
                    </th>
                    <th className="px-6 py-3 text-center bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Credited On
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {salaries.length > 0 ? (
                    salaries.map((salary) => (
                      <tr key={salary._id}>
                        <td className="px-6 py-4 whitespace-no-wrap font-normal text-center">
                          {salary.user}
                        </td>
                        <td className="px-5 py-4 whitespace-no-wrap font-normal text-center">
                          {salary.salaryAmount}
                        </td>
                        <td className="px-5 py-4 whitespace-no-wrap font-normal text-center">
                          {salary.month}
                        </td>
                        <td className="px-5 py-4 whitespace-no-wrap font-normal text-center">
                          <div className="flex justify-center items-center">
                            <span>{formatDate(salary.createdAt)}</span>
                            <button className=" text-purple-500  hover:text-purple-700">
                              <MdDelete className="ml-5 w-6 h-6" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="px-6 py-4 whitespace-no-wrap text-center font-normal"
                      >
                        No salaries available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminSalaryDetails
