import React from 'react'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const HistoryPage = () => {
    const history = useSelector(store=>store.history)
    console.log("history",history)
  return (
    <div>
        <h1 className='font-bold pl-5'>History</h1>
        <div className='flex'>
            {history.map(video=>{
            return <Link key={video.id} to={`/watch?v=${video.id}`}><VideoCard  video={video}/></Link>
        })}
        </div>
    </div>
  )
}

export default HistoryPage