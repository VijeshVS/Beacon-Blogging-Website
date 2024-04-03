import { BlogList } from "../components/BlogList";
import { NavBar } from "../components/NavBar";
import { useState,useEffect } from "react";
import axios from 'axios'
import {backend} from '../../config/config'

export function Homepage(){
    const [posts,setPosts] = useState([])

    const recall = async ()=>{
      
            const response = await axios.get(backend + '/blog/post/bulk',{
                headers:{
                    Authorization : localStorage.getItem('token')
                }
            });
            setPosts(response.data.posts)
            console.log(response.data)
    }

    useEffect(()=>{
        recall();
    },[])

    return <div>
        <NavBar/>
        <BlogList posts = {posts}/>
    </div>
}