import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between border-3 border bg-violet-500 shadow-2xl rounded-lg">
        <div className="border-8 border-violet-500 border-solid  rounded-lg">
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30165846/1843.png"
            className="w-[67px] "
            alt="This is hr logo"
          />
        </div>
        <ul className="flex justify-between px-10 py-4 text-center mt-1 text-white">
          <Link to="/">
            {" "}
            <li className="px-3 text-xl font-sans font-semibold active:font-semibold active:text-violet-200">
              Home
            </li>
          </Link>

          <Link to="/employeeLogin/">
            <li className="px-3 text-xl font-sans font-semibold active:font-semibold active:text-violet-200">
              Employee
            </li>
          </Link>

          <Link to="/Adminlogin/">
            <li className="px-3 text-xl font-sans font-semibold active:font-semibold active:text-violet-200">
              Admin
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
