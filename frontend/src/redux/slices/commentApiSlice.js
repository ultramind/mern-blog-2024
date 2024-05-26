import apiSlice from './apiSlice'

const COMMENT_URL = '/api/post'

const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addComment: builder.mutation({
      query: ({ postId, data }) => ({
        url: `${COMMENT_URL}/${postId}/comment`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['comment']
    }),
    getAllComment: builder.query({
      query: postId => `${COMMENT_URL}/${postId}/comment`,
      providesTags: ['comment']
    })
  })
})

export const { useAddCommentMutation, useGetAllCommentQuery } = commentApiSlice
