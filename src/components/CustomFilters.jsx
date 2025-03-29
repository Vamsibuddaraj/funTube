import React from 'react'
import { useSelector } from 'react-redux'

const CustomFilters = () => {
    const customfilters = useSelector(store=>store.customFilters)
  return (
    <div className='flex'>
        {customfilters.map(filter=>{
            return <div className='p-2 mr-2 mb-5 bg-gray-200 rounded-lg text-[14px]' key={filter}>{filter}</div>
        })}
    </div>
  )
}

export default CustomFilters