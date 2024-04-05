import {Buttons} from './Buttons'
import {useNavigationHandler} from '../hooks/useNavigationHandler'
import { DropDown } from './DropDown';
import { useEffect,useState } from 'react';
import axios from 'axios'
import { backend } from '../../config/config';

export function CreateBlogPostNavbar({text,handler,toRoute}){
    const navigator = useNavigationHandler();
    const [imgLink,setimgLink] = useState("https://t3.ftcdn.net/jpg/02/44/17/82/360_F_244178265_NP4S8WdlZRGYVSkVkxhtiDonSfQPAbyO.jpg")

    useEffect(()=>{
        axios.get(backend+ '/user',{
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res)=>{
            setimgLink(res.data.imgLink)
        })
    },[])

    return <div className="flex justify-between px-4 md:px-12 mt-3 pt-6 pb-4 border-b-2 border-gray-50">
        <div className="flex cursor-pointer" onClick={()=>navigator('feed')}>
        <img className="w-8 h-8 rounded-3xl" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/letter-b-logo-design-template-bd51cd692b1ae2d1232e5e3ae629b8ee_screen.jpg?ts=1639751661"/>
        <h1 className="ml-3 text-xl font-bold text-black">Beacon</h1>
        </div>
        <div className="flex items-center">
        <div>
        <Buttons text={text} toRoute={toRoute} handler={handler}/>
        </div>  
        <div>
        <DropDown imgLink = {imgLink}/>
        </div>
        </div>
</div>
}