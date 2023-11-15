import React from 'react'
import classes from './Loading.module.css'

export default function Loading() {
  return (
    <div className={`${classes.loading} center vh-100`}>
        <i className="fa-solid fa-spinner fa-spin fa-2xl"></i>
    </div>
  )
}
