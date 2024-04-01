import {CreateBlogPostNavbar} from '../components/CreateBlogNavBar'
import {useNavigationHandler} from '../hooks/useNavigationHandler'

export function Feed (){
    const navigator = useNavigationHandler();
    return <div>
        <CreateBlogPostNavbar text="New Blog" toRoute="newblog" handler = {navigator}/>
    </div>    
}