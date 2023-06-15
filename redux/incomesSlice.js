import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit'

export const incomesSlice = createSlice({
  name: 'incomes',
  initialState: [],
  reducers: {
    addIncome: (state, action) => {
        return state = [action.payload, ...state];
    },
    updateIncome: (state, action) => {
      return state.push(action.payload)
    },
    deleteIncome: (state, action) => {
      state = state.filter((item)=> item.id !== action.payload)
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const { addIncome, updateIncome, deleteIncome } = incomesSlice.actions

export default incomesSlice.reducer