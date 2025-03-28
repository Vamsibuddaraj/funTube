import { createSlice } from "@reduxjs/toolkit";

const autoSuggestions = createSlice({
    name:"autoSuggestions",
    initialState:[],
    reducers:{
        addSuggestions:(state,action) => {
            return action.payload
        },
        clearSuggestions:(state)=>{
            return []
        }
    }
})
export const {addSuggestions,clearSuggestions} = autoSuggestions.actions
export default autoSuggestions.reducer