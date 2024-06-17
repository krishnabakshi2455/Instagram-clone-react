import React, { useState } from 'react'
import './Reels.css'
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { PostsData,} from '../../../ReduxStore/ReelStore';
import NavbarMobile from '../../Navbar/NavbarMobile';

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



    const imageExtensions = ['jpeg', 'jpg', 'gif', 'png', 'bmp', 'webp', 'svg'];
   


    const getFileExtension = (url) => {
        const parts = url.split('.');
        return parts[parts.length - 1].toLowerCase();
    };

    /*
        Explanation Here ==>>
       1. The getFileExtension function takes a URL as an input and returns the file extension
       2. The On Submit Function Does a lot of work  
            a. Get the data in object 
            b. the file variable contain the main url 
            c. reader is an FileReader API.
            d. dataurl is using the getFileExtension function to return the url extension 
            e. In if if the imageExtensions includes  the extension returned by getFileExtension then the image will be changed into data url string because normal screenshot or photos does not work in img tag and then dispatch the data to the Redux store via the PostsData action
            f. In else if the first condition does not match then the url will be sent as it is without any change
    */

    const onSubmit = async (data) => {
        await delay(0);
        console.log(data);
        let file = data.photo[0];
        let reader = new FileReader();
        let dataurl = getFileExtension(data.photo[0].name)
        console.log("data url hai ye",dataurl);

        
        if (imageExtensions.includes(dataurl)) {
            reader.onloadend = () => {
                const postContent = reader.result; // Data URL string
                const postDescription = data.description;
                dispatch(PostsData({ postContent, postDescription }));
            };

            reader.readAsDataURL(file);
        } else {
            const postContent = data.photo[0].name;
            const postDescription = data.description;
            dispatch(PostsData({ postContent: postContent, postDescription: postDescription }));
        }

    };

    const postdatamain = useSelector((state) => state.Reels.postsdata);

    console.log('from reel component reduxreel reelurl =>>', postdatamain);










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

            <div className='Navbarmobile-container'>
                <NavbarMobile />
            </div>

        </>
    )
}

export default Reels
