import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'

const apiKey = process.env.API_KEY
const endPoint = 'https://api.themoviedb.org/3'
const animeGenreId = 16

// get Trending media data function
export const getTrending = createAsyncThunk(
  'data/trending',
  async (category) => {
    const totalPagesToFetch = 10; // Fetch 10 pages

    let topRatedAnime = [];
    let movieIdsSet = new Set();

    for (let page = 1; page <= totalPagesToFetch; page++) {
      const { data } = await Axios.get(
        `https://api.themoviedb.org/3/${category}/top_rated?api_key=${apiKey}&language=en-US&page=${page}&with_genres=${animeGenreId}`
      );

      // Filter only Anime and accumulate the results
      const animeResults = data.results.filter((movie) =>
        movie.genre_ids.includes(animeGenreId)
      );
      
      animeResults.forEach((movie) => {
        if (!movieIdsSet.has(movie.id)) {
          topRatedAnime.push(movie);
          movieIdsSet.add(movie.id);
        }
      });
    }

    return topRatedAnime;
  }
);

// export const getTrending = createAsyncThunk(
//   'data/trending',
//   async (category) => {
//     const { data } = await Axios.get(
//       `https://api.themoviedb.org/3/${category}/top_rated?api_key=${apiKey}&language=en-US&page=1&with_genres=${animeGenreId}`
//     )
//       // Filter only Anime
//       const topRatedAnime =  data.results.filter((movie) => movie.genre_ids.includes(animeGenreId))
      
//     return topRatedAnime
//   }
// )
// get media Details function
export const getDetails = createAsyncThunk(
  'data/details',
  async ({ category, id }) => {
    const { data } = await Axios.get(
      `${endPoint}/${category}/${id}?api_key=${apiKey}`
    )
    
    return data
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    movie: [],
    tv: [],
    // person: [],
    isLoading: false,
    error: false,
    details: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getTrending.pending, state => {
        state.isLoading = true
        state.error = false
      })
      .addCase(getTrending.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = false
        const category = action.meta.arg
        state[category].push(action.payload)
        // fix actions payloads are too large making Redux DevTools serialization slow and consuming a lot of memory ==Error==
        state.details = null
      })
      .addCase(getTrending.rejected, state => {
        state.isLoading = false
        state.error = true
      })
      .addCase(getDetails.pending, state => {
        state.isLoading = true
        state.error = false
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = false
        state.details = action.payload
        // fix actions payloads are too large making Redux DevTools serialization slow and consuming a lot of memory ==Error==
        state.movie = state.tv = []
      })
      .addCase(getDetails.rejected, (state, action) => {
        state.isLoading = false
        state.error = true
      })
  },
})

export default dataSlice.reducer