import apiSlice from './apiSlice'

const CATEGORY_URL = '/api/category'

const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addCategory: builder.mutation({
      query: data => ({
        url: `${CATEGORY_URL}`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['category']
    }),
    getAllCategories: builder.query({
      query: page => `${CATEGORY_URL}`,
      providesTags: ['category']
    })
  })
})

export const { useAddCategoryMutation, useGetAllCategoriesQuery } =
  categoryApiSlice
