import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useState } from 'react'

const UserProfileIcon = (props) => {
  const { si } = props
  return (
    <div>
      <FaUser size={si} />
    </div>
  )
}
const Logout = () => {
  return (
    <div className="flex justify-end ">
      <div className="w-[200px]  h-[200px] text-center p-5 bg-gray-100 border-4 border-violet-200 shadow-2xl mt-[-22px] mr-[65px]  absolute rounded-xl rounded-tr-none ">
        <div className="ml-[46px] h-[65px] w-[65px] mt-[-6px] text-violet-500 rounded-full border-solid border-violet-500   border-4 p-1 cursor-pointer active:border-gray-400 ">
          <UserProfileIcon si={48} />
        </div>
        <h1 className="mt-4 ml-1 mb-3">Nikhil</h1>
        <button className="text-sm text-white ml-1 border-2 p-[6px]  bg-violet-500 hover:bg-violet-600 hover:shadow-lg active:bg-violet-700 rounded-lg active:border-collapse active:font-semibold active:shadow-2xl">
          LogOut
        </button>
      </div>
    </div>
  )
}
const EmployeeHeader = () => {
  const [showItem, setShowItem] = useState(false)
  const handleClick = () => {
    setShowItem(!showItem)
  }
  return (
    <div>
      <div className="sticky top-0">
        <ul className="flex justify-between px-10 py-4 text-center rounded-b-lg  sticky top-0  bg-violet-500">
          <Link to="/employeeHomepage/">
            <li className="active:font-semibold text-white">Home</li>
          </Link>
          <Link to="/employeeSalaryDetails/">
            <li className="text-white active:font-semibold">Salary Details</li>
          </Link>
          <Link to="/employeeProjectDetails">
            <li className="text-white active:font-semibold">Project Details</li>
          </Link>
          <Link to="/employeeProjectReport/">
            <li className="text-white active:font-semibold">Project Report</li>
          </Link>
          <Link to="/employeeLeaveReport/">
            <li className="text-white active:font-semibold">Leave Report</li>
          </Link>
          <Link to="/employeeLogin/">
            <li>
              <div
                className="h-9 w-10 mt-[-6px] text-white rounded-3xl border-solid  border-4 p-1 cursor-pointer active:border-gray-400 "
                onClick={handleClick}
              >
                <UserProfileIcon si={25} />
              </div>
            </li>
          </Link>
        </ul>
        {showItem && <Logout />}
      </div>
    </div>
  )
}

export default EmployeeHeader
