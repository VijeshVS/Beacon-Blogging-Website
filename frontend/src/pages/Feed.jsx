import {CreateBlogPostNavbar} from '../components/CreateBlogNavBar'
import {useNavigationHandler} from '../hooks/useNavigationHandler'
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios'
import { backend } from '../../config/config';
import { BlogList } from '../components/BlogList';
import {LoadingSkeleton} from '../components/LoadingSkeleton'
import { decodeToken } from "react-jwt";


export function Feed (){
    const [navActive,setnavActive] = useState(true);
    let [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(true)

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array
      }      

    let navStyling = 'text-lg ml-3 hover:border-b-2 hover:border-gray-300 pb-1 cursor-pointer';
    let foryouStyling = navActive?navStyling+' text-blue-600':navStyling
    let myblogStyling = navActive?navStyling:navStyling+' text-blue-600'

    const recall = async (id)=>{
            const response = await axios.get(backend + '/blog/post/bulk',{
                headers:{
                    Authorization : localStorage.getItem('token')
                }
            });
            let data = response.data.posts
            if(!navActive){
                data = data.filter((p)=>{
                    if(p.authorId == id)
                        return true;
                    else
                        return false;
                })
            }
            data = shuffle(data)
            setPosts(data)
            setLoading(false)
            
    }

    useEffect(()=>{
        const myDecodedToken = decodeToken(localStorage.getItem('token'));
        const id = myDecodedToken.id;
        recall(id);

        return ()=>{
            setLoading(true)
        }
   },[navActive])

    const navigator = useNavigationHandler();
    return <div>
        <CreateBlogPostNavbar text="New Blog" toRoute="newblog" handler = {navigator}/>
        <div className='flex mt-4 start-10 md:justify-center'>
        <h1 className={foryouStyling} onClick={()=>setnavActive(true)}>For you</h1>
        <h1 className={myblogStyling} onClick={()=>setnavActive(false)}>My Blogs</h1>
        </div>
        <div className='flex start-0 md:justify-center'>
        {loading?<div className='flex flex-col w-full items-center'><LoadingSkeleton/> <LoadingSkeleton/> <LoadingSkeleton/><LoadingSkeleton/></div>:<BlogList posts={posts}/>}
        </div>
    </div>    
}