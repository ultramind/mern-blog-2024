import apiSlice from './apiSlice'

const POST_URL = '/api/posts'

const postApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    tagTypes: ['posts'],
    addPost: builder.mutation({
      query: data => ({
        url: `${POST_URL}`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['posts']
    }),
    getAllPosts: builder.query({
      query: ({ category, search, page, limit, sort }) =>
        `${POST_URL}/query?category=${category}&page=${page}&sort=${sort}&limit=${limit}&search=${search}`,
      providesTags: ['posts']
    }),
    getPost: builder.query({
      query: slug => `${POST_URL}/${slug}`,
      providesTags: ['post-details']
    }),
    likePost: builder.mutation({
      query: postId => ({
        url: `${POST_URL}/${postId}/like`,
        method: 'PUT'
      }),
      invalidatesTags: ['post-details']
    }),
    editPost: builder.mutation({
      query: data => ({
        url: `${POST_URL}/${data.id}/edit`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['post-details']
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
  useDeletePostMutation,
  useLikePostMutation
} = postApiSlice
