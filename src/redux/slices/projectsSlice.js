import { createSlice } from '@reduxjs/toolkit'
import {
  getAllProjects,
  getLanguageProjects,
  getSingleProject,
  getSearchProjects,
} from '../thunks/projectThunk'

const initialState = {
  projects: [],
  single_project: [],
  search_projects: [],
  isLoading: false,
  error_message: '',
  per_page: 10,
}

const projectSlice = createSlice({
  name: 'projects',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllProjects.pending, (state) => {
        state.isLoading = true
        state.error_message = ''
        state.projects = []
      })
      .addCase(getAllProjects.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.projects = payload
        state.error_message = ''
      })
      .addCase(getAllProjects.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error_message = payload
      })

      .addCase(getLanguageProjects.pending, (state) => {
        state.isLoading = true
        state.projects = []
        state.error_message = ''
      })
      .addCase(getLanguageProjects.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.projects = payload
        state.error_message = ''
      })
      .addCase(getLanguageProjects.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error_message = payload
        state.projects = []
        state.error_message = payload
      })
      .addCase(getSingleProject.pending, (state) => {
        state.isLoading = true
        state.single_project = {}
      })
      .addCase(getSingleProject.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.single_project = payload
      })
      .addCase(getSingleProject.rejected, (state, { payload }) => {
        state.error_message = payload
        state.single_project = {}
      })
      .addCase(getSearchProjects.pending, (state) => {
        state.search_projects = []
        state.isLoading = true
        state.error_message = ''
      })
      .addCase(getSearchProjects.fulfilled, (state, { payload }) => {
        state.search_projects = payload
        state.isLoading = false
        state.error_message = ''
      })
      .addCase(getSearchProjects.rejected, (state, { payload }) => {
        state.error_message = payload
        state.isLoading = false
        state.search_projects = []
      })
  },
})

export const { getDisplayRepos } = projectSlice.actions
export default projectSlice.reducer
