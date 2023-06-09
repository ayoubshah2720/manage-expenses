import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: [],
// }

export const accountSlice = createSlice({
  name: 'accounts',
  initialState: [],
  reducers: {
    addAccount: (state, action) => {
      if (state.length) {
        state = [action.payload, ...state];
      } else {
        state.push(action.payload)
      }
      return state;

    },
    updateAccount: (state, action) => {
      return state.push(action.payload)
    },
    deleteAccount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAccount, updaateAccount, deleteAccount } = accountSlice.actions

export default accountSlice.reducer