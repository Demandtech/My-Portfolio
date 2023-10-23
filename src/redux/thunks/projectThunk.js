import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllProjects = createAsyncThunk(
  'projects',
  async (per_page, thunkAPI) => {
    try {
      const { data, status } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}`,
        {
          withCredentials: true,
          'Content-Type': 'application/json',
          Origin: 'http://localhost:3000',
        }
      )
      // console.log(data.data)
      if (status === 200) {
        return data
      }
      thunkAPI.rejectWithValue(data.message.detail)
      return []
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data.detail)
    }
  }
)

export const getLanguageProjects = createAsyncThunk(
  'projects/language',
  async (payload, thunkAPI) => {
    const { language } = payload

    try {
      const { data, status } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/language/${language}`,
        {
          withCredentials: true,
          'Content-Type': 'application/json',
          Origin: 'http://localhost:3000',
        }
      )

      if (status === 200) {
        return data
      }
      return []
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data.detail)
    }
  }
)

export const getSingleProject = createAsyncThunk(
  'projects/single',
  async (id, thunkAPI) => {
    try {
      const { data, status } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/${id}`
      )
      if (status === 200) {
        console.log(data)
        return data
      }
      console.log(data)
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue(error.response.data.detail)
    }
  }
)
