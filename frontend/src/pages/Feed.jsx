import {CreateBlogPostNavbar} from '../components/CreateBlogNavBar'
import {useNavigationHandler} from '../hooks/useNavigationHandler'
import {MyFeedBlog} from '../components/MyFeedBlog'
import { useState } from 'react';

export function Feed (){
    const [navActive,setnavActive] = useState(true);
    let navStyling = 'text-lg ml-3 hover:border-b-2 hover:border-gray-300 pb-1 cursor-pointer';
    let foryouStyling = navActive?navStyling+' text-blue-600':navStyling
    let myblogStyling = navActive?navStyling:navStyling+' text-blue-600'

    const navigator = useNavigationHandler();
    return <div>
        <CreateBlogPostNavbar text="New Blog" toRoute="newblog" handler = {navigator}/>
        <div className='flex px-10 mt-4'>
        <h1 className={foryouStyling} onClick={()=>setnavActive(true)}>For you</h1>
        <h1 className={myblogStyling} onClick={()=>setnavActive(false)}>My Blogs</h1>
        </div>
        <MyFeedBlog/>
    </div>    
}