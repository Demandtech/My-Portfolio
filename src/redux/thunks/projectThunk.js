import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getAllRepos = createAsyncThunk('repos', async (per_page, thunkAPI) => {
  try {
    const { data, status } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/users/demandtech/repos?per_page=100`
    )
    if (status === 200) {
      return data
    }
    return []
  } catch (error) {
    thunkAPI.rejectWithValue('Not Found')
    console.log(error)
  }
})
export default getAllRepos
