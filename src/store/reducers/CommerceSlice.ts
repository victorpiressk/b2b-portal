import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommerceStatus } from '../../utils/enums/CommerceStatus'
import Commerce from '../../models/Commerce'

type CommerceState = {
  items: Commerce[]
}

const initialState: CommerceState = {
  items: [
    {
      id: 1,
      title: 'Solicitação #1',
      description: 'Aguardando resposta do fornecedor',
      saleValue: 2000,
      status: CommerceStatus.REQUEST_PENDING,
      operationType: 'REQUEST'
    },
    {
      id: 2,
      title: 'Venda #1',
      description: 'Venda em andamento',
      saleValue: 1500,
      status: CommerceStatus.SALE_IN_PROGRESS,
      operationType: 'SALE'
    }
  ]
}

const CommerceSlice = createSlice({
  name: 'Commerce',
  initialState,
  reducers: {
    confirmRequest: (state, action: PayloadAction<number>) => {
      const item = state.items.find((c) => c.id === action.payload)
      if (item && item.status === CommerceStatus.REQUEST_PENDING) {
        item.status = CommerceStatus.REQUEST_CONFIRMED
      }
    },
    rejectRequest: (state, action: PayloadAction<number>) => {
      const item = state.items.find((c) => c.id === action.payload)
      if (item && item.status === CommerceStatus.REQUEST_PENDING) {
        item.status = CommerceStatus.REQUEST_REJECTED
      }
    },
    startSale: (state, action: PayloadAction<number>) => {
      const item = state.items.find((c) => c.id === action.payload)
      if (item && item.status === CommerceStatus.REQUEST_CONFIRMED) {
        item.status = CommerceStatus.SALE_IN_PROGRESS
        item.saleValue = item.saleValue || 0
      }
    },
    concludeSale: (state, action: PayloadAction<number>) => {
      const item = state.items.find((c) => c.id === action.payload)
      if (item && item.status === CommerceStatus.SALE_IN_PROGRESS) {
        item.status = CommerceStatus.SALE_CONCLUDED
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
    }
  }
})

export const {
  confirmRequest,
  rejectRequest,
  startSale,
  concludeSale,
  registerCommerce,
  removeCommerce
} = CommerceSlice.actions
export default CommerceSlice.reducer
