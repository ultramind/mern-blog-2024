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
    }),
    addReply: builder.mutation({
      query: ({ commentId, data }) => ({
        url: `${COMMENT_URL}/${commentId}/reply`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['comment']
    }),
    deleteReply: builder.mutation({
      query: ({ commentId, replyId }) => ({
        url: `${COMMENT_URL}/${commentId}/reply/${replyId}/delete`,
        method: 'PUT'
      }),
      invalidatesTags: ['comment']
    })
  })
})

export const {
  useAddCommentMutation,
  useGetAllCommentQuery,
  useAddReplyMutation,
  useDeleteReplyMutation
} = commentApiSlice
