import React, { useState } from 'react'
import './Reels.css'
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { PostImages, PostVideos, PostMultipleVideos } from '../../../ReduxStore/ReelStore';
import { PostMultipleImages } from '../../../ReduxStore/ReelStore';
import NavbarMobile from '../../Navbar/NavbarMobile';
import { AssistWalkerTwoTone } from '@mui/icons-material';

// this is use to create posts

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
    const videoExtensions = ['mp4', 'webm', 'ogg', 'avi', 'mov', 'wmv', 'flv', 'mkv'];


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
            e. In if if the imageExtensions includes  the extension returned by getFileExtension then the image will be changed into data url string because normal screenshot or photos does not work in img tag and then dispatch the data to the Redux store via the PostImages action
            f. In elseif videoExtensions checks if the url is of video 
            g. Video URL Creation: Used URL.createObjectURL(file) to create a URL that the video tag can use directly for video playback.
            h. dispatch the data to the Redux store via the PostVideos action
    */

    const onSubmit = async (data) => {
        const filelist = Array.from(data.photo);
        console.log("this is file type ==>>", typeof (filelist[0]), filelist);
        console.log(data);
        let file = data.photo[0];
        let reader = new FileReader();
        // console.log(typeof (data.photo));
        let dataurl;

        if (filelist.length === 1) {

            dataurl = getFileExtension(data.photo[0].name)
            if (imageExtensions.includes(dataurl)) {
                reader.onloadend = () => {
                    const postContent = reader.result; // Data URL string
                    const postDescription = data.description;
                    // const PostDate = data.photo[0].lastModifiedDate
                    dispatch(PostImages({ postContent, postDescription }));
                };
                alert("Post Created Succesfully Please Go back To Home Page")
            } else if (videoExtensions.includes(dataurl)) {
                const postContent = URL.createObjectURL(file); // Create a URL for the video file
                const postDescription = data.description;
                dispatch(PostVideos({ postContent, postDescription }));
                alert("Post Created Succesfully Please Go back To Home Page")
            } else {
                console.error("Not Supporting This url")
                alert("Not Supporting This url")
            }
            // end{code}
            reader.readAsDataURL(file);
        }

         else if (filelist.length > 1) {
            const imageFiles = [];
            const videoFiles = [];
            const postDescription = data.description;

              for  (const file of filelist) {
                const extension = getFileExtension(file.name);
                console.log("File extension:", extension);

                if (imageExtensions.includes(extension)) {
                    const reader = new FileReader();
                    reader.onloadend =  () =>  {
                        imageFiles.push(reader.result);
                        // console.log("Image files:", imageFiles);
                        if (imageFiles.length === filelist.filter(f => imageExtensions.includes(getFileExtension(f.name))).length) {
                            console.log("Dispatching multiple images:", imageFiles);
                            dispatch(PostMultipleImages({ postContent: imageFiles, postDescription }));
                        }

                    };
                    reader.readAsDataURL(file);
                } else if (videoExtensions.includes(extension)) {
                    const postContent = URL.createObjectURL(file);
                    videoFiles.push(postContent);
                    console.log("Video files:", videoFiles);
                    if (videoFiles.length === filelist.filter(f => videoExtensions.includes(getFileExtension(f.name))).length) {
                        console.log("Dispatching multiple videos:", videoFiles);
                        dispatch(PostMultipleVideos({ postContent: videoFiles, postDescription }));
                    }
                } else {
                    alert('Not Supporting This url');
                }

            }

            // -----------------------------------------
        }

        /*
        Loop through File List:

for (const file of filelist) { ... }: This loop iterates through each file in the filelist.
Get File Extension:

const extension = getFileExtension(file.name);: This function extracts the file extension from the file.name.
Check Image and Video Extensions:

If the file is an image, a FileReader is used to read the file as a Data URL (readAsDataURL). Once loaded (onloadend), the result (reader.result) is pushed into imageFiles.
After all images are loaded (imageFiles.length equals the number of images in filelist), PostMultipleImages action is dispatched with postContent (array of image URLs) and postDescription.

If the file is a video, URL.createObjectURL(file) is used to create a URL for the video file (postContent). This URL can be used directly in the <video> tag for playback.
After all videos are processed (videoFiles.length equals the number of videos in filelist), PostMultipleVideos action is dispatched with postContent (array of video URLs) and postDescription.

If the file extension doesn't match any in imageExtensions or videoExtensions, an alert is shown indicating that the URL is not supported.

This code segment efficiently handles the submission of multiple files (images and videos) using FileReader and URL.createObjectURL.
It checks each file's extension to determine if it's an image or video and then processes them accordingly.
Once all files of a type (images or videos) are processed, it dispatches actions (PostMultipleImages or PostMultipleVideos) to update Redux state with the corresponding content and description.
        
        */


    };

    // const Postdataimage = useSelector((state) => state.Reels.Images);

    const Multipleimages = useSelector((state) => state.Reels.MultipleImage)

    console.log('from reel component reduxreel PostMultipleImages =>>', Multipleimages);

    const Postdatavideo = useSelector((state) => state.Reels.Video);

    // console.log('from reel component reduxreel Video =>>', Postdatavideo);










    return (
        <>
            <div className='reel-main-div'>


                <form action="" onSubmit={handleSubmit(onSubmit)} className='form-st'>

                    <div className='div-img'>
                        <Typography>Create a Post</Typography>
                    </div>


                    <div className='flex flex-col items-center mt-12 gap-3'>
                        <input placeholder='photo' {...register("photo", { required: { value: true, message: "This Field Is Required" } })} multiple type="file" className=' ml-24' />

                        <div style={{ height: "20px" }}>
                            {errors.photo && <div style={{ color: "red", fontSize: "13px", fontWeight: "bold" }}>{errors.photo.message}</div>}
                        </div>

                        <input placeholder='Description' {...register("description", { required: { value: true, message: "This Field Is Required" } })} type="text" className='text-black' />

                        <div style={{ height: "20px" }}>
                            {errors.password && <div style={{ color: "red", fontSize: "13px", fontWeight: "bold" }}>{errors.description.message}</div>}
                        </div>


                        <Button className='submit-reel' type='submit' variant="contained">Create</Button>
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
