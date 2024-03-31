import { useNavigate } from "react-router-dom";

export function useNavigationHandler(){
    const navigate = useNavigate();

    function navigationHandler(route){
        navigate('/'+route)
    }

    return navigationHandler;
}