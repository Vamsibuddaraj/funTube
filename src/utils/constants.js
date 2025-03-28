export const VIDEOS_GET =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=15&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
export const LIKE_ICON ="https://freepngimg.com/thumb/youtube/77754-like-icons-signal-youtube-computer-button-thumb.png"
export const DISLIKE_ICON ="https://www.svgrepo.com/show/504867/show-youtube-dislikes.svg"
export const SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="