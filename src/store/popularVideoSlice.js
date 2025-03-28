import { createSlice } from "@reduxjs/toolkit";

const popularVideo = createSlice({
    name:"popularVideos",
    initialState:null,
    reducers:{
        addPopularVideos:(state,action)=>{
            return action.payload
        }
    }
})
export const {addPopularVideos} = popularVideo.actions
export default popularVideo.reducer