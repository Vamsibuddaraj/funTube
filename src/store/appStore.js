import {configureStore} from "@reduxjs/toolkit"
import sideBarReducer from "./sideBarSlice"
import CustomFiltersReducer from "./customfiltersSlice"
import popularVideoReducer from "./popularVideoSlice"
const appStore = configureStore({
    reducer:{
        sideBarList:sideBarReducer,
        customFilters:CustomFiltersReducer,
        popularVideos:popularVideoReducer
    }
})

export default appStore