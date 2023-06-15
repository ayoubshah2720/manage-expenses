import { createSlice } from '@reduxjs/toolkit'

export const totalAmountSlice = createSlice({
  name: 'totalAmount',
  initialState: {value:0,type:'incomes'},
  reducers: {
    addAmount: (state, action) => {
      if(action.payload.type == 'expenses'){
        state.value = parseInt(state.value) - parseInt(action.payload.value);
      } else {
        state.value = parseInt(state.value) + parseInt(action.payload.value);
      }
      return state;
    },

    deleteAmount: (state, action) => {
      if(action.payload.type == 'incomes'){
        state.value = parseInt(state.value) - parseInt(action.payload.value);
      } else {
        state.value = parseInt(state.value) + parseInt(action.payload.value);
      }
      return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAmount, deleteAmount } = totalAmountSlice.actions

export default totalAmountSlice.reducer