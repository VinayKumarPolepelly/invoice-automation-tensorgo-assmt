import React from 'react'
import { Link } from 'react-router-dom'
const EmployeeHeader = () => {
  return (
    <div>
      <div className="">
        <ul className="flex justify-between px-10 py-4 text-center  bg-violet-500">
          <Link to="/employeeHomepage/">
            <li className="text-lg text-white">Home</li>
          </Link>
          <Link to="/employeeSalaryDetails/">
            <li className="text-white">Salary Details</li>
          </Link>
          <Link to="/employeeProjectDetails">
            <li className="text-white">Project Details</li>
          </Link>
          <Link to="/employeeProjectReport/">
            <li className="text-white">Project Report</li>
          </Link>
          <Link to="/employeeLeaveReport/">
            <li className="text-white">Leave Report</li>
          </Link>

          <li className="text-white">Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default EmployeeHeader
