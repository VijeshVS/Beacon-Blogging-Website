export function SignButton({text,clickHandler}) {
    return <div className="mt-6">
        <button onClick={clickHandler} className="font-md rounded-lg w-80 h-10 text-white bg-black hover:scale-105 ">{text}</button>
    </div>
}