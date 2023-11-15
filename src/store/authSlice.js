import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { ToastContainer } from "react-toastify";

const url = process.env.AUTH_URL

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
    const {data} = await Axios.post(`${url}/signup`, userData)
    return data
})

export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
    const {data} = await Axios.post(`${url}/signin`, userData)
    return data
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {user: null, isLoading: false, error: false},
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            state.isLoading === true
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading === false
            state.error === false
            state.user = action.payload
            
            navigate('/login')
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading === false
            state.error === true
        })
        .addCase(loginUser.pending, (state) => {
            state.isLoading === true
            // state.error === false
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading === false
            state.error === false
            state.user === action.payload
        })
        .addCase(loginUser.rejected, (state) => {
            state.isLoading === false
            state.error === true
        })
    }
})

export default authSlice.reducer