import React, { useState,useEffect } from 'react'
import Sugesstions from './Suggestions/Suggestions'
import { Box, Avatar } from '@mui/material'
import "./Posts.css"
import { useSelector, useDispatch } from 'react-redux';
import { loggedinuser, signup, logout } from '../../ReduxStore/StoreContainer';
import { Link, Routes, Route } from 'react-router-dom';
import Following from './Following/Following'
import NavbarMobile from '../Navbar/NavbarMobile';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { PostImages, PostVideos } from '../../ReduxStore/ReelStore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import ForumIcon from '@mui/icons-material/Forum';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LoginImage from '../../../Images/WelcomeImage.jpg'
const Posts = () => {
  const currentUsername = useSelector((state) => state.Form.username);
  const currentPassword = useSelector((state) => state.Form.password);
  console.log("from posts currentusername=>>", currentUsername);

  const Postdataimage = useSelector((state) => state.Reels.Images);
  const Postdatavideo = useSelector((state) => state.Reels.Video);
  console.log("From posts component", Postdataimage);


  const imageExtensions = ['jpeg', 'jpg', 'gif', 'png', 'bmp', 'webp', 'svg'];
  const videoExtensions = ['mp4', 'webm', 'ogg', 'avi', 'mov', 'wmv', 'flv', 'mkv'];



 


  

  return (
    <>
      <Box component="div" className='post-super-container'>
        <Box component="div" className='posts-container-main '>
          <Box component="div" className='post-following-container'>

            <Following />

          </Box>
          <div className='reel-container-main'>

            <div className='reel-container'>

              {
                Postdataimage && Postdataimage.map((item, index) => {
                 
                  // console.log("images from redux store in posts==>>", item.postContent);
                  return (

                    <div className='reel-start' key={index}>

                      <div className='reel-header'>

                        <div className='reel-name-container'>
                          <Avatar  >{currentUsername[0]}</Avatar>
                          <p>{currentUsername} </p>
                        </div>

                        <MoreHorizIcon />
                      </div>
                      {/* ======================================== */}

                      <div className='reel-content'>
                        <img src={item.postContent} alt="Post Content" onError={(e) => console.log("Error loading image:", e.target.src)} />

                       

                        
                      </div>

                      <div className='reel-icons flex items-center justify-between'>
                        <div className='flex gap-5 mt-4 mb-4 ml-4 cursor-pointer'>
                          <FavoriteBorderIcon />
                          <ForumIcon />
                          <SendIcon />
                        </div>
                        <BookmarkBorderIcon className=' cursor-pointer mr-4' />
                      </div>

                      <div className='reel-descr flex'>
                        <p className='flex'>{currentUsername}*</p>
                        <p>{item.postDescription}</p>
                      </div>

                      <div className='reel-comment mt-6'>
                        <div className='flex'>
                          <label htmlFor="" className=' mr-4 lg:text-lg text-sm'>Add Comment </label>
                          <input type="text" className=' bg-gray-900 border-gray-800 lg:w-80 lg:h-8 w-32' />
                        </div>

                        <div className='all-comments '>
                          <p>All comments</p>
                        </div>

                      </div>

                    </div>
                  )
                })
              }
{/* ===================================VIDEO ITRATION====================================== */}
              {
                Postdatavideo && Postdatavideo.map((item, index) => {
                  // console.log("images from redux store in posts==>>", item.postContent);
                  return (

                    <div className='reel-start' key={index}>

                      <div className='reel-header'>

                        <div className='reel-name-container'>
                          <Avatar  >{currentUsername[0]}</Avatar>
                          <p>{currentUsername} </p>
                        </div>

                        <MoreHorizIcon />
                      </div>
                      {/* ======================================== */}

                      <div className='reel-content'>
                        <video src={item.postContent} controls />




                      </div>

                      <div className='reel-icons flex items-center justify-between'>
                        <div className='flex gap-5 mt-4 mb-4 ml-4 cursor-pointer'>
                          <FavoriteBorderIcon />
                          <ForumIcon />
                          <SendIcon />
                        </div>
                        <BookmarkBorderIcon className=' cursor-pointer mr-4' />
                      </div>

                      <div className='reel-descr flex'>
                        <p className='flex'>{currentUsername}*</p>
                        <p>{item.postDescription}</p>
                      </div>

                      <div className='reel-comment mt-6'>
                        <div className='flex'>
                          <label htmlFor="" className=' mr-4 lg:text-lg text-sm'>Add Comment </label>
                          <input type="text" className=' bg-gray-900 border-gray-800 lg:w-80 lg:h-8 w-32' />
                        </div>

                        <div className='all-comments '>
                          <p>All comments</p>
                        </div>

                      </div>

                    </div>
                  )
                })
              }








              {/* ==========================================BELOW THIS ARE DUMMY CARDS======================================================================= */}


              <div className='reel-start'>

                <div className='reel-header'>

                  <div className='reel-name-container'>
                    <Avatar  >{currentUsername[0]}</Avatar>
                    <p>{currentUsername} </p>
                  </div>

                  <MoreHorizIcon />
                </div>
                {/* ======================================== */}

                <div className='reel-content'>
                  <img src={LoginImage} alt="" />
                </div>

                <div className='reel-icons flex items-center justify-between'>
                  <div className='flex gap-5 mt-4 mb-4 ml-4 cursor-pointer'>
                    <FavoriteBorderIcon />
                    <ForumIcon />
                    <SendIcon />
                  </div>
                  <BookmarkBorderIcon className=' cursor-pointer mr-4' />
                </div>

                <div className='reel-descr flex'>
                  <p>{currentUsername} lorem1500</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, exercitationem Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero cupiditate officiis quam quasi obcaecati perspiciatis nesciunt. Possimus, rem laudantium deserunt dolore tenetur eligendi id ratione. Minus ea molestiae tempora earum quis repellat cumque voluptates recusandae, saepe animi voluptatibus molestias accusantium voluptatem quibusdam esse iure ullam tenetur similique officiis explicabo!.</p>
                </div>

                <div className='reel-comment mt-6'>
                  <div className='flex'>
                    <label htmlFor="" className=' mr-4'>Add Comment </label>
                    <input type="text" className=' bg-gray-900 border-gray-800 lg:w-80 lg:h-8 w-32' />
                  </div>

                  <div className='all-comments '>
                    <p>All comments</p>
                  </div>

                </div>

              </div>

            </div>




            <Box component="div" className='suggestions-container'>
              <Sugesstions />
            </Box>

          </div>

          <div className='Navbarmobile-container'>
            <NavbarMobile />
          </div>


        </Box>


      </Box>
    </>
  )
}

export default Posts
