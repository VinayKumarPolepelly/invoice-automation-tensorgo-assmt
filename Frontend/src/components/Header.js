import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className="flex justify-between border-3 border bg-white rounded-2xl ">
        <div>
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30165846/1843.png"
            className="w-[85px] "
            alt="This is hr logo"
          />
        </div>
        <ul className="flex justify-between px-10 py-4 text-center mt-1">
          <Link to="/">
            {' '}
            <li className="px-3 text-xl font-sans font-semibold hover:text-blue-500">
              Home
            </li>
          </Link>

          <Link to="/employeeLogin/">
            <li className="px-3 text-xl font-sans font-semibold  hover:text-blue-500">
              Employee
            </li>
          </Link>
          <Link to="/managerLogin/">
            <li className="px-3 text-xl font-sans font-semibold  hover:text-blue-500">
              Manager
            </li>
          </Link>
          <Link to="/Adminlogin/">
            <li className="px-3 text-xl font-sans font-semibold  hover:text-blue-500">
              Admin
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
