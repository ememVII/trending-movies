import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
    
    const isAuthinticated = useSelector((state) => state.user.token !== null)
    
    if(isAuthinticated) {
        return children
    } else {
        return <Navigate to={'/login'}/>
    }
}
