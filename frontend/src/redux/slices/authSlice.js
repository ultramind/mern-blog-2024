import { createSlice } from '@reduxjs/toolkit'

// initial state
const initialState = {
  userInfo: { name: 'Akachukwu' }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserCredentials: (state, action) => {
      state.userInfo = action.payload
    }
  }
})

export const { setUserCredentials } = authSlice.actions

export default authSlice.reducer
