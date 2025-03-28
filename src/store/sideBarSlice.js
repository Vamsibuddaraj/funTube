import { createSlice } from "@reduxjs/toolkit";

const sideBar = createSlice({
    name:"sideBarList",
    initialState:{
        sideBarList:[
            {
                list:"Home",
                url:"https://endlessicons.com/wp-content/uploads/2012/11/home-icon-614x460.png"
            },
            {
                list:"Shorts",
                url:"https://images.seeklogo.com/logo-png/49/2/youtube-shorts-logo-png_seeklogo-490668.png"
            },
            {
                list:"Subscriptions",
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF2WvlfBFamFtc_WwmyBsCHgP6WdvqAGqKw&s"
            },
            {
                list:"History",
                url:"https://w7.pngwing.com/pngs/988/206/png-transparent-computer-icons-history-icon-design-time-angle-text-logo-thumbnail.png"
            }
        ],
        sideBarView:false
    },
    reducers:{
        toggleView:(state,action)=>{
            console.log("redux",state.sideBarView)
            state.sideBarView = !state.sideBarView
        }
    }
    
})
export const {toggleView} = sideBar.actions
export default sideBar.reducer