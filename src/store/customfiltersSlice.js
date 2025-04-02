import { createSlice } from "@reduxjs/toolkit";

const customFilters = createSlice({
    name:"customFilters",
    initialState:["All","Music","Telugu Cinema","Indian pop music","Games","Sports","Podcasts","Gaming","News","AI","Tollywood","Andriod","IOS","React","Comedy","Crime","Hyderabad","Beach","Araku","BahuBali"]
})

export default customFilters.reducer