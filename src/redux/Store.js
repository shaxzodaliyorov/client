import { configureStore } from '@reduxjs/toolkit'
import AuthRegister from './reducers/auth/RegisterSlice'
import LoginSlice from './reducers/auth/LoginSlice'
import PostesSlice from './reducers/project/Posts'
const Store = configureStore({
    reducer: { AuthRegister, LoginSlice,PostesSlice }
})

export default Store
