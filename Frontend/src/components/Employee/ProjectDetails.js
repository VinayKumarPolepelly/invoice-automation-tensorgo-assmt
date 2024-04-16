import React from 'react'
import EmployeeHeader from './EmployeeHeader'

const ProjectDetails = () => {
  return (
    <div>
      <div>
        <EmployeeHeader />
      </div>
      <div className="m-5">
        <h1 className="text-center text-xl font-bold my-10 text-violet-600 ">
          {' '}
          Project Details
        </h1>
        <div className=" flex justify-center items-center justify-evenly">
          <p className="text-xl font-semibold">Project Name</p>
          <p className="text-xl font-semibold">Client Name</p>
          <p className="text-xl font-semibold">Project Type</p>
          <p className="text-xl font-semibold">Development Platform</p>
          <p className="text-xl font-semibold">Database Technology</p>
          <p className="text-xl font-semibold">Description </p>
          <p className="text-xl font-semibold">Added Time</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
