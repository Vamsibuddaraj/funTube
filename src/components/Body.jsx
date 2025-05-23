import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex pt-25 w-[100%]'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Body