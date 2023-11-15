import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetails } from '../../../../store/dataSlice'
import Details from '../Details/Details'

export default function MovieDetails() {
  const dispatch = useDispatch()
  let params = useParams()
  
  useEffect(() => {
    dispatch(getDetails({ category: 'movie', id: params.id }))
  }, [])

  return (
    <Fragment>
      <Details />
    </Fragment>
  )
}