import { Title } from "../components/Title";
import { Director } from "../components/Director";
import { InputLabels } from "../components/InputLabels";
import {InputField} from '../components/InputField'
import {SignButton} from '../components/SignButton'
import { Quote } from "../components/Quote";
import { useNavigationHandler } from "../hooks/useNavigationHandler";
import { useState } from "react";
import axios from 'axios'
import {backend} from '../../config/config'
import {signUpType} from '@vijeshvs/common2/dist/index'
import {toast} from 'react-toastify'

export function SignUp (){
    const navigationHandler = useNavigationHandler();
    const [userName,setuserName] = useState("");
    const [pass,setPass] = useState("")
    const [email,setEmail] = useState("")

    const usernameHandler = (e) => setuserName(e.target.value)
    const passHandler = (e) => setPass(e.target.value)
    const emailHandler = (e) => setEmail(e.target.value)

    async function userSignup(){
        const user = {
            name : userName,
            password : pass,
            email : email
        }
        const response = await toast.promise(axios.post(backend+ '/user/signup',user),{
            pending: "Signing in",
            success: "User registered successfully",
            error: "Error signing up"
        })

        if(!response | !response.status | response.status != 200){
            setuserName("");
            setEmail("");
            setPass("");
            return;
        }
        
        localStorage.setItem('token','Bearer '+ response.data.token) 
        navigationHandler('feed')

    }


    return <div className="flex w-full h-screen">
        <div className="flex flex-1 flex-row justify-center items-center">
        <div>
            <Title text="Create an account"/>
            <Director clickHandler={navigationHandler} toRoute="signin" text="Already have account?" direct="Login"/>
            <InputLabels label="Username"/>
            <InputField value={userName} handler={usernameHandler} placeholder="Enter your username" type="text"/>
            <InputLabels label="Email"/>
            <InputField value={email} handler={emailHandler} placeholder="m@example.com" type="email"/>
            <InputLabels label="Password"/>
            <InputField value={pass} handler={passHandler} placeholder="Enter your password" type="password"/>
            <SignButton clickHandler={userSignup} text="Sign Up"/>
        </div>
        </div>
        <div className="hidden md:flex bg-gray-200 flex-1 justify-center items-center">
            <Quote text='"An Expert at anything was once a beginner."' author="Vijesh" des="CEO,Beacon"/>  
        </div>
    </div>
}