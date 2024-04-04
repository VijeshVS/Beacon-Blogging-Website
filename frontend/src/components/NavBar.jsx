import { useNavigationHandler } from "../hooks/useNavigationHandler";
import { Buttons } from "./Buttons";

export function NavBar(){
    const navigate = useNavigationHandler();

    return <div className="flex justify-between px-6 md:px-14 pt-6 pb-4 border-b-2 border-gray-200 z-50 bg-white sticky top-0 left-0">
        <div className="flex">
            <img className="w-8 h-8 rounded-3xl" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/letter-b-logo-design-template-bd51cd692b1ae2d1232e5e3ae629b8ee_screen.jpg?ts=1639751661"/>
            <h1 className="ml-3 text-xl font-bold text-black">Beacon</h1>
        </div>
        <div>
            <Buttons handler={navigate} text="Get started" toRoute ="signin"/>
        </div>
    </div>
}