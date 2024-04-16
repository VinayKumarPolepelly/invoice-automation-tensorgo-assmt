import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <div>
      <div>
        <ul className="flex justify-between border shadow-lg">
          <Link to={'/admin'}>
            <li className="m-5">Home</li>
          </Link>
          <Link to={'/admin/employees'}>
            <li className="m-5">Employees</li>
          </Link>
          <Link to={'/admin/addsalary'}>
            <li className="m-5">Add Salary</li>
          </Link>
          <Link to={'/admin/addproject'}>
            <li className="m-5">Add Project</li>
          </Link>
          <Link to={'/admin/salarydetails'}>
            <li className="m-5">Salary Details</li>
          </Link>
          <Link to={'/admin/projectdetails'}>
            <li className="m-5">Project Details</li>
          </Link>
          <Link to={'/admin/projectreport'}>
            <li className="m-5">Project Report</li>
          </Link>
          <Link to={'/admin/leavereport'}>
            <li className="m-5">Leave Reports</li>
          </Link>
          <li className="m-5">Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default AdminHeader
