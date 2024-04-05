import { useState } from "react";
import { CreateBlogPostNavbar } from "../components/CreateBlogNavBar";
import axios from 'axios'
import {backend} from '../../config/config'
import { useNavigationHandler } from "../hooks/useNavigationHandler";
import {toast} from 'react-toastify'

export function CreateBlogPost(){
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [story,setStory] = useState("")
    const navigationHandler = useNavigationHandler();


    async function createBlogFunction(){
        if(!title || !story || !desc){
            toast.error("Please fill out all the details to publish")
            return;
        }

        const post = {
            title: title,
            content : story,
            description: desc
        }
        try{
        await toast.promise(axios.post(backend+'/blog',post,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }),{
            pending: "Publishing Blog....",
            success: "Blog published successfully",
            error: "Error publishing blog"
        })

    }
    catch(e){
        if(e.response.status == 403){
            setTitle("");
            setDesc("");
            setStory("");
            toast.error("User not authorized!!")
            navigationHandler('signin')
            return;
        }
        else{
            toast.error("Invalid Inputs / Server is down")
            return;
        }
     }
        navigationHandler('feed')
    }

    return <div>    
        <CreateBlogPostNavbar handler={createBlogFunction} text="Publish"/>
        <div className="mt-5 px-20">
        <textarea value={title} onChange={(e)=>setTitle(e.target.value)} className="focus:outline-none w-full h-fit text-5xl font-bold overflow-auto" type="text" placeholder="Title here...." />
        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Write small description about the blog!!" className="focus:outline-none mt-3 ml-1 text-xl w-full h-20" type="text"/>
        <textarea value={story} onChange={(e)=>setStory(e.target.value)} placeholder="Write your story here!!" className="focus:outline-none mt-3 ml-1 text-xl w-full h-96" type="text"/>
        </div>
    </div>
}