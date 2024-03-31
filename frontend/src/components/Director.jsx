export function Director({text,direct,clickHandler,toRoute}){
    return <div className="flex mb-10 justify-center">
        <h1 className="text-gray-600 text-lg">{text}</h1>
        <h1 onClick={()=>clickHandler(toRoute)} className="ml-2 text-gray-600 text-lg cursor-pointer underline">{direct}</h1>
    </div>
}