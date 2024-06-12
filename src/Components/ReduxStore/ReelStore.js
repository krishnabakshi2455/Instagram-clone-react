import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    postsdata: [],
    description: [],
    // its is an array to store multiple data
};
export const Reelslice = createSlice({
    name: 'Reels',
    initialState,
    reducers: {
        PostsData: (state,action) => {
            state.postsdata.push(action.payload);
            // traditional method to push data in array  
        },
        Descriptions: (state,action) => {
            state.description.push(action.payload);
        },
        
    },
})


export const { PostsData, Descriptions } = Reelslice.actions;

export default Reelslice.reducer;

