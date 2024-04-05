import { AuthorDetails } from "../components/AuthorDetails";

export function BlogTitle({post}){

    return <div className="pl-4 pt-4 md:pl-20 md:pt-20">
        <h1 className=" pr-7 text-5xl text-black font-bold">{post.title}</h1>
        <h1 className=" mt-2 text-lg text-gray-400">Posted on {post.created}</h1>
        <AuthorDetails author={post.author}/>
        <p className="mt-5 text-md pr-10">{post.content}</p>
    </div>
}