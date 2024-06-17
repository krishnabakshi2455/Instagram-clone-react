import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    postsdata: [],
    // its is an array to store multiple data in objects
};
export const Reelslice = createSlice({
    name: 'Reels',
    initialState,
    reducers: {
        PostsData: (state, action) => {
            state.postsdata.push(action.payload);
            // traditional method to push data in array  
        },
      

    },
})


export const { PostsData,  } = Reelslice.actions;

export default Reelslice.reducer;

