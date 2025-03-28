import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleView } from '../store/sideBarSlice'
import { useSearchParams } from 'react-router-dom'
import { DISLIKE_ICON, LIKE_ICON } from '../utils/constants'

const WatchPage = () => {
    const dispatch = useDispatch()
    const {sideBarView} = useSelector(store => store.sideBarList);
    const popularVideos = useSelector(store=>store.popularVideos)
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get("v")
    if(!videoId)return null
    const {snippet,statistics} = popularVideos.find(list=>list.id==videoId)
    console.log("videoData",snippet)
    useEffect(() => {
        if(sideBarView) {
            dispatch(toggleView());
        }
    }, []);
  return (
    <div className='w-[70%] ml-10'>
        <iframe className='rounded-2xl' width="800" height="400" src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className='w-[82%] pb-4 px-4 pt-2 shadow-2xl'>
          <p className='font-bold'> {snippet.title}</p>
          <div className='flex mt-2 h-12 justify-between'>
            <p className='border font-bold shadow-2xl bg-red-500 rounded-2xl border-gray-300 p-2 '>{snippet.channelTitle}</p>
            <div className='flex'>
              <p className='cursor-pointer p-2 px-3 bg-gray-300 rounded-xl mr-2'>Join</p>
              <p className='cursor-pointer p-2 px-4 bg-gray-300 rounded-xl'>Subscribe</p>
            </div>
           <div className=' shadow p-2 flex border  border-gray-200 rounded-3xl '>
              <div className='flex  p-2' >
                <img className='h-6 ml-1' src={LIKE_ICON} alt='like-icon'/>
                <p className='px-2'>{statistics.likeCount}</p>
                <img className='h-6  ml-1' src={DISLIKE_ICON} alt='like-icon'/>
              </div>
              {/* <div className='border flex px-3 py-3 border-gray-200 rounded-r-3xl'> */}
              {/* </div> */}
           </div>
          </div>
        </div>
    </div>
  )
}

export default WatchPage