export function Quote({text,author,des}){
    return <div className="pl-20">
    <h1 className="text-4xl font-bold text-black text-wrap">{text}</h1>
    <h1 className="text-xl mt-3 font-bold">{author}</h1>
    <h1 className="text-lg text-gray-400">{des}</h1>
    </div>
}