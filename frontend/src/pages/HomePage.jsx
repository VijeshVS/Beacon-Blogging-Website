import { BlogList } from "../components/BlogList";
import { NavBar } from "../components/NavBar";
import { useState,useEffect } from "react";
import axios from 'axios'
import {backend} from '../../config/config'
import {LoadingSkeleton} from '../components/LoadingSkeleton'

export function Homepage(){
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(true)

    const recall = async ()=>{
      
            const response = await axios.get(backend + '/blog/post/bulk',{
                headers:{
                    Authorization : localStorage.getItem('token')
                }
            });
            setPosts(response.data.posts)
            setLoading(false)
    }

    useEffect(()=>{
        recall();
    },[])

    return <div>
        <NavBar/>
        {loading?<LoadingSkeleton/>:<BlogList posts={posts}/>}
    </div>
}