import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit'

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      console.log('state',state,'action',action )
      console.log('state',state.length )
      if (state.length > 0) {
        state = [action.payload, ...state];
      } else {
        state.push(action.payload)
      }
      return state;

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