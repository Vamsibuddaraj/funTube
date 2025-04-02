import { useDispatch, useSelector } from "react-redux"
import { VIDEOS_GET } from "../utils/constants"
import { addPopularVideos } from "../store/popularVideoSlice"
import { useEffect } from "react"

const useGetPopularMovies = () => {
    const dispatch = useDispatch()
    const data = useSelector(store=>store.popularVideos)
    const fetchPopularVideos = async () => {
        const data = await fetch(VIDEOS_GET)
        const jsonRes = await data.json()
        dispatch(addPopularVideos(jsonRes.items))
    }
    useEffect(()=>{
       if(!data){
        fetchPopularVideos()
     }     
    },[])
}

export default useGetPopularMovies