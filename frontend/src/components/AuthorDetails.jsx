export function AuthorDetails({author}){
    return <div>
        <h1 className="pt-20 pl-4 text-gray-600 text-lg">Author</h1>
        <div className="flex">
            <div className="mt-4 flex items-center">
                <img className="h-18 w-20 rounded-3xl border-2 border-gray-200" src="https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg"/>
            </div>
            <div>
                <h1 className="pl-4 mt-5 font-bold text-xl">{author.name}</h1>
                <h1 className="mt-3 pl-4 text-gray-600 text-lg">{author.description}</h1>
            </div>
        </div>
    </div>
}