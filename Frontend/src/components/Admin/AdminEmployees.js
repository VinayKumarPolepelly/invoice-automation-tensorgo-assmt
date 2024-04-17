import React from 'react'
import AdminHeader from './AdminHeader'
import { Link } from 'react-router-dom'

const AdminEmployees = () => {
  return (
    <div>
      <AdminHeader />
      <div className=" bg-violet-700 h-[100vh]">
        <div className="flex justify-center">
          <img
            className="w-7 mt-5"
            src="https://cdn-icons-png.flaticon.com/128/2476/2476725.png"
            alt="employee logo"
          />
        </div>
        <div className="mx-auto w-40 ">
          <Link to={'/admin/addEmployee'}>
            <button className="mt-1 mx-4 border p-2 rounded-lg bg-violet-600 text-white">
              Add Employee
            </button>
          </Link>
        </div>
        <div className="mt-5">
          <h1 className="text-center text-white text-xl font-bold py-5">
            {' '}
            Employees
          </h1>
          <div className=" flex justify-center items-center justify-evenly text-white mt-3">
            <p className="text-lg font-medium">Employee Id</p>
            <p className="text-lg font-medium">Employee Name</p>
            <p className="text-lg font-medium">DOB</p>
            <p className="text-lg font-medium">Gender</p>
            <p className="text-lg font-medium"> Address</p>
            <p className="text-lg font-medium">Status</p>
            <p className="text-lg font-medium">Approve</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminEmployees
