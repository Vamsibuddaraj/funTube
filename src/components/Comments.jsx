import React from 'react'
import useGetComments from '../hooks/useGetComments'
import { useSelector } from 'react-redux'
import UserMessage from './UserMessage'

const Comments = ({id}) => {
    const comments = useSelector(store=>store.comments)
    useGetComments(id)
    if(!comments) return null
  return (
    <div className='md:w-[40%] h-[11.48%] flex flex-col items-center sm:overflow-y-scroll shadow-2xl ml-[10%] sm:ml-6'>
        <p className='p-2 shadow-2xl w-full' >Comments</p>
        <div className='w-full h-full '>
           {comments.map(comment =><UserMessage key={comment.id} comment={comment}/>)}
        </div>
    </div>
  )
}

export default Comments