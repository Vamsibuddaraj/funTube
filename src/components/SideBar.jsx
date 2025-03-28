import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const {sideBarList,sideBarView} = useSelector(store=>store.sideBarList)
  if(!sideBarView) return null
  return (
    <div className='flex -mt-10  flex-col pt-8 shadow-2xl w-[16%]'>
      {sideBarList.map(item=>{
        return( 
          <div key={item.list} className='flex pl-6  h-12'>
            {/* <img className='w-20 h-16' src={item.url} alt={item.name}/> */}
            <p>{item.list}</p>
          </div>
          )
      })}
    </div>
  )
}

export default SideBar