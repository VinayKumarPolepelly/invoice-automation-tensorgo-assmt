import React from 'react'
import AdminHeader from './AdminHeader'

const AdminProjectReport = () => {
  return (
    <div>
      <AdminHeader />
      <div className=" bg-violet-700 h-[100vh]">
        <h1 className="text-center text-white text-xl font-bold py-5">
          {' '}
          Project Report
        </h1>
        <div className=" flex justify-center items-center justify-evenly text-white mt-10">
          <p className="text-lg font-medium">Project Name</p>
          <p className="text-lg font-medium">Employee Id</p>
          <p className="text-lg font-medium">Employee Name</p>
          <p className="text-lg font-medium">Report</p>
          <p className="text-lg font-medium">Reported Time</p>
        </div>
      </div>
    </div>
  )
}

export default AdminProjectReport
