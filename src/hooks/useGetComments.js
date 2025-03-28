import { useEffect } from "react"
import { COMMENTS_API } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addComments } from "../store/commentsSlice"

const useGetComments = (id) => {
    const dispatch  = useDispatch()
    const fetchcomments = async () => {
        const comments =  await fetch(COMMENTS_API+id)
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
    }
    useEffect(()=>{
        fetchcomments()
    },[id])
}

export default useGetComments