import {configureStore} from "@reduxjs/toolkit"
import sideBarReducer from "./sideBarSlice"
import CustomFiltersReducer from "./customfiltersSlice"
import popularVideoReducer from "./popularVideoSlice"
import autoSuggestionsReducer from "./autoSuggestionsSlice"
import commentsReducer from "./commentsSlice"
import historyReducer from "./historySlice"
import userReducer from "./userSlice"
const appStore = configureStore({
    reducer:{
        user:userReducer,
        sideBarList:sideBarReducer,
        customFilters:CustomFiltersReducer,
        popularVideos:popularVideoReducer,
        autoSuggestions:autoSuggestionsReducer,
        comments:commentsReducer,
        history:historyReducer
    }
})

export default appStore