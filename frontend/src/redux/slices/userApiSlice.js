import apiSlice from './apiSlice'

const USER_URL = '/api/users'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: data => ({
        url: `${USER_URL}/auth`,
        method: 'POST',
        body: data
      })
    }),
    logout: builder.mutation({
      query: data => ({
        url: `${USER_URL}/logout`,
        body: data,
        method: 'POST'
      })
    }),
    getUser: builder.query({
      query: () => `${USER_URL}/profile`
    }),
    register: builder.mutation({
      query: data => ({
        url: `${USER_URL}`,
        method: 'POST',
        body: data
      })
    })
  })
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetUserQuery
} = userApiSlice
