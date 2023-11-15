import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import dataReducer from './dataSlice'
import fetchDataReducer from './fetchDataSlice'
import jwtDecode from "jwt-decode";

const token = localStorage.getItem('userToken')

// decode userData and save it in preloaded state
let userData = null

if(token) {
    let encodedToken = token
    let decodedToken = jwtDecode(encodedToken)
    userData = decodedToken
}
// preload state when refresh
const preloadedState = {
    user: {
        token: token,
        userData: userData
    }
}

export const store = configureStore({
    reducer: {user: userReducer, data: dataReducer, fetchData: fetchDataReducer} , preloadedState
})