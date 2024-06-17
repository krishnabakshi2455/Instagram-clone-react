import { Box, Button, Avatar } from '@mui/material'
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
import { loggedinuser, signup, logout } from '../../ReduxStore/StoreContainer';
import Reels from '../Posts/Reels/Reels';

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
            <Box component="div" className='navbar-super-div flex w-screen lg:justify-around'>

                <Box component="div" className='navbar-main-div'>
                    <img src="https://www.logolynx.com/images/logolynx/82/82abee4b6db4025c07209adec0d62acd.png" width={150} className=' ml-4 mt-4' alt="notfound" />

                    <Box component="div" className='navbar-container'>


                        <Box component="div" className='icon-container '>
                            <Link to="/Posts" className=' text-white cursor-pointer'><HomeIcon /></Link>
                            <Link to="/Posts" className=' text-white cursor-pointer'><SearchIcon /></Link>

                            <Link to="/Posts" className=' text-white cursor-pointer'><ExploreIcon /></Link>

                            <Link to="/Posts" className=' text-white cursor-pointer'><SlideshowIcon /></Link>

                            <Link to="/Posts" className=' text-white cursor-pointer'><ChatIcon /></Link>
                            <Link to="/Posts" className=' text-white cursor-pointer'><FavoriteBorderIcon /></Link>

                            <Link to="/Create" className=' text-white'><AddCircleOutlineIcon /></Link>



                            <Avatar className='w-2'>{currentUsername[0]}</Avatar>


                        </Box>

                        <Box component="div" className='navbar-name-container flex flex-col gap-10'>
                            <Link to="/" className='text-white font-serif cursor-pointer'>Home</Link>
                            <Link className='text-white font-serif cursor-pointer'>Search</Link>
                            <Link className='text-white font-serif cursor-pointer'>Explore</Link>
                            <Link className='text-white font-serif cursor-pointer'>Reel</Link>
                            <Link className='text-white font-serif cursor-pointer'>Message</Link>
                            <Link className='text-white font-serif cursor-pointer'>Notification</Link>
                            <Link to="/Create" className='text-white font-serif cursor-pointer'>Create</Link>
                            <Link to="/Posts" className=' text-white cursor-pointer ml-2 mt-2'>{currentUsername}</Link>

                        </Box>


                    </Box>


                </Box>

                <Box component="div" className='post-conatainer-navabar'>

                    <Routes>
                        <Route path="/" element={<Posts />} />
                        <Route path="/Posts" element={<Posts />} />
                        <Route path="/Create" element={<Reels/>} />
                    </Routes>

                </Box>



            </Box>

        </>
    )
}

export default Navbar
