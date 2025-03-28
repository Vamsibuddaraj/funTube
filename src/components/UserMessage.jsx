import React from 'react'

const UserMessage = ({comment}) => {
    const {textDisplay,authorProfileImageUrl,authorDisplayName} = comment
  return (
    <div className='flex p-3 m-1'>
        <img className='w-10 h-10 rounded-full' alt='logo' src={authorProfileImageUrl}/>
        <div className='flex flex-col ml-2'>
            <p className='text-l'>{authorDisplayName}</p>
            <p className='font-thin text-l'>{textDisplay}</p>
        </div>
    </div>
  )
}

export default UserMessage