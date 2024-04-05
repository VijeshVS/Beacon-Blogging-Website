import { useNavigate } from "react-router-dom";

export function BlogComponent({post}){
    const navigate = useNavigate();
    function onClickHandler(){
        navigate('/blog/'+post.id)
    }

    return <div onClick={onClickHandler} className="mt-2 ml-1 w-355 hover:bg-gray-50 cursor-pointer p-1 border-b-2 border-gray-200">
        <div className="flex">
            <div className="mt-4 flex items-center">
                <img className="h-10 w-10 rounded-3xl border-2 border-gray-200" src={post.author.imgLink}/>
            </div>
            <div>
                <h1 className="pl-4 mt-5 font-bold text-xl">{post.author.name}</h1>
            </div>
        </div>
        <h1 className="text-xl font-bold my-2">{post.title}</h1>
        <h1 className="my-1">{post.description}</h1>
        <div className=" w-96 pb-2 text-gray-600">{post.created}</div>
    </div>
}