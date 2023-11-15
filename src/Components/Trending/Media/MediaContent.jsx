import React from 'react'
import classes from './MediaContent.module.css'
import { noImg } from '../../../Utilities/imgs'
import { Link } from 'react-router-dom'

export default function MediaContent({ mediaType, type }) {
  const baseURL = 'https://image.tmdb.org/t/p/w500'

  let rating = Math.round(mediaType.vote_average * 10) / 10

  let posterPath
  let mediaTitle
  let typeDetails
  if (type === 'movie') {
    posterPath = mediaType.poster_path
    mediaTitle = mediaType.title
    typeDetails = 'movieDetails'
  } else if (type === 'tv') {
    posterPath = mediaType.poster_path
    mediaTitle = mediaType.name
    typeDetails = 'tvDetails'
  }

  return (
    <>
      {type !== 'people' && (
        <span className={`${classes.rating} position-absolute`}>{rating}</span>
      )}
      {posterPath === null && (
        <img src={noImg} className={`${classes.poster} w-100`} />
      )}
      
      {type !== 'people' ? (
        <Link to={`/${typeDetails}/${mediaType.id}`}>
          <img
            className={`${classes.poster} w-100`}
            src={`${baseURL}${posterPath}`}
          />
          <h3 className="h6 mt-2 mb-3">{mediaTitle}</h3>
        </Link>
      ) : (
        <>
          <img
            className={`${classes.poster} w-100`}
            src={`${baseURL}${posterPath}`}
          />
          <h3 className="h6 mt-2 mb-3">{mediaTitle}</h3>
        </>
      )}
    </>
  )
}
