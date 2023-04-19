import { createSlice } from '@reduxjs/toolkit'

const createInitialTable = () => {
    const initialTable = [];
    for (let i = 0; i < 8; i++){
        initialTable[i] = [];
        for (let j = 0; j < 8; j++){
            const variant = (i+j) % 2 === 0 ? 'light' : 'dark';
            const piece = variant === 'dark' && (i % 5 < 3) && (i < 4 ? 'dark' : 'light')
            initialTable[i][j] = {
                isActive: false,
                variant,
                piece,
                isPossible: false,
            }
        }
    }
    return initialTable;
}

const initialState = {
    table: createInitialTable(),
    winner: '',
    turn: 1,
    activePiece: undefined,
    isForced: false,
}

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    startMovement(state, action) {
      console.log('deu start movement')
      console.log(action.payload.coord)
      // Ativar a peça
      // Mostras movimentos validos
      return state
    },
    cancelMovement(state, action) {
      // desativar a peça
      return state
    },
    moveCell(state, action) {
      // Modificar posições
      // Checar se há vencedores
      // Checa se deve mudar o turno 
      return state
    }
  }
})

export const { startMovement, cancelMovement, moveCell } = gameSlice.actions
export default gameSlice.reducer