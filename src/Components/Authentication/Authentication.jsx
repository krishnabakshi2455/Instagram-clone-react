import React, { useState } from 'react'
import './Authentication.css'
import { Box, Button } from '@mui/material'
import Login from './Login'
import Signup from './Signup'
import LoginImage from '../../Images/LoginImage.webp'
const Authentication = () => {
    const [active, setactive] = useState("login")

    const handlechange = () => {
        if (active === "login") {
            setactive("signup");
        } else {
            setactive("login");
        }
    }
    return (
        <>
            <Box component="div" className='authentication'>
      
                <Box component="div" className='auth__left'>
                    <img src={LoginImage} alt="" />
                </Box>

                <Box component="div" className='auth__right'>
                    {
                        active === "login" ? <Login /> : <Signup />
                    }

                    <Box component="div" className='auth__more'>
                        
                        <span>
                            {
                                active === "login" ? (<>Dont have an account? <Button variant="text" onClick={handlechange}>Sign Up</Button></>)
                                    : (<>have an account<Button variant="text" onClick={handlechange}>Log In</Button></>)
                            }

                        </span>
                    </Box>
                </Box>

            </Box>




        </>
    )
}

export default Authentication
