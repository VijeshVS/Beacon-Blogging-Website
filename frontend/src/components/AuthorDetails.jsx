export function AuthorDetails({author}){

    return <div className="mt-2">
        <div className="flex mt-6">
            <img src={author.imgLink} className="h-12 w-12 rounded-2xl"/>
            <div className="flex ml-4 items-center">
            <h1 className="font-medium">{author.name}</h1>
            </div>
        </div>
    </div>
}