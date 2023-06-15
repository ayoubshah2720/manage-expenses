import { createSlice } from '@reduxjs/toolkit'

export const totalAmountSlice = createSlice({
  name: 'totalAmount',
  initialState: {value:0,type:'incomes'},
  reducers: {
    addAmount: (state, action) => {
      console.log('reducer selected tab ', action.payload)
      console.log('reducer totalamount state ', state)
      if(action.payload.type == 'expenses'){
        state.value = parseInt(state.value) - parseInt(action.payload.value);
      } else {
        state.value = parseInt(state.value) + parseInt(action.payload.value);
      }
      return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAmount } = totalAmountSlice.actions

export default totalAmountSlice.reducer