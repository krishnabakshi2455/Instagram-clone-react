import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    Video: [],
    Images: []
    // its is an array to store multiple data in objects
};
export const Reelslice = createSlice({
    name: 'Reels',
    initialState,
    reducers: {
        PostImages: (state, action) => {
            state.Images.push(action.payload)
        },
        PostVideos: (state, action) => {
            state.Video.push(action.payload)
        }


    },
})


export const {  PostImages, PostVideos } = Reelslice.actions;

export default Reelslice.reducer;

