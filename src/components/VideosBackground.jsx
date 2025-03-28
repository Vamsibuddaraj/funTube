import { useSelector } from "react-redux"
import useGetPopularMovies from "../hooks/useGetPopularMovies"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const VideosBackground = () => {
    const data = useSelector(store=>store.popularVideos)
    useGetPopularMovies()
    if(!data) return null
  return (
    <div className="flex flex-wrap pt-6">
        {data.map(video=>{
            return <Link key={video.id} to={`/watch?v=${video.id}`}><VideoCard  video={video}/></Link>
        })}
    </div>
  )
}

export default VideosBackground