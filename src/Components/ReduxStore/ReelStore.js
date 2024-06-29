import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    Video: [],
    Images: [],
    MultipleImage: [],
    DescriptionForMultImg:[],
    MultipleVideo: [],
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
        },
        PostMultipleImages: (state, action) => {
            // state.MultipleImage.push(action.payload)
            state.MultipleImage.push(...action.payload.postContent);
        },
        PostMultipleVideos: (state, action) => {
            // state.MultipleVideo.push(action.payload)
            state.MultipleVideo.push(...action.payload.postContent);
        }


    },
})


export const { PostImages, PostVideos, PostMultipleImages, PostMultipleVideos } = Reelslice.actions;

export default Reelslice.reducer;

