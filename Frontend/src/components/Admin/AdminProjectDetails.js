import React from 'react'
import AdminHeader from './AdminHeader'

const AdminProjectDetails = () => {
  return (
    <div>
      <AdminHeader />
      <div className=" bg-violet-700 h-[100vh]">
        <h1 className="text-center text-white text-xl font-bold py-5">
          {' '}
          Project Details
        </h1>
        <div className=" flex justify-center items-center justify-evenly text-white mt-10">
          <p className="text-lg font-medium">Project Name</p>
          <p className="text-lg font-medium">Client Name</p>
          <p className="text-lg font-medium">Project Type</p>
          <p className="text-lg font-medium">Development Platform</p>
          <p className="text-lg font-medium">Database Technology</p>
          <p className="text-lg font-medium">Description </p>
          <p className="text-lg font-medium">Added Time</p>
        </div>
      </div>
    </div>
  )
}

export default AdminProjectDetails
