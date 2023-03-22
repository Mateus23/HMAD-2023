import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchRandomActivity } from '../api/activity';

export const fetchActivity = createAsyncThunk(
  'activity/fetch',
  async () => {
    const response = await fetchRandomActivity()
    return response.data
  }
)

export const activitySlice = createSlice({
  name: 'activity',
  initialState: {
    activities: [],
    idea: {
      data: {},
      status: 'idle',
    },
  },
  reducers: {
    addActivity: (state, action) => {
      state.activities.push(action.payload)
    },
    removeActivity: (state, action) => {
      console.log('remove', state.activities)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchActivity.fulfilled, (state, action) => {
      state.idea.data = action.payload
      state.idea.status = 'succeeded'
    });
    builder.addCase(fetchActivity.rejected, (state, action) => {
      state.idea.status = 'error'
    });
    builder.addCase(fetchActivity.pending, (state, action) => {
      state.idea.data = {}
      state.idea.status = 'loading'
    });
  },
})

export const { addActivity, removeActivity } = activitySlice.actions

export default activitySlice.reducer