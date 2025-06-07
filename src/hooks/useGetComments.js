import { useEffect } from "react"
import { COMMENTS_API } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addComments } from "../store/commentsSlice"

const useGetComments = (id) => {
    const dispatch = useDispatch()
    const fetchcomments = async (signal) => {
        try {
            const comments = await fetch(COMMENTS_API+id, { signal })
            const {items:commentsJson} = await comments.json()
            const processData = commentsJson.map(comment=>{
                return {
                    ["id"]:comment.id,
                    ["authorProfileImageUrl"]:comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
                    ["authorDisplayName"]:comment.snippet.topLevelComment.snippet.authorDisplayName,
                    ["textDisplay"]:comment.snippet.topLevelComment.snippet.textDisplay
                }
            })
            dispatch(addComments(processData))
        } catch (error) {
            if (error.name === 'AbortError') {
                // Handle abort error silently
                return;
            }
            console.error('Error fetching comments:', error);
        }
    }
    useEffect(()=>{
        const controller = new AbortController();
        fetchcomments(controller.signal);
        return () => {
            controller.abort();
        }
    },[id])
}

export default useGetComments