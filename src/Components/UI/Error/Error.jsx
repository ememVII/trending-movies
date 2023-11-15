import React from 'react'
import { errorSvg } from '../../../Utilities/imgs'
import './Error.css'

export default function Error() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5 text-center apiError">
        <img src={errorSvg} className='w-50' />
        <h1>Error</h1>
        <h3>Please wait few minutes before you try again.</h3>
    </div>
  )
}
