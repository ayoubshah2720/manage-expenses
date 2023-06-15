import { configureStore } from '@reduxjs/toolkit'
import accountSlice from './accountSlice'
import selectedAccountSlice from './selectedAccountSlice'
import expensesSlice from './expensesSlice'
import selectedHeaderTab from './selectedHeaderTab'
import incomesSlice from './incomesSlice'
import totalAmountSlice from './totalAmountSlice'

export const Store = configureStore({
  reducer: {
    accounts: accountSlice,
    account: selectedAccountSlice,
    tab: selectedHeaderTab,
    expenses: expensesSlice,
    incomes: incomesSlice,
    total: totalAmountSlice,
  },
})