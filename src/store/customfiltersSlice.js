import { createSlice } from "@reduxjs/toolkit";

const customFilters = createSlice({
    name:"customFilters",
    initialState:["All","Music","Telugu Cinema","Indian pop music","Games","Sports","News","React"]
})

export default customFilters.reducer