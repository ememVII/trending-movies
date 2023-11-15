import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'

const apiKey = process.env.API_KEY
const endPoint = 'https://api.themoviedb.org/3'
const animeGenreId = 16;

const initialState = {
  movies: [],
  tv: [],
  celebs: [],
  isLoading: false,
  error: false,
  totalPages: 13,
  currentPage: 1,
}

export const fetchMovies = createAsyncThunk('fetchData/movies', async page => {
  const { data } = await Axios.get(
    `${endPoint}/discover/movie?api_key=${apiKey}&with_genres=${animeGenreId}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
  )

  return {
    movies: data.results,
    currentPage: page,
  }
})

export const fetchTv = createAsyncThunk('fetchData/tv', async page => {
  const { data } = await Axios.get(
    `${endPoint}/discover/tv?api_key=${apiKey}&with_genres=${animeGenreId}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
  )

  return {
    tv: data.results,
    currentPage: page,
  }
})

export const fetchCelebs = createAsyncThunk('fetchData/celebs', async page => {
  const { data } = await Axios.get(
    `${endPoint}/person/popular?api_key=${apiKey}&language=en-US&page=${page}`
  )

  return {
    celebs: data.results,
    currentPage: page,
  }
})

const fetchDataSlice = createSlice({
  name: 'fetchData',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.isLoading = true
        state.error = false
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = false
        state.movies = action.payload.movies
      })
      .addCase(fetchMovies.rejected, state => {
        state.isLoading = false
        state.error = true
      })
      .addCase(fetchTv.pending, state => {
        state.isLoading = true
        state.error = false
      })
      .addCase(fetchTv.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = false
        state.tv = action.payload.tv
      })
      .addCase(fetchTv.rejected, state => {
        state.isLoading = false
        state.error = true
      })
      .addCase(fetchCelebs.pending, state => {
        state.isLoading = true
        state.error = false
      })
      .addCase(fetchCelebs.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = false
        state.celebs = action.payload.celebs
      })
      .addCase(fetchCelebs.rejected, state => {
        state.isLoading = false
        state.error = true
      })
  },
})

export default fetchDataSlice.reducer
