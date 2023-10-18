import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activePage: '',
}

const featureSlice = createSlice({
  name: 'slice',
  initialState,

  reducers: {
    setActivePage: (state, { payload }) => {
      state.activePage = payload
    },
  },
})

export const { setActivePage } = featureSlice.actions
export default featureSlice.reducer
