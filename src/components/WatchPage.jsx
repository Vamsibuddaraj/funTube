import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../store/sideBarSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DISLIKE_ICON, LIKE_ICON } from "../utils/constants";
import Comments from "./Comments";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import { addIntoHistory } from "../store/historySlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sideBarView } = useSelector((store) => store.sideBarList);
  const popularVideos = useSelector((store) => store.popularVideos);
  const history = useSelector(store=>store.history)
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  if (!popularVideos) {
    useGetPopularMovies();
  }
  if (!videoId) return null;
  const { snippet, statistics } = popularVideos.find(
    (list) => list.id == videoId
  );
  console.log("videoData", snippet);
  useEffect(() => {
    if (!popularVideos) {
      navigate("/");
    }
    if (sideBarView) {
      dispatch(toggleView());
    }
  const popularVideo = popularVideos.find(video=>video.id==videoId)
  console.log("popularVideo",popularVideo)
  if(!history.some(his=>his.id==popularVideo.id)){
    dispatch(addIntoHistory(popularVideo))
  }
  }, []);
  return (
    <div className="flex md:w-full h-full md:h-screen flex-col md:flex-row justify-around">
      <div className="w-full md:w-[70%] ml-10">
        <iframe
          className="rounded-2xl w-full  aspect-square sm:w-[90%]"
          width="800"
          height="400"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-[90%] pb-4 px-4 pt-2 shadow-2xl">
          <p className="font-bold"> {snippet.title}</p>
          <div className="flex mt-2 h-9 justify-between">
            <p className="border font-bold shadow-2xl font-serif sm:text-[10px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-red-500 rounded-2xl border-gray-300 px-2 ">
              {snippet.channelTitle}
            </p>
            <div className="flex">
              <p className="cursor-pointer  md:text-[18px] text-[12px] font-mono px-4 bg-gray-300 rounded-xl mr-2">
                Join
              </p>
              <p className="cursor-pointer md:text-[18px] text-[12px] px-4 font-mono bg-gray-300 rounded-xl">
                Subscribe
              </p>
            </div>
            <div className=" shadow p-2 flex border  border-gray-200 rounded-3xl ">
              <div className="flex px-2 sm:w-40 sm:justify-between">
                <img
                  className="md:h-6 md:ml-1 sm:h-4"
                  src={LIKE_ICON}
                  alt="like-icon"
                />
                <p className="md:px-2 hidden  sm:-ml-4">
                  {statistics.likeCount}
                </p>
                <img
                  className="md:h-6 md:ml-1 sm:h-4"
                  src={DISLIKE_ICON}
                  alt="like-icon"
                />
              </div>
              {/* <div className='border flex px-3 py-3 border-gray-200 rounded-r-3xl'> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <Comments id={videoId} />
    </div>
  );
};

export default WatchPage;
