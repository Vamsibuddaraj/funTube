import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUserDetails:(state,action)=> {
            //  const {uid, email, displayName, photoURL} = action.payload
            //  return {uid, email, displayName, photoURL}
            return action.payload
        },
        removeUser:(state,action) => {
            return null
        }
    }
})

export const {addUserDetails,removeUser} = userSlice.actions
export default userSlice.reducer