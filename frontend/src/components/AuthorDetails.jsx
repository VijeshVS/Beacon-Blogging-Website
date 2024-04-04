export function AuthorDetails({author}){

    return <div className="m-20">
        <h1 className="text-gray-500 ml-1 text-xl">Author</h1>
        <div className="flex mt-6">
            <img src="https://avatar.iran.liara.run/public/30" className="h-16 w-16 rounded-2xl"/>
            <div className="flex ml-4 items-center">
            <h1 className="font-medium">{author.name}</h1>
            </div>
        </div>
        <h1 className="text-gray-700 mt-4">{author.description?author.description:`Hello there ${author.name} here !!`}</h1>
    </div>
}