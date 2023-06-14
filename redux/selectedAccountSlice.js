import { createSlice } from '@reduxjs/toolkit'

export const selectedAccountSlice = createSlice({
  name: 'account',
  initialState: [],
  reducers: {
    selectedAccount: (state, action) => {
      console.log('selectedAccount ', action.payload)
      state.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectedAccount } = selectedAccountSlice.actions

export default selectedAccountSlice.reducer