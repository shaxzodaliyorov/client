import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    projectResult: []
}

const PostesSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    }
})

export const { } = PostesSlice.actions

export default PostesSlice.reducer