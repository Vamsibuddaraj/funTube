import React, { useEffect, useState } from 'react'
import { FUNTUBE_LOGO, HAMBURG_ICON, SEARCH_ICON } from '../utils/logoConstants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleView } from '../store/sideBarSlice'
import { useNavigate } from 'react-router-dom'
import { SEARCH_API } from '../utils/constants'
import { addSuggestions, clearSuggestions } from '../store/autoSuggestionsSlice'

const Header = () => {
  const [searchResult,setSearchResult] = useState()
  const [showSuggestions,setShowSuggestions] = useState(false)
  const dispatch = useDispatch()
  const autoSuggestions = useSelector(store=>store.autoSuggestions)
  const navigate = useNavigate()
  const handleSideBarView  = () => {
    dispatch(toggleView())
  }
  const fetchSuggestions = async() => {
    const data = await fetch(SEARCH_API+searchResult)
    const jsonres = await data.json()
    dispatch(addSuggestions(jsonres[1]))
  }
  useEffect(()=>{
    if(searchResult){
      console.log("inc;ius---",autoSuggestions.some(item=>item.includes(searchResult)))
      if(!autoSuggestions.some(item=>item.includes(searchResult))){
        let timerId = setTimeout(()=>fetchSuggestions(),300)
        return ()=>clearTimeout(timerId)
      }
    }
    if(searchResult==""){
      dispatch(clearSuggestions())
    }
  },[searchResult])
  return (
    <div className='flex bg-white justify-between pt-3 pb-3 shadow-xl w-screen z-20 fixed'>
        <div className='flex '>
            <img onClick={handleSideBarView} className='w-11 h-11 ' src={HAMBURG_ICON} alt='hamburg-icon'/>
            <img onClick={()=>navigate("/")} className='ml-3 w-25 mt-2 h-6' src={FUNTUBE_LOGO} alt='funtube-logo'/>
        </div>
        <div className='flex w-1/2 flex-col'>
          <div className='flex  justify-center'>
            <input  
            onChange={(e)=>setSearchResult(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
            className='p-2 grow  border-2 border-gray-300 rounded-l-full ' placeholder='Search'/>
            <button className='p-2 px-6 border border-gray-300 rounded-r-full '>
              <img className='w-5 h-5' src={SEARCH_ICON}/>
            </button>
          </div>
          {showSuggestions&&autoSuggestions&&
            <div className='fixed top-15 p-2 rounded-b-2xl bg-white w-1/2'>
              <ul>
                {autoSuggestions.map(auto=><li className='hover:bg-gray-200'>{auto}</li>)}
              </ul>
            </div>
          }
        </div>

        <div className='mt-3 pr-3'>
          <p>Sign IN</p>
        </div>
    </div>
  )
}

export default Header