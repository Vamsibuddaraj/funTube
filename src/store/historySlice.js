import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name:"history",
    initialState:[],
    reducers:{
        addIntoHistory:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addIntoHistory} = historySlice.actions
export default historySlice.reducer