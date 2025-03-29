import React, { useEffect } from 'react'
import CustomFilters from './CustomFilters'
import VideosBackground from './VideosBackground'
import { useDispatch } from 'react-redux'
import { toggleView } from '../store/sideBarSlice'

const MainContainer = () => {
  const dispatch = useDispatch()
  console.log("back to root")
  useEffect(()=>{
    dispatch(toggleView())
  },[])
  return (
    <div className='ml-3 w-[80%] h-screen'>
      <CustomFilters />
      <VideosBackground />
    </div>
  )
}

export default MainContainer