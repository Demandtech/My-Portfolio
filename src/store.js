import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from './redux/slices/projectsSlice'
import featureReducer from './redux/slices/featureSlice'

export default configureStore({
  reducer: {
    projects: projectsReducer,
    features: featureReducer,
  },
})
