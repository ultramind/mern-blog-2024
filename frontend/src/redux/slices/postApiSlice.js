import apiSlice from './apiSlice'

const POST_URL = '/api/posts'

const postApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addPost: builder.mutation({
      query: data => ({
        url: `${POST_URL}`,
        method: 'POST',
        body: data
      })
    }),
    getAllPosts: builder.query({
      query: () => `${POST_URL}`
    })
  })
})

export const { useAddPostMutation, useGetAllPostsQuery } = postApiSlice
