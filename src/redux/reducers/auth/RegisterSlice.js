import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    error: false,
    Errortext: '',
}

export const AuthRegister = createSlice({
    name: 'register',
    initialState,
    reducers: {
        ErrorRegister: (state, action) => {
            state.error = true
            state.Errortext = action.payload
        },
        NoError: (state, action) => {
            state.error = false
            state.Errortext = ''
        }
    }
})

export const { ErrorRegister, NoError } = AuthRegister.actions

export default AuthRegister.reducer;