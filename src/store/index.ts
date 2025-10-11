import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './reducers/FilterSlice'
import commerceSlice from './reducers/CommerceSlice'
import api from '../services/api'

const store = configureStore({
  reducer: {
    filter: filterSlice,
    commerce: commerceSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
