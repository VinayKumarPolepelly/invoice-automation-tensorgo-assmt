import React from 'react'
import AdminHeader from './AdminHeader'

const AdminBrowse = () => {
  return (
    <div className="bg-white">
      <AdminHeader />
      <div className=" bg-violet-700 h-[100%] pb-64">
        <h1 className="text-white text-2xl text-center pt-6 font-semibold">
          Welcome Admin!
        </h1>
        <div className="flex justify-center items-center">
          <img
            src="https://ams3.digitaloceanspaces.com/digital-practice/static/amava/img/digital/digital_practice_leave_management.png"
            alt="hr page logo "
            className="h-[550px] w-[700px]"
          />
        </div>
      </div>
    </div>
  )
}

export default AdminBrowse
