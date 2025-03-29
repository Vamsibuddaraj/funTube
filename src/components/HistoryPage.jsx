import React from 'react'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'

const HistoryPage = () => {
    const history = useSelector(store=>store.history)
    console.log("history",history)
  return (
    <div>
        <h1 className='font-bold pl-5'>History</h1>
        <div className='flex'>
            {history.map(video=><VideoCard key={video.id} video={video}/>)}
        </div>
    </div>
  )
}

export default HistoryPage