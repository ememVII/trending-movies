import React, { Fragment, useEffect, useRef, useState } from 'react'
import Axios from 'axios'
import MediaContent from '../../Trending/Media/MediaContent'
import classes from './Search.module.css'
import { motion } from 'framer-motion'

export default function Search() {
  const apiKey = process.env.API_KEY
  const url = 'https://api.themoviedb.org/3/search'

  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')
  const [type, setType] = useState('movie')

  const selectTypeRef = useRef(null)

  const inputChangeHandler = e => {
    setQuery(e.target.value)
  }

  const searchData = async query => {
    const animeGenreId = 16
    const selectedType = selectTypeRef.current.value
    setType(selectedType)

    const { data } = await Axios.get(
      `${url}/${selectedType}?api_key=${apiKey}&language=en-US&query=${query}&include_adult=false&with_genres=${animeGenreId}`
    )

    
    // Filter the results to include only anime movies
      const animeMovies = data.results.filter((movie) =>
        movie.genre_ids.includes(animeGenreId)
      );

      setResults(animeMovies)
    
  }

  useEffect(() => {
    searchData(query)
  }, [query])

  return (
    <Fragment>
      <motion.h2 className="mt-2">Search</motion.h2>
      <div className={`${classes.search} center mt-3`}>
        <input
          type="text"
          className={`${classes.searchInput}`}
          value={query}
          onChange={inputChangeHandler}
        />
        <select className={`${classes.selectInput}`} ref={selectTypeRef}>
          <option value={'movie'}>Movies</option>
          <option value={'tv'}>Tv Shows</option>
        </select>
      </div>

      <motion.div
        className="row mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {results &&
          results.map(movie => (
            <div className="col-md-2 my-3" key={movie.id}>
              <motion.div
                className="media position-relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <MediaContent mediaType={movie} type={type} />
              </motion.div>
            </div>
          ))}
      </motion.div>
    </Fragment>
  )
}
