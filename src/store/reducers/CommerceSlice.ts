import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/CommerceStatus'
import Commerce from '../../models/Commerce'

type CommerceState = {
  items: Commerce[]
}

const initialState: CommerceState = {
  items: []
}

const CommerceSlice = createSlice({
  name: 'Commerce',
  initialState,
  reducers: {
    confirmRequest: (state, action: PayloadAction<number>) => {
      const item = state.items.find((c) => c.id === action.payload)

      if (item && item.status === enums.CommerceStatus.PENDING) {
        item.status = enums.CommerceStatus.CONFIRMED
        item.operationType = enums.CommerceType.REQUEST
      }
    },
    rejectRequest: (state, action: PayloadAction<number>) => {
      const item = state.items.find((c) => c.id === action.payload)

      if (item && item.status === enums.CommerceStatus.PENDING) {
        item.status = enums.CommerceStatus.REJECTED
        item.operationType = enums.CommerceType.REQUEST
      }
    },
    startSale: (state, action: PayloadAction<number>) => {
      const item = state.items.find((c) => c.id === action.payload)
      if (item && item.status === enums.CommerceStatus.CONFIRMED) {
        item.status = enums.CommerceStatus.IN_PROGRESS
        item.operationType = enums.CommerceType.SALE
        item.saleValue = item.saleValue || 0
      }
    },
    concludeSale: (state, action: PayloadAction<number>) => {
      const item = state.items.find((c) => c.id === action.payload)
      if (item && item.status === enums.CommerceStatus.IN_PROGRESS) {
        item.status = enums.CommerceStatus.CONCLUDED
        item.operationType = enums.CommerceType.SALE
      }
    },
    registerCommerce: (state, action: PayloadAction<Omit<Commerce, 'id'>>) => {
      const lastCommerce = state.items[state.items.length - 1]
      const NewCommerce = {
        ...action.payload,
        id: lastCommerce ? lastCommerce.id + 1 : 1
      }
      state.items.push(NewCommerce)
    },
    removeCommerce: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const {
  confirmRequest,
  rejectRequest,
  startSale,
  concludeSale,
  registerCommerce,
  removeCommerce,
  clear
} = CommerceSlice.actions
export default CommerceSlice.reducer
