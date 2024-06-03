import React from 'react'
import './Following.css'
import { Avatar, Box, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { signup, logout } from '../../../ReduxStore/StoreContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Following = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <Box component="div" className='main-following-box'>
       
                    <Slider {...settings}>
                        <Box component="div" className='following-last-container' style={{display:"table-caption"}}>
                        <div className='following-last-container'>
                            <Avatar>K</Avatar>
                            <p className=''>Krishna </p>
                          </div>
                        </Box>

                        <Box component="div" className='following-last-container' >
                        <div className='following-last-container'>
                            <Avatar>K</Avatar>
                            <p className=''>Krishna </p>
                        </div>
                        </Box>

                        <Box component="div" className='following-last-container' >
                        <div className='following-last-container'>
                            <Avatar>K</Avatar>
                            <p className=''>Krishna </p>
                        </div>
                        </Box>

                        <Box component="div" className='following-last-container' >
                        <div className='following-last-container'>
                            <Avatar>K</Avatar>
                            <p className=''>Krishna </p>
                        </div>
                        </Box>

                        <Box component="div" className='following-last-container' >
                        <div className='following-last-container'>
                            <Avatar>K</Avatar>
                            <p className=''>Krishna </p>
                        </div>
                        </Box>

                        <Box component="div" className='following-last-container' >
                        <div className='following-last-container'>
                            <Avatar>K</Avatar>
                            <p className=''>Krishna </p>
                        </div>
                        </Box>

                        <Box component="div" className='following-last-container' >
                        <div className='following-last-container'>
                            <Avatar>K</Avatar>
                            <p className=''>Krishna </p>
                        </div>
                        </Box>

                        <Box component="div" className='following-last-container' >
                        <div className='following-last-container'>
                            <Avatar>K</Avatar>
                            <p className=''>Krishna </p>
                        </div>
                        </Box>

                        <Box component="div" className='following-last-container' >
                        <div className='following-last-container'>
                            <Avatar>K</Avatar>
                            <p className=''>Krishna </p>
                        </div>
                        </Box>
                    </Slider>




        

            </Box>



        </>
    )
}

export default Following
