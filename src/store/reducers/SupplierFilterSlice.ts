import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommerceStatus } from '../../utils/enums/PanelSection'

type FilterState = {
  term?: string
  activeSection: CommerceStatus
}

const initialState: FilterState = {
  term: '',
  activeSection: CommerceStatus.REQUEST_PENDING
}

const SupplierFilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    setActiveSection: (state, action: PayloadAction<CommerceStatus>) => {
      state.activeSection = action.payload
    }
  }
})

export const { setTerm, setActiveSection } = SupplierFilterSlice.actions
export default SupplierFilterSlice.reducer
