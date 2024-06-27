import React, { useState } from 'react'
import './Login.css'
import { Box, } from '@mui/material'
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux';
import { loggedinuser } from '../ReduxStore/StoreContainer';
import InstaLogo from '../../Images/InstaLogo.png'
const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isSubmitted },
    } = useForm()


    const dispatch = useDispatch()

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
        dispatch(loggedinuser({ loggedinusername: data.username, loggedinuserpassword: data.password }))
    }

    const loggedinusername = useSelector((state) => state.Form.loggedinusername);
    const loggedinuserpassword = useSelector((state) => state.Form.loggedinuserpassword);

    const currentUsername = useSelector((state) => state.Form.username);
    const currentPassword = useSelector((state) => state.Form.password);


    console.log("from login", "loggedinusername===>", loggedinusername, "currentUsername===>", currentUsername);




    return (
        <>

            <Box component="div" className='login'>
                <img src={InstaLogo} width={200} className='sidenav__logo' alt="notfound" />

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='username' {...register("username", { required: { value: true, message: "This Field Is Required" }, minLength: { value: 3, message: "Minimum Length is 3" }, })} type="text" />

                    <div style={{ height: "20px" }}>
                        {errors.username && <div style={{ color: "red", fontSize: "13px", fontWeight: "bold" }}>{errors.username.message}</div>}
                    </div>

                    <input placeholder='Password' {...register("password", { required: { value: true, message: "This Field Is Required" }, minLength: { value: 6, message: "Minimum Length is 6" } })} type="password" />

                    <div style={{ height: "20px" }}>
                        {errors.password && <div style={{ color: "red", fontSize: "13px", fontWeight: "bold" }}>{errors.password.message}</div>}
                    </div>


                    <button disabled={isSubmitting} className='submitbtnl' type='submit'  >Login In</button>
                    {isSubmitting && <div style={{ color: "greenyellow" }}>Loading...</div>}
                    {/* {isSubmitted && <div style={{color:"green"}}>Submitted</div>} */}


                </form>
            </Box>



        </>
    )
}

export default Login
