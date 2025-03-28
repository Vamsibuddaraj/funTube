import React from 'react'

const VideoCard = ({video}) => {
    const thumbnail = video.snippet.thumbnails.standard.url
    const title = video.snippet.title
  return (
    <div className='p-1 flex flex-col w-65'>
        <img className='w-65 h-45 rounded-2xl' src={thumbnail}/>
        <p className='font-medium'>{title}</p>
    </div>
  )
}

export default VideoCard