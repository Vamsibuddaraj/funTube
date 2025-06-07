import { useDispatch, useSelector } from "react-redux"
import { VIDEOS_GET } from "../utils/constants"
import { addPopularVideos } from "../store/popularVideoSlice"
import { useCallback, useEffect } from "react"

const useGetPopularMovies = () => {
    const dispatch = useDispatch()
    const data = useSelector(store=>store.popularVideos)
    
    const fetchPopularVideos = useCallback(async (signal) => {
        try {
            const data = await fetch(VIDEOS_GET, { signal })
            const jsonRes = await data.json()
            dispatch(addPopularVideos(jsonRes.items))
        } catch (error) {
            if (error.name === 'AbortError') {
                // Handle abort error silently
                return;
            }
            console.error('Error fetching popular videos:', error);
        }
    }, [dispatch])

    useEffect(() => {
        if(!data || data.length === 0) {
            const controller = new AbortController();
            fetchPopularVideos(controller.signal);
            return () => {
                controller.abort();
            }
        }
    }, [data, fetchPopularVideos])

    return data
}

export default useGetPopularMovies