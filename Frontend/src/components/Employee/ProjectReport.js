import React from 'react'
import EmployeeHeader from './EmployeeHeader'

const ProjectReport = () => {
  return (
    <div>
      <div>
        <EmployeeHeader />
      </div>
      <div className="m-5">
        <h1 className="text-center text-xl font-bold my-10 text-violet-600 ">
          {' '}
          Project Report
        </h1>
        <div className=" flex justify-center items-center justify-evenly"></div>
      </div>
    </div>
  )
}

export default ProjectReport
