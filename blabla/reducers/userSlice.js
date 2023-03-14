import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: ''
  },
  reducers: {
    reset: state => {
      state.name = ''
    },
    set: (state, action) => {
      state.name = action.payload
    },
    setAge: (state, action) => {
      state.age = action.payload.age;
    }
  }
})

export const { set, reset, setAge } = userSlice.actions

export default userSlice.reducer