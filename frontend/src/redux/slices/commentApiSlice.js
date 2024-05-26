import apiSlice from './apiSlice'

const COMMENT_URL = '/api/post'

const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addComment: builder.mutation({
      query: ({ postId, data }) => ({
        url: `${COMMENT_URL}/${postId}/comment`,
        method: 'POST',
        body: data
      })
    })
  })
})

export const { useAddCommentMutation } = commentApiSlice
