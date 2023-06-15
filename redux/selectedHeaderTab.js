import { createSlice } from '@reduxjs/toolkit'

export const selectedHeaderTab = createSlice({
  name: 'tab',
  initialState: [],
  reducers: {
    selectedTab: (state, action) => {
      return state = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectedTab } = selectedHeaderTab.actions

export default selectedHeaderTab.reducer