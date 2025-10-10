import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommerceStatus } from '../../utils/enums/CommerceStatus'

type FilterState = {
  term: string
  value: CommerceStatus
}

const initialState: FilterState = {
  term: '',
  value: CommerceStatus.ALL
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<CommerceStatus>) => {
      state.value = action.payload
    },
    resetFilter: (state) => {
      state.term = ''
      state.value = CommerceStatus.ALL
    }
  }
})

export const { changeTerm, changeFilter, resetFilter } = FilterSlice.actions
export default FilterSlice.reducer
