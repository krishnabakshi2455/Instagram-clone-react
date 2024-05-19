import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: "",
    email: "",
    password: "",
    loggedinusername: "",
    loggedinuserpassword: ""
};

export const userSlice = createSlice({
    name: 'Form',
    initialState,
    reducers: {
        signup: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.email = action.payload.email;
        },
        loggedinuser: (state, action) => {
            state.loggedinusername = action.payload.loggedinusername;
            state.loggedinuserpassword = action.payload.loggedinuserpassword;
        },
        logout: (state) => {
            state.loggedinusername = null;
            state.loggedinuserpassword = null;
        }
    },
});

export const { signup, logout, loggedinuser } = userSlice.actions;

export default userSlice.reducer;
