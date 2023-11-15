import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Details from '../Details/Details'
import { getDetails } from '../../../../store/dataSlice'
import { useParams } from 'react-router-dom'

export default function TvDetails() {
    const params = useParams()
    
    const dispatch = useDispatch()
    
    useEffect(() => {
    dispatch(getDetails({category: 'tv', id: params.id}))
    }, [])
    
  return (
    <Details />
  )
}
