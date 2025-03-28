import React from 'react'
import CustomFilters from './CustomFilters'
import VideosBackground from './VideosBackground'

const MainContainer = () => {
  return (
    <div className='ml-3 w-[80%]'>
      <CustomFilters />
      <VideosBackground />
    </div>
  )
}

export default MainContainer