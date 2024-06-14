import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api-mytechprocess.onrender.com'
})

const apiSlice = createApi({
  baseQuery,
  tagTypes: ['users', 'posts', 'comments'],
  endpoints: builder => ({})
})

export default apiSlice
