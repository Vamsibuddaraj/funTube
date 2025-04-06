import React from 'react'
import useGetComments from '../hooks/useGetComments'
import { useSelector } from 'react-redux'
import UserMessage from './UserMessage'

const Comments = ({id}) => {
    const comments = useSelector(store=>store.comments)
    useGetComments(id)
    if(!comments ||comments.length==0) return null
  return (
    <div className='md:w-[40%] h-[82.2%] pr-10 flex flex-col items-center shadow-2xl ml-[10%] relative sm:ml-6 mt-10 md:mt-0'>
        <p className='p-2 shadow-2xl w-[90%] absolute bg-white' >Comments</p>
        <div className='w-full h-full overflow-y-scroll no-scrollbar pt-8'>
           {comments.map(comment =><UserMessage key={comment.id} comment={comment}/>)}
        </div>
    </div>
  )
}

export default Comments