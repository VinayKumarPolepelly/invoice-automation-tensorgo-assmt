import React from 'react'
import EmployeeHeader from './EmployeeHeader'

const SalaryDetails = () => {
  return (
    <div>
      <div>
        <EmployeeHeader />
      </div>
      <div className="m-5">
        <h1 className="text-center text-xl font-bold my-10 text-violet-600 ">
          {' '}
          Salary Details
        </h1>
        <div className=" flex justify-center items-center justify-evenly">
          <p className="text-xl font-semibold">Employee Name</p>
          <p className="text-xl font-semibold"> Amount</p>
          <p className="text-xl font-semibold">Month</p>
          <p className="text-xl font-semibold">Transaction time</p>
        </div>
      </div>
    </div>
  )
}

export default SalaryDetails
