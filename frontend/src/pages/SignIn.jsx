import { Title } from "../components/Title";
import { Director } from "../components/Director";
import { InputLabels } from "../components/InputLabels";
import {InputField} from '../components/InputField'
import {SignButton} from '../components/SignButton'
import { Quote } from "../components/Quote";
import { useNavigationHandler } from "../hooks/useNavigationHandler";
import { useState,useEffect } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
import {backend} from '../../config/config'

export function SignIn (){
    const navigationHandler = useNavigationHandler();
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    const checkIfLoggedIn = async ()=>{
        
        const response = await fetch(backend+'/user/isLoggedIn',{
            headers: {
                Authorization : localStorage.getItem('token')
            }
        })

        if(response.status == 200){
            toast.success("User already logged in !!")
            navigationHandler('feed')
        }
        
    }

    useEffect(()=>{
        checkIfLoggedIn();
    },[])   

    async function signinFunction(){
        try{
            const res = await toast.promise(axios.post(backend+'/user/signin',{
                email:email,
                password : pass
            }),{
                pending: "Signing you in.....",
                success: "Signed in successfully!!",
                error: "Error occured while signing you in"
            })

            localStorage.setItem('token','Bearer '+res.data.token)
            navigationHandler('feed')
        }
        catch(e){
            setEmail("")
            setPass("")
            toast.error("Wrong credentials!!")
        }
        
    }

    const emailHandler = (e) => setEmail(e.target.value)
    const passHandler = (e) => setPass(e.target.value)

    return <div className="flex w-full h-screen">
        <div className="flex flex-1 flex-row justify-center items-center">
        <div>
            <Title text="Please login to continue"/>
            <Director text="Don't have an account?" clickHandler={navigationHandler} toRoute="signup" direct="Register"/>
            <InputLabels label="Email"/>
            <InputField value={email} handler={emailHandler} placeholder="m@example.com" type="email"/>
            <InputLabels label="Password"/>
            <InputField value={pass} handler={passHandler} placeholder="Enter your password" type="password"/>
            <SignButton clickHandler={signinFunction} text="Sign In"/>
        </div>
        </div>
        <div className="hidden md:flex bg-gray-200 flex-1 justify-center items-center">
            <Quote text='"An Expert at anything was once a beginner."' author="Vijesh" des="CEO,Beacon"/>  
        </div>
    </div>
}