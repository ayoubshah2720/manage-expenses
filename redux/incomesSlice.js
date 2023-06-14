import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit'

export const incomesSlice = createSlice({
  name: 'incomes',
  initialState: [],
  reducers: {
    addIncome: (state, action) => {
      if (state.length) {
        state = [action.payload, ...state];
      } else {
        state.push(action.payload)
      }
      return state;

    },
    updateIncome: (state, action) => {
      return state.push(action.payload)
    },
    deleteIncome: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addIncome, updateIncome, deleteIncome } = incomesSlice.actions

export default incomesSlice.reducer