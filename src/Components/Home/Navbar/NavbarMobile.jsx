import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Routes, Route } from 'react-router-dom';
import Posts from '../Posts/Posts'
import { loggedinuser, signup, logout } from '../../ReduxStore/StoreContainer';
import Reels from '../Posts/CreatePosts/Reels';
import { Box, Button, Avatar } from '@mui/material'
const NavbarMobile = () => {
  const currentUsername = useSelector((state) => state.Form.username);
  const currentPassword = useSelector((state) => state.Form.password);
  console.log("from NavbarMobile", currentUsername);
  const dispatch = useDispatch();
  const handlelogout = () => {
    console.log("logout");
    dispatch(logout())
  }
  return (
    <>
    <div className='navmobile-first-div'>
        <div className='icon-container-navmobile flex justify-between items-center'>
          <Link to="/Posts" className=' text-white cursor-pointer'><HomeIcon /></Link>
          <Link  className=' text-white cursor-pointer'><ChatIcon /></Link>
          <Link to="/Create" className=' text-white'><AddCircleOutlineIcon /></Link>
          <Avatar  >{currentUsername[0]}</Avatar>
          <Link className=' text-white cursor-pointer' onClick={handlelogout}><LogoutIcon /></Link>

        </div>



              <Routes>
                  <Route path="/Posts" element={<Posts />} />
                  <Route path="/Create" element={<Reels />} />
              </Routes>
    </div>
    
      
    </>
  )
}

export default NavbarMobile
