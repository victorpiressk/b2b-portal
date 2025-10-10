import { configureStore } from '@reduxjs/toolkit'
import SupplierFilterSlice from './reducers/SupplierFilterSlice'
import SupplierListSlice from './reducers/SupplierListSlice'

const store = configureStore({
  reducer: {
    supplierFilter: SupplierFilterSlice,
    supplierList: SupplierListSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
