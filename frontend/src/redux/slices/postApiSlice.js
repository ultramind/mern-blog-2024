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
        `${POST_URL}/query?category=${category}&page=${page}&sort=${sort}&limit=${limit}&search=${search}`
    }),
    getPost: builder.query({
      query: slug => `${POST_URL}/${slug}`
    }),
    editPost: builder.mutation({
      query: data => ({
        url: `${POST_URL}/${data.id}/edit`,
        method: 'PUT',
        body: data
      })
    })
  })
})

export const {
  useAddPostMutation,
  useGetAllPostsQuery,
  useGetPostQuery,
  useEditPostMutation
} = postApiSlice
