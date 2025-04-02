import React, { useEffect } from 'react'
import CustomFilters from './CustomFilters'
import VideosBackground from './VideosBackground'
import { useDispatch,useSelector } from 'react-redux'
import { toggleView } from '../store/sideBarSlice'

const MainContainer = () => {
  // const dispatch = useDispatch()
  // console.log("back to root")
  // useEffect(()=>{
  //   dispatch(toggleView())
  // },[])

  const dispatch = useDispatch()
  const sidebarView = useSelector(store=>store.sideBarList.sideBarView)
  useEffect(()=>{
    console.log("Sideview",sidebarView)
    if(!sidebarView){
      dispatch(toggleView())
    }
  },[])


  return (
    <div className={`ml-3 ${!sidebarView?"w-[100%]":"w-[80%]"} h-screen`}>
      <CustomFilters />
      <VideosBackground />
    </div>
  )
}

export default MainContainer