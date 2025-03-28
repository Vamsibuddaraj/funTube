import React from 'react'
import { FUNTUBE_LOGO, HAMBURG_ICON, SEARCH_ICON } from '../utils/logoConstants'
import { useDispatch } from 'react-redux'
import { toggleView } from '../store/sideBarSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSideBarView  = () => {
    console.log("clickef")
    dispatch(toggleView())
  }
  return (
    <div className='flex bg-gray-100 justify-between pt-3 pb-3 shadow-xl w-screen z-20 fixed'>
        <div className='flex '>
            <img onClick={handleSideBarView} className='w-11 h-11 ' src={HAMBURG_ICON} alt='hamburg-icon'/>
            <img onClick={()=>navigate("/")} className='ml-3 w-25 mt-2 h-6' src={FUNTUBE_LOGO} alt='funtube-logo'/>
        </div>
        <div className='flex w-1/2 justify-center'>
          <input className='p-2 grow border-2 border-gray-300 rounded-l-full ' placeholder='Search'/>
          <button className='p-2 px-6 border border-gray-300 rounded-r-full '>
            <img className='w-5 h-5' src={SEARCH_ICON}/>
          </button>
        </div>
        <div className='mt-3 pr-3'>
          <p>Sign IN</p>
        </div>
    </div>
  )
}

export default Header