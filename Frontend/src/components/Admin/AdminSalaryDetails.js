import React from 'react'
import AdminHeader from './AdminHeader'

const AdminSalaryDetails = () => {
  return (
    <div>
      <AdminHeader />
      <div className=" bg-violet-700 h-[100vh]">
        <h1 className="text-center text-white text-xl font-bold py-5">
          {' '}
          Salary Details
        </h1>
        <div className=" flex justify-center items-center justify-evenly text-white mt-10">
          <p className="text-lg font-medium">Employee Id</p>
          <p className="text-lg font-medium">Employee Name</p>
          <p className="text-lg font-medium">Amount</p>
          <p className="text-lg font-medium">Month</p>
          <p className="text-lg font-medium">Transaction Time</p>
        </div>
      </div>
    </div>
  )
}

export default AdminSalaryDetails
