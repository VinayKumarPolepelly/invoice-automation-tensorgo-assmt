import React from 'react'
import AdminHeader from './AdminHeader'

const AdminLeaveReport = () => {
  return (
    <div>
      <AdminHeader />
      <div className=" bg-violet-700 h-[100vh]">
        <h1 className="text-center text-white text-xl font-bold py-5">
          {' '}
          Leave Reports
        </h1>
        <div className=" flex justify-center items-center justify-evenly text-white mt-10">
          <p className="text-lg font-medium">Employee Id</p>
          <p className="text-lg font-medium">Employee Name</p>
          <p className="text-lg font-medium">Leave Reason</p>
          <p className="text-lg font-medium">From Date</p>
          <p className="text-lg font-medium">To Date</p>
        </div>
      </div>
    </div>
  )
}

export default AdminLeaveReport
