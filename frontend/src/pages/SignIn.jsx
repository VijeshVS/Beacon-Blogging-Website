import { Title } from "../components/Title";
import { Director } from "../components/Director";
import { InputLabels } from "../components/InputLabels";
import {InputField} from '../components/InputField'
import {SignButton} from '../components/SignButton'
import { Quote } from "../components/Quote";
import { useNavigationHandler } from "../hooks/useNavigationHandler";

export function SignIn (){
    const navigationHandler = useNavigationHandler();

    return <div className="flex w-full h-screen">
        <div className="flex flex-1 flex-row justify-center items-center">
        <div>
            <Title text="Please login to continue"/>
            <Director text="Don't have an account?" clickHandler={navigationHandler} toRoute="signup" direct="Register"/>
            <InputLabels label="Email"/>
            <InputField placeholder="m@example.com" type="email"/>
            <InputLabels label="Password"/>
            <InputField placeholder="Enter your password" type="password"/>
            <SignButton text="Sign In"/>
        </div>
        </div>
        <div className="hidden md:flex bg-gray-200 flex-1 justify-center items-center">
            <Quote text='"An Expert at anything was once a beginner."' author="Vijesh" des="CEO,Beacon"/>  
        </div>
    </div>
}