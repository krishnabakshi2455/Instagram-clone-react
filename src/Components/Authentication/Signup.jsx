import React, { useState } from 'react'
import './Signup.css'
import './Login.css'
import { Box } from '@mui/material'
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../ReduxStore/StoreContainer';
const Signup = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isSubmitted },
    } = useForm()



    const currentUsername = useSelector((state) => state.Form.username);
    const currentPassword = useSelector((state) => state.Form.password);
    const currentemail = useSelector((state) => state.Form.email);
    const dispatch = useDispatch();

    const delay = (d) => {
        return (
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, d * 1000)
            })
        )
    }
    const onSubmit = async (data) => {
        await delay(4)
        console.log(data)
        dispatch(signup({ username: data.username, password: data.password, email: data.email }))
    }

    console.log(currentUsername, currentPassword, currentemail);


    return (
        <>
            <Box component="div" className='Signup-main-div'>

            <Box component="div" className='Signup-main-img-div'>
                <img className='Signup-main-img' src="https://image.slidesharecdn.com/instagram-login-guide-160619105454/95/instagram-login-sign-up-guide-1-638.jpg?cb=1486972776" alt="" />
            </Box>
            <Box component="div" className='signup'>
                <img src="https://www.logolynx.com/images/logolynx/82/82abee4b6db4025c07209adec0d62acd.png" width={200} className='sidenav__logo' alt="notfound" />

                <form action="" onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder='Email' {...register("email", { required: { value: true, message: "This Field Is Required" }, minLength: { value: 3, message: "Minimum Length is 3" }, })} type="text" />

                    <div style={{ height: "20px" }}>
                        {errors.email && <div style={{ color: "red", fontSize: "13px", fontWeight: "bold" }}>{errors.email.message}</div>}
                    </div>

                    <input placeholder='User Name' {...register("username", { required: { value: true, message: "This Field Is Required" }, minLength: { value: 3, message: "Minimum Length is 3" }, })} type="text" />

                    <div style={{ height: "20px" }}>
                        {errors.username && <div style={{ color: "red", fontSize: "13px", fontWeight: "bold" }}>{errors.username.message}</div>}
                    </div>

                    <input placeholder='Password' {...register("password", { required: { value: true, message: "This Field Is Required" }, minLength: { value: 6, message: "Minimum Length is 6" } })} type="password" />

                    <div style={{ height: "20px" }}>
                        {errors.password && <div style={{ color: "red", fontSize: "13px", fontWeight: "bold" }}>{errors.password.message}</div>}
                    </div>

                    <div className='submitbtn-div'>
                        <button disabled={isSubmitting} className='submitbtn' type='submit' >Sign Up</button>
                        {isSubmitting && <div style={{ color: "greenyellow" }}>Loading...</div>}
                        {/* {isSubmitted && <div style={{color:"green"}}>Successfull</div>} */}
                    </div>
                </form>
            </Box>

            </Box>



        </>
    )
}

export default Signup
