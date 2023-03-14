import { createSlice } from '@reduxjs/toolkit'

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {
    color: '#fff'
  },
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload
    }
  }
})

export const { setColor } = preferencesSlice.actions

export default preferencesSlice.reducer