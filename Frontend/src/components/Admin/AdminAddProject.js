import React from 'react'
import AdminHeader from './AdminHeader'

const AdminAddProject = () => {
  return (
    <div>
      <AdminHeader />
      <div className=" bg-violet-700 h-[100vh]">
        <h1 className="text-center text-white text-xl font-bold py-5">
          {' '}
          ADD PROJECT
        </h1>
        <div className="flex flex-row m-10 flex-wrap">
          <div className=" px-8 py-5 ">
            <div className="flex flex-col">
              <label className="text-white pl-1 py-2">Project Name</label>
              <input type="text" className="w-[40vw] h-[40px] rounded-xl" />
            </div>
            <div className="flex flex-col my-5">
              <label className="text-white pl-1 py-2">Project Type</label>
              <input type="text" className="w-[40vw ] h-[40px] rounded-xl" />
            </div>
            <div className="flex flex-col my-5">
              <label className="text-white pl-1 py-2">Client Name</label>
              <input type="text" className="w-[40vw ] h-[40px] rounded-xl" />
            </div>
            <div className="flex flex-col">
              <label className="text-white pl-1 py-2">Project Manager</label>
              <select
                name="manager-Name"
                id="managerName"
                className="mt-1 ml-1 border-2  pl-2 text-sm border-gray-500 rounded-xl h-9 w-[40vw] h-[43px]"
              >
                <option value="Nikhil">Nikhil</option>
                <option value="Sathwika">Sathwika</option>
                <option value="Vinay">Vinay</option>
              </select>
            </div>
          </div>
          <div className="pl-32 py-5">
            <div className="flex flex-col">
              <label className="text-white pl-1 py-2">
                Developing Platform
              </label>
              <input type="text" className="w-[40vw] h-[40px] rounded-xl" />
            </div>
            <div className="flex flex-col  my-5">
              <label className="text-white pl-1 py-2">
                Database Technology
              </label>
              <input type="text" className="w-[40vw] h-[40px] rounded-xl" />
            </div>
            <div className="flex flex-col  my-5">
              <label className="text-white pl-1 py-2">
                Project Description
              </label>
              <input type="text" className="w-[40vw] h-[120px] rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAddProject
