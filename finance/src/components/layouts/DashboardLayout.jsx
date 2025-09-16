import React from 'react'
import Sidebar from '../../pages/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="flex light-green-tint min-h-full ">
      <Sidebar />
      <div className="flex-1 bg-white shadow-md rounded-3xl p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
