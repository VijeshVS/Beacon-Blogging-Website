import {CreateBlogPostNavbar} from '../components/CreateBlogNavBar'
import {useNavigationHandler} from '../hooks/useNavigationHandler'
import {MyFeedBlog} from '../components/MyFeedBlog'
import { useState,useMemo, useEffect } from 'react';
import axios from 'axios'
import { backend } from '../../config/config';

export function Feed (){
    const [navActive,setnavActive] = useState(true);
    let [posts,setPosts] = useState([])

    let navStyling = 'text-lg ml-3 hover:border-b-2 hover:border-gray-300 pb-1 cursor-pointer';
    let foryouStyling = navActive?navStyling+' text-blue-600':navStyling
    let myblogStyling = navActive?navStyling:navStyling+' text-blue-600'

    const recall = async ()=>{
        if(navActive){
            const response = await axios.get(backend + '/blog/post/bulk',{
                headers:{
                    Authorization : localStorage.getItem('token')
                }
            });
            setPosts(response.data.posts)
            console.log(response.data)
        }
    }

    useEffect(()=>{
        recall();
   },[navActive])

    const navigator = useNavigationHandler();
    return <div>
        <CreateBlogPostNavbar text="New Blog" toRoute="newblog" handler = {navigator}/>
        <div className='flex px-10 mt-4'>
        <h1 className={foryouStyling} onClick={()=>setnavActive(true)}>For you</h1>
        <h1 className={myblogStyling} onClick={()=>setnavActive(false)}>My Blogs</h1>
        </div>
        <MyFeedBlog posts={posts}/>
    </div>    
}