import { useDispatch, useSelector } from "react-redux"
import { VIDEOS_GET } from "../utils/constants"
import { addPopularVideos } from "../store/popularVideoSlice"
import { useCallback, useEffect } from "react"

const useGetPopularMovies = () => {
    const dispatch = useDispatch()
    const data = useSelector(store=>store.popularVideos)
    const fetchPopularVideos = useCallback(async () => {
        const data = await fetch(VIDEOS_GET)
        const jsonRes = await data.json()
        dispatch(addPopularVideos(jsonRes.items))
    },[data])
    useEffect(()=>{
       if(!data || data.length===0){
        fetchPopularVideos()
     }     
    },[data])
    return data
}

export default useGetPopularMovies