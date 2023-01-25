import { createSlice } from '@reduxjs/toolkit'
import { removeItem } from '../../../localStorge'

const initialState = {
    error: false,
    user: null,
    isloading: false,
    ErrorText: "",
    logined: localStorage.getItem('token') ? true : false
}

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        errorLogin: (state, action) => {
            state.error = true
            state.ErrorText = action.payload
        },
        noErrorLogin: (state, action) => {
            state.error = false
            state.ErrorText = ""
        },
        SuccessLogined: (state, action) => {
            state.user = action.payload
            state.logined = true
        },
        logOut: (state, action) => {
            state.error = false
            state.user = null
            state.logined = localStorage.getItem('token') ? true : false
            removeItem('token')
        }
    }
})

export const { errorLogin, noErrorLogin, SuccessLogined, logOut } = LoginSlice.actions
export default LoginSlice.reducer