export function Buttons({text,handler,toRoute}){
    return <div className="h-full">
        <button onClick={()=>handler(toRoute)} className="w-32 h-8 text-sm rounded-2xl bg-green-600 text-white  hover:scale-105 hover:bg-green-700">{text}</button>
    </div>
}