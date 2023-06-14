import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit'

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      console.log('state',state,'action',action )
      console.log('state',state.length )
        return state = [action.payload, ...state];

    },
    updateExpense: (state, action) => {
      return state.push(action.payload)
    },
    deleteExpense: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addExpense, updateExpense, deleteExpense } = expensesSlice.actions

export default expensesSlice.reducer