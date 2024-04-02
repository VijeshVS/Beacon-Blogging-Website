export function BlogComponent({post}){
    return <div className="mt-2 hover:bg-gray-50 w-fit cursor-pointer p-1 border-b-2 border-gray-200">
        <div className="flex">
            <div className="mt-4 flex items-center">
                <img className="h-10 w-10 rounded-3xl border-2 border-gray-200" src="https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg"/>
            </div>
            <div>
                <h1 className="pl-4 mt-5 font-bold text-xl">Vijesh</h1>
            </div>
        </div>
        <h1 className="text-xl font-bold my-2">{post.title}</h1>
        <h1 className="my-1">{post.description}</h1>
        <div className=" w-96 pb-2 text-gray-600">{post.created}</div>
    </div>
}