import React from 'react'
import './Following.css'
import { Avatar, Box, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { signup, logout } from '../../../ReduxStore/StoreContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Following = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    };
    return (
        <>
            <Box component="div" className='main-following-box'>

                <Slider {...settings}>
                    <Box component="div" className='following-last-container' style={{ display: "table-caption", width: 0 }}>
                        <div className='following-last-container' >
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
