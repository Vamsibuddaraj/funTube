import React from "react";
import formatDuration from "../utils/formatDuration";

const VideoCard = ({ video }) => {
  const thumbnail = video.snippet.thumbnails.standard.url;
  const title = video.snippet.title;
  const channelTitle = video.snippet.channelTitle;
  const duration =video.contentDetails.duration;
  const formattedTime = formatDuration(duration)
  return (
    <div className="p-2 m-4 sm:m-2 flex flex-col w-120 h-90 md:w-65 items-end justify-between relative shadow-2xl md:h-65">
      <img
        className=" w-120 h-70 md:w-65 md:h-45 rounded-2xl"
        src={thumbnail}
      />
      <span className="text-[12px] bottom-25 right-4 bg-black text-white px-2 absolute rounded-2xl ">{formattedTime}</span>
      <p className="font-medium text-[12px] truncate w-full overflow-hidden whitespace-nowrap text-ellipsis">{title}</p>
      <span className=" px-2 w-fit text-white bg-black rounded-2xl">
        {channelTitle}
      </span>
    </div>
  );
};

export default VideoCard;
