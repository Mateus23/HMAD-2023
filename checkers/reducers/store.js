import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './gameReducer/gameSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
  }
})