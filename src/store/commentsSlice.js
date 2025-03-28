import { createSlice } from "@reduxjs/toolkit";

const comments = createSlice({
    name:"comments",
    initialState:null,
    reducers:{
        addComments: (state,action) => {
            return action.payload
        },
        clearComments:(state) => {
            state=null;
        }
    }
})

export const {addComments,clearComments} = comments.actions
export default comments.reducer