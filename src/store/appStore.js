import {configureStore} from "@reduxjs/toolkit"
import sideBarReducer from "./sideBarSlice"
import CustomFiltersReducer from "./customfiltersSlice"
import popularVideoReducer from "./popularVideoSlice"
import autoSuggestionsReducer from "./autoSuggestionsSlice"
const appStore = configureStore({
    reducer:{
        sideBarList:sideBarReducer,
        customFilters:CustomFiltersReducer,
        popularVideos:popularVideoReducer,
        autoSuggestions:autoSuggestionsReducer
    }
})

export default appStore