import {Buttons} from './Buttons'
import {useNavigationHandler} from '../hooks/useNavigationHandler'
export function CreateBlogPostNavbar({text,handler,toRoute}){
    const navigator = useNavigationHandler();

    return <div className="flex justify-between px-16 md:px-24 mt-3 pt-6 pb-4 border-b-2 border-gray-50">
        <div className="flex cursor-pointer" onClick={()=>navigator('feed')}>
        <img className="w-8 h-8 rounded-3xl" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/letter-b-logo-design-template-bd51cd692b1ae2d1232e5e3ae629b8ee_screen.jpg?ts=1639751661"/>
        <h1 className="ml-3 text-xl font-bold text-black">Beacon</h1>
        </div>
        <div className="flex items-center">
        <div>
        <Buttons text={text} toRoute={toRoute} handler={handler}/>
        </div>  
        <div>
        <img onClick={()=>navigator('updateuser')} className="ml-3 h-10 w-10 rounded-3xl border-2 border-gray-200 cursor-pointer" src="https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg"/>
        </div>
        </div>
</div>
}