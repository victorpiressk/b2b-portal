import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './reducers/FilterSlice'
import commerceSlice from './reducers/CommerceSlice'

const store = configureStore({
  reducer: {
    filter: filterSlice,
    commerce: commerceSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
