export const VIDEOS_GET =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=84&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
export const LIKE_ICON ="https://cdn.iconscout.com/icon/free/png-256/free-like-icon-download-in-svg-png-gif-file-formats--logo-thumb-up-vote-interface-pack-user-icons-1505250.png"
export const DISLIKE_ICON ="https://www.svgrepo.com/show/504867/show-youtube-dislikes.svg"
export const SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&videoId=`