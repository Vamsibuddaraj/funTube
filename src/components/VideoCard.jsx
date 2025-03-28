import React from 'react'

const VideoCard = ({video}) => {
    const thumbnail = video.snippet.thumbnails.standard.url
    const title = video.snippet.title
  return (
    <div className='p-2 m-4 sm:m-2 flex flex-col w-120 h-90 md:w-65 shadow-2xl md:h-65'>
        <img className=' w-120 h-70 md:w-65 md:h-45 rounded-2xl' src={thumbnail}/>
        <p className='font-medium'>{title}</p>
    </div>
  )
}

export default VideoCard