import { createSlice } from '@reduxjs/toolkit'
import getAllRepos from '../thunks/projectThunk'

const initialState = {
  all_repos: [],
  languages: [],
  isLoading: false,
  error_message: '',
  display_repos: [],
  per_page: 10
}

const projectSlice = createSlice({
  name: 'projects',
  initialState,

  reducers: {
    getDisplayRepos: (state, { payload}) => {
      
      if (payload !== 'All') {
        state.display_repos = state.all_repos.filter(
          (repo) => repo.language === payload
        )
      } else {
        state.display_repos = state.all_repos
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllRepos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllRepos.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.all_repos = payload
        state.languages = [
          'All',
          ...new Set(
            payload
              .map((repo) => repo.language)
              .filter(
                (lang) =>
                  lang !== 'HTML' &&
                  lang !== null &&
                  lang !== 'CSS' &&
                  lang !== 'SCSS'
              )
          ),
        ]
      })
      .addCase(getAllRepos.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error_message = payload
      })
  },
})

export const { getDisplayRepos } = projectSlice.actions
export default projectSlice.reducer
