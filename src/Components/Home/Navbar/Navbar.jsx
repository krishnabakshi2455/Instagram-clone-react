import { Box, Button } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css'
import { Link, Routes, Route } from 'react-router-dom';
import Posts from '../Posts/Posts'
import MenuIcon from '@mui/icons-material/Menu';
import Sugesstions from '../Posts/Suggestions/Suggestions';
import { loggedinuser, signup,logout } from '../../ReduxStore/StoreContainer';
const Navbar = () => {

    const currentUsername = useSelector((state) => state.Form.username);
    const currentPassword = useSelector((state) => state.Form.password);
    console.log("from sidenav", currentUsername);
    const dispatch = useDispatch();
    const handlelogout = () => {
        console.log("logout");
        dispatch(logout())
    }

    
    return (
        <>
            <Box component="div" className='navbar-super-div flex w-screen justify-between'>

            <Box component="div" className='navbar-main-div'>
                
                <Box component="div" className='navbar-container'>
                    <img src="https://www.logolynx.com/images/logolynx/82/82abee4b6db4025c07209adec0d62acd.png" width={200} className=' ml-4' alt="notfound" /> 
                    <Box component="div" className='navbar-icon-container flex gap-3 items-center justify-center cursor-pointer'>
                        <Link to="/Posts" className=' text-white'><HomeIcon /></Link>
                        <Link to="/Posts" className=' text-white'>Home</Link>
                    </Box>

                    <Box component="div" className='navbar-icon-container flex gap-3 items-center justify-center cursor-pointer'>
                        <Link to="/Posts" className=' text-white'><SearchIcon /></Link>
                        <Link to="/Posts" className=' text-white'>Search</Link>
                    </Box>

                    <Box component="div" className='navbar-icon-container flex gap-3 items-center justify-center cursor-pointer'>
                        <Link to="/Posts" className=' text-white'><ExploreIcon /></Link>
                        <Link to="/Posts" className=' text-white'>Explore</Link>
                    </Box>

                    <Box component="div" className='navbar-icon-container flex gap-3 items-center justify-center cursor-pointer'>
                        <Link to="/Posts" className=' text-white'><SlideshowIcon /></Link>
                        <Link to="/Posts" className=' text-white ml-4 text-xl'>Reel</Link>
                    </Box>

                    <Box component="div" className='navbar-icon-container flex gap-3 items-center justify-center cursor-pointer'>
                        <Link to="/Posts" className=' text-white'><ChatIcon /></Link>
                        <Link to="/Posts" className=' text-white'>Message</Link>
                    </Box>

                    <Box component="div" className='navbar-icon-container flex gap-3 items-center justify-center ml-5 cursor-pointer '>
                        <Link to="/Posts" className=' text-white'><FavoriteBorderIcon /></Link>
                        <Link to="/Posts" className=' text-white'>Notifications</Link>
                    </Box>


                    <Box component="div" className='navbar-icon-container flex gap-3 items-center justify-between cursor-pointer w-24 ml-5 '>
                        <Link to="/Posts" className=' text-white'><AddCircleOutlineIcon /></Link>
                        <Link to="/Posts" className=' text-white'>Create</Link>
                    </Box>
                    

                    <Box component="div" className='navbar-icon-container flex gap-3 items-center  cursor-pointer w-24 ml-5 mt-14 mb-3 '>
                        <Link to="/Posts" className=' text-white'><MenuIcon /></Link>
                        <Link to="/Posts" className=' text-white'>More</Link>
                    </Box>
                </Box>
                

            </Box>

            <Routes>
                <Route path="/Posts" element={<Posts />} />
            </Routes>

            </Box>

        </>
    )
}

export default Navbar
