import { createSlice } from '@reduxjs/toolkit'

const createInitialTable = () => {
    const initialTable = [];
    for (let i = 0; i < 8; i++){
        initialTable[i] = [];
        for (let j = 0; j < 8; j++){
            const variant = (i+j) % 2 === 0 ? 'light' : 'dark';
            const piece = variant === 'dark' && (i % 6 < 2) && (i < 4 ? 'dark' : 'light')
            initialTable[i][j] = {
                isActive: false,
                variant,
                piece,
            }
        }
    }
    return initialTable;
}

const initialState = {
    table: createInitialTable(),
    winner: '',
    turn: 1,
}

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    clickedCell(state, action) {
      console.log(action)
    }
  }
})

export const { clickedCell } = gameSlice.actions
export default gameSlice.reducer