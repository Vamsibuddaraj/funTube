import { useSelector } from "react-redux"
import useGetPopularMovies from "../hooks/useGetPopularMovies"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
import { useEffect, useCallback } from "react"

const VideosBackground = () => {
    const data = useSelector(store=>store.popularVideos)
    if(!data) return null

    const handleScroll = useCallback(() => {
        // Add any scroll-based logic here if needed
        // Removed console.log for better performance
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])

    return (
        <div className="flex flex-wrap pt-6 overflow-y-scroll no-scrollbar h-[85%]">
            {data.map(video => {
                return <Link key={video.id} to={`/watch?v=${video.id}`}><VideoCard video={video}/></Link>
            })}
        </div>
    )
}

export default VideosBackground