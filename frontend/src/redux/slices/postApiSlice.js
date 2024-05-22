import apiSlice from './apiSlice'

const POST_URL = 'api/posts'

const postSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addPost: builder.mutation({
      query: data => ({
        url: `${POST_URL}`,
        method: 'POST',
        body: data
      })
    })
  })
})

export const { useAddPostMutation } = postSlice
