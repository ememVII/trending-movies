import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const userSlice = createSlice({
    name: 'user',
    initialState: {token: null, userData: null},
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
            localStorage.setItem('userToken', state.token)
        },
        clearToken: (state) => {
            state.token = null
            state.userData = null
            localStorage.removeItem('userToken')
        },
        saveUserData: (state, action) => {
            state.userData = jwtDecode(action.payload)
        }
    }
})

export const {setToken, clearToken, saveUserData} = userSlice.actions

export default userSlice.reducer