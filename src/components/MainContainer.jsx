import React, { useEffect, useState } from 'react'
import CustomFilters from './CustomFilters'
import VideosBackground from './VideosBackground'
import { useDispatch,useSelector } from 'react-redux'
import { toggleView } from '../store/sideBarSlice'

const MainContainer = () => {
  const dispatch = useDispatch()
  const sidebarView = useSelector(store=>store.sideBarList.sideBarView)
  const [fallback,setFallback] = useState(true)
  useEffect(()=>{
    if(!sidebarView){
      dispatch(toggleView())
    }
    setTimeout(()=>{
      setFallback(false)
    },3000)
  },[])


  return (
    <div className={`ml-3 ${!sidebarView?"w-[100%]":"w-[80%]"} h-screen`}>
      {
        !fallback?
        <>
          <CustomFilters />
          <VideosBackground />
        </>
        :<>

        </>

      }
    </div>
  )
}

export default MainContainer