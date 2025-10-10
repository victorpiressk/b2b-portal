import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import SupplierCommerce from '../../models/SupplierCommerce'
import { CommerceStatus } from '../../utils/enums/PanelSection'

type CommerceState = {
  items: SupplierCommerce[]
}

const initialState: CommerceState = {
  items: [
    {
      id: 1,
      title: 'Solicitação #1',
      description: 'Aguardando resposta do fornecedor',
      saleValue: 0,
      status: CommerceStatus.REQUEST_PENDING
    }
  ]
}

const CommerceSlice = createSlice({
  name: 'commerce',
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
    }
  }
})

export const { confirmRequest, rejectRequest, startSale, concludeSale } =
  CommerceSlice.actions
export default CommerceSlice.reducer
