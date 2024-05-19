import React from 'react'
import { Avatar, Box, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { signup,logout } from '../../../ReduxStore/StoreContainer';
import './Suggestions.css'
const Sugesstions = () => {
    const currentUsername = useSelector((state) => state.Form.username);
    return (
        <>
            <Box component="div" className='sugessions'>
                <Box component="div" className='suggestions__title'>
                    Sugegestions for you
                </Box>

                <Box component="div" className='sugesstions__usernames'>



                    <Box component="div" className='sugesstion__username'>

                        <Box component="div" className='username__left'>
                            <span className='avatar'>
                                <Avatar>K</Avatar>
                            </span>

                            <Box component="div" className='username__info'>
                                <span className='username'>Krishna</span>
                                <span className='relation'>New to Instagram</span>
                            </Box>

                        </Box>

                        <Button variant="text"  >Follow</Button>

                    </Box>

                    <Box component="div" className='sugesstion__username'>

                        <Box component="div" className='username__left'>
                            <span className='avatar'>
                                <Avatar>K</Avatar>
                            </span>

                            <Box component="div" className='username__info'>
                                <span className='username'>Krishna</span>
                                <span className='relation'>New to Instagram</span>
                            </Box>

                        </Box>

                        <Button variant="text" >Follow</Button>

                    </Box>

                    <Box component="div" className='sugesstion__username'>

                        <Box component="div" className='username__left'>
                            <span className='avatar'>
                                <Avatar>K</Avatar>
                            </span>

                            <Box component="div" className='username__info'>
                                <span className='username'>Krishna</span>
                                <span className='relation'>New to Instagram</span>
                            </Box>

                        </Box>

                        <Button variant="text" >Follow</Button>

                    </Box>

                    <Box component="div" className='sugesstion__username'>

                        <Box component="div" className='username__left'>
                            <span className='avatar'>
                                <Avatar>K</Avatar>
                            </span>

                            <Box component="div" className='username__info'>
                                <span className='username'>Krishna</span>
                                <span className='relation'>New to Instagram</span>
                            </Box>

                        </Box>

                        <Button variant="text" >Follow</Button>

                    </Box>

                    <Box component="div" className='sugesstion__username'>

                        <Box component="div" className='username__left'>
                            <span className='avatar'>
                                <Avatar>K</Avatar>
                            </span>

                            <Box component="div" className='username__info'>
                                <span className='username'>Krishna</span>
                                <span className='relation'>New to Instagram</span>
                            </Box>

                        </Box>

                        <Button variant="text" >Follow</Button>

                    </Box>

                    <Box component="div" className='sugesstion__username'>

                        <Box component="div" className='username__left'>
                            <span className='avatar'>
                                <Avatar>K</Avatar>
                            </span>

                            <Box component="div" className='username__info'>
                                <span className='username'>Krishna</span>
                                <span className='relation'>New to Instagram</span>
                            </Box>

                        </Box>

                        <Button variant="text" >Follow</Button>

                    </Box>

                </Box>

            </Box>


            {/* ====================Mobile Content======================= */}

            <Box component="div" className='header-main'>

                <Box component="div" className='header-title'>
                    <img className='header-img' src="" alt="notfound" />
                    <p>{currentUsername}</p>
                </Box>

                <Box component="div" className='header-title'>
                    <img className='header-img' src="http://images3.memedroid.com/images/UPLOADED96/5dff7350eefc0.jpeg" alt="notfound" />
                    <p>krishna</p>
                </Box>

                <Box component="div" className='header-title'>
                    <img className='header-img' src="http://images3.memedroid.com/images/UPLOADED96/5dff7350eefc0.jpeg" alt="notfound" />
                    <p>krishna2</p>
                </Box>

                <Box component="div" className='header-title'>
                    <img className='header-img' src="http://images3.memedroid.com/images/UPLOADED96/5dff7350eefc0.jpeg" alt="notfound" />
                    <p>krishna3</p>
                </Box>

                <Box component="div" className='header-title'>
                    <img className='header-img' src="http://images3.memedroid.com/images/UPLOADED96/5dff7350eefc0.jpeg" alt="notfound" />
                    <p>krishna4</p>
                </Box>

                <Box component="div" className='header-title'>
                    <img className='header-img' src="http://images3.memedroid.com/images/UPLOADED96/5dff7350eefc0.jpeg" alt="notfound" />
                    <p>krishna5</p>
                </Box>
            </Box>





        </>
    )
}

export default Sugesstions
