import { useEffect, useState } from "react";
import {toast} from 'react-toastify'
import { useNavigationHandler } from "../hooks/useNavigationHandler";

export function DropDown ({imgLink}) {
    const [drop,setDrop] = useState(false);
    const [classDrop,setclassDrop] = useState("")
    const navigation = useNavigationHandler();

    useEffect(()=>{
        if(drop)
            setclassDrop("absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none")
        else
            setclassDrop("absolute hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none")
    },[drop])


    return <div class="relative inline-block text-left">
    <div>
    <img onClick={()=>{
        setDrop((c)=>!c)
    }} className="ml-3 h-10 w-10 rounded-3xl border-2 border-gray-200 cursor-pointer" src={imgLink}/>
    </div>
    <div class={classDrop} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="py-1" role="none">
      <button onClick={()=>{
            navigation('updateuser')
      }} class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Update user</button>
          <button onClick={()=>{
            localStorage.setItem('token',"")
            navigation('')
            toast.success("User has logged out successfully")
          }} class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      </div>
    </div>
  </div>
}