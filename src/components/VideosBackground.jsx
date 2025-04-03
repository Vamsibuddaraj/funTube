import { useSelector } from "react-redux"
import useGetPopularMovies from "../hooks/useGetPopularMovies"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const VideosBackground = () => {
    const data = useSelector(store=>store.popularVideos)
    if(!data) return null

    const handleScroll  =  () => {
        console.log(window.innerWidth+" "+window.innerHeight)
    }
    useEffect(()=>{
      window.addEventListener("scroll",handleScroll)
      return ()=>{
        window.removeEventListener("scroll",handleScroll)
      }
    },[])
  return (
    <div className="flex flex-wrap pt-6 overflow-y-scroll no-scrollbar h-[85%]">
        {data.map(video=>{
            return <Link key={video.id} to={`/watch?v=${video.id}`}><VideoCard  video={video}/></Link>
        })}
    </div>
  )
}

export default VideosBackground