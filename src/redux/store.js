import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './features/configurations/configurationsSlice'

export default configureStore({
  reducer: {
    configurations:counterReducer
  },
})