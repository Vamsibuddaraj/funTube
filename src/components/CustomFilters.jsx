import React from 'react'
import { useSelector } from 'react-redux'

const CustomFilters = () => {
    const customfilters = useSelector(store=>store.customFilters)
  return (
    <div className="relative">
      <div className="flex overflow-x-scroll no-scrollbar items-start">
        {customfilters.map((filter, index) => (
          <div
            key={filter}
            className={`px-3 py-1 mr-2 mb-5 bg-[#E5E5E5] font-sans text-lg shadow-2xl rounded-lg text-[14px] w-auto whitespace-nowrap 
            ${index === 0 ? "bg-black text-white" : ""}`}
          >
            {filter}
          </div>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white pointer-events-none"></div>
    </div>
  )
}

export default CustomFilters