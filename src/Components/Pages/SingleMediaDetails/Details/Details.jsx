import React, { Fragment } from 'react'
import Loading from '../../../UI/Loading/Loading'
import Error from '../../../UI/Error/Error'
import { useSelector } from 'react-redux'
import classes from './Details.module.css'

export default function Details() {
  const {details, isLoading, error} = useSelector((state) => state.data)
  const baseURL = 'https://image.tmdb.org/t/p/w500'

  if(isLoading) {
    return <Loading/>
  }
  
  if(error) {
    return <Error/>
  }
  
  return (
    <Fragment>
      {details && <div className={`row mt-4 ${classes.details}`}>
            <div className="col-md-4 image">
              <img
                src={`${baseURL}${details.poster_path}`}
                className="w-100"
                alt="poster"
              />
            </div>
            <div className="col-md-8 mt-3 content">
              <h3>{details.title || details.original_name}</h3>
              <h5 className="text-muted mb-3">{details.tagline}</h5>
              {details.genres.map(genre => (
                <span className={`${classes.genre}`} key={genre.id}>
                  {genre.name}
                </span>
              ))}
              <div className="details mt-4 ">
                <p>Vote: {Math.round(details.vote_average * 10) / 10}</p>
                <p>Vote Count: {details.vote_count}</p>
                <p>Popularity: {Math.round(details.popularity * 10) / 10}</p>
                <p>
                  Release Date: {details.release_date || details.first_air_date}
                </p>
                <h5 className="text-muted mt-4">{details.overview}</h5>
              </div>
            </div>
          </div>}
    </Fragment>
  )
}
