import { createSlice } from '@reduxjs/toolkit'

// initial state
const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logout: state => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
    }
  }
})

export const { setUserCredentials, logout } = authSlice.actions

export default authSlice.reducer
