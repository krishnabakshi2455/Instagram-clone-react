import React, { useState } from 'react'
import './Reels.css'
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { PostsData, Descriptions } from '../../../ReduxStore/ReelStore';
const Reels = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    const delay = (d) => {
        return (
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, d * 1000)
            })
        )
    }

    const dispatch = useDispatch()



    const onSubmit = async (data) => {
        await delay(0)
        // console.log("from reels component image =>>",data.photo[0].name);
        // console.log("form reels component description", data.description)

        // dispatch(PostsData({ postsdata: data.photo[0].name }))
        // dispatch(Descriptions({ description: data.photo[0].name }))
        const postContent = data.photo[0].name;
        const postDescription = data.description;

        // Dispatch the form data directly
        dispatch(PostsData(postContent));
        dispatch(Descriptions(postDescription));
        // i use this to send multiple data to make multiple posts 
        console.log("data sended to redux");

    }





    const postsDataNew = useSelector((state) => state.Reels.postsdata);
    const postsDataNewNot = useSelector((state) => state.Reels.description);

    console.log("from reel component reduxreel PostsData =>>", postsDataNew);
    console.log("from reel component reduxreel Descriptions data =>>", postsDataNewNot);


    return (
        <>
            <div className='reel-main-div'>


                <form action="" onSubmit={handleSubmit(onSubmit)} className='form-st'>

                    <div className='div-img'>
                        <Typography>Create a Post</Typography>
                    </div>


                    <div className='flex flex-col items-center mt-12 gap-3'>
                        <input placeholder='photo' {...register("photo", { required: { value: true, message: "This Field Is Required" } })} type="file" className=' ml-24' />

                        <div style={{ height: "20px" }}>
                            {errors.photo && <div style={{ color: "red", fontSize: "13px", fontWeight: "bold" }}>{errors.photo.message}</div>}
                        </div>

                        <input placeholder='Description' {...register("description", { required: { value: true, message: "This Field Is Required" } })} type="text" className='text-black' />

                        <div style={{ height: "20px" }}>
                            {errors.password && <div style={{ color: "red", fontSize: "13px", fontWeight: "bold" }}>{errors.description.message}</div>}
                        </div>


                        <Button className='submit-reel' type='submit' variant="contained">Create</Button>
                        {/* {isSubmitting && <div style={{ color: "greenyellow" }}>Loading...</div>} */}
                        {/* {isSubmitted && <div style={{color:"green"}}>Submitted</div>} */}

                    </div>

                </form>

            </div>

        </>
    )
}

export default Reels
