import { useEffect, useRef, useState } from 'react'
import { InputField } from '../components/InputField'
import { InputLabels } from '../components/InputLabels'
import { SignButton } from '../components/SignButton'
import {Title} from '../components/Title'
import {backend} from '../../config/config'
import axios from 'axios'
import { ProfileCardLoading } from '../components/ProfileCardLoading'
import {toast} from 'react-toastify'

export function UpdateUserPage(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [imgLink,setimgLink] = useState("")
    const [loading,setLoading] = useState(true)
    const [pass,setPass] = useState("")
    const [currimgLink,setcurrimgLink] = useState("")

    async function updateuserInfo(){
        await toast.promise(axios.post(backend+'/user/update',{
            name,
            email,
            imgLink,
            password:pass
        },{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }),{
            pending: "Updating user info !!",
            success: "User info updated successfully",
            error: "Wrong password"
        })
    }

    useEffect(()=>{
        axios.get(backend+'/user',{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then((res)=>{
            setName(res.data.name)
            setEmail(res.data.email)
            setimgLink(res.data.imgLink)
            setcurrimgLink(res.data.imgLink)
              setLoading(false)
        })
    },[])

    if(loading)
        return <div className='w-full h-screen flex justify-center'>
            <ProfileCardLoading/>
        </div>

    const changeName = (e) => setName(e.target.value)
    const changeEmail = (e)=> setEmail(e.target.value)
    const changeimgLink = (e) => setimgLink(e.target.value)
    const changePass = (e) => setPass(e.target.value) 

    return <div>
        <div className='mt-16'>
        <Title text="Update User Details"/>
        </div>
        <div className='flex justify-center mt-4'>
            <img className='h-16 w-16' src={currimgLink?currimgLink:"https://avatar.iran.liara.run/public/20"}/>
        </div>
        <div className='flex items-center mt-1 flex-col'>
        <InputLabels label="Name"/>
        <InputField value={name} handler={changeName} placeholder="Enter your name"/>
        </div>
        <div className='flex items-center mt-1 flex-col'>
        <InputLabels label="Email Address"/>
        <InputField value={email} handler={changeEmail} placeholder="m@example.com"/>
        </div>
        <div className='flex items-center mt-1 flex-col'>
        <InputLabels label="Image Link"/>
        <InputField value={imgLink} handler={changeimgLink} placeholder="Paste your image link here"/>
        </div>
        <div className='flex items-center mt-1 flex-col'>
        <InputLabels label="Confirm Password"/>
        <InputField type="password" value={pass} handler={changePass} placeholder="Please confirm your password"/>
        </div>
        <div className='flex items-center mt-1 flex-col'>
        <SignButton clickHandler={updateuserInfo} text="Update"/>
        </div>
    </div>
}