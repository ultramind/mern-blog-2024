import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import apiSlice from './slices/apiSlice'
import postReducer from './slices/postSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})

export default store
