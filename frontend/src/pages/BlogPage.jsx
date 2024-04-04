import { useState,useEffect } from "react";
import { AuthorDetails } from "../components/AuthorDetails";
import { BlogTitle } from "../components/BlogTitle";
import { BlogLoadingSkeleton } from "../components/BlogLoadingSkeleton";
import axios from 'axios'
import { backend } from "../../config/config";
import { useParams } from "react-router-dom";

export function BlogPage(){
    const [loading,setLoading] = useState(true)
    const {id} = useParams();
    const [post,setPost] = useState({})
    useEffect(()=>{
        axios.get(backend+'/blog/'+id,{
            headers:{
                authorization : localStorage.getItem('token')
            }
        }).then((res)=>{
            console.log(res)    
            setPost(res.data.post)
            setLoading(false)
        })
    },[])

    if(loading)
        return <BlogLoadingSkeleton/>

    if(!post)
        return <div className="flex justify-center items-center bg-black font-bold text-white text-2xl h-screen">Blog not found</div>

    return <div className="flex w-full h-screen">
        <div className="basis-5/6">
        <BlogTitle post={post}/>
        </div>
        <div className="basis-2/6 ">
        <AuthorDetails author={post.author}/>
        </div>
    </div>
}