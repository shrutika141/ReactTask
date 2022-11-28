import { configureStore } from '@reduxjs/toolkit'

import BlogReducer from "./Reducers/BlogReducer";

const store = configureStore({
    reducer: BlogReducer
})

export default store
