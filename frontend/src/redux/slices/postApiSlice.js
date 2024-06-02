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
      query: ({ category, search, page, limit, sort }) =>
        `${POST_URL}/query?category=${category}&page=${page}&sort=${sort}&limit=${limit}&search=${search}`,
      providesTags: ['posts']
    }),
    getPost: builder.query({
      query: slug => `${POST_URL}/${slug}`
    }),
    editPost: builder.mutation({
      query: data => ({
        url: `${POST_URL}/${data.id}/edit`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['posts']
    }),
    deletePost: builder.mutation({
      query: postId => ({
        url: `${POST_URL}/${postId}/delete`,
        method: 'DELETE'
      }),
      invalidatesTags: ['posts']
    })
  })
})

export const {
  useAddPostMutation,
  useGetAllPostsQuery,
  useGetPostQuery,
  useEditPostMutation,
  useDeletePostMutation
} = postApiSlice
