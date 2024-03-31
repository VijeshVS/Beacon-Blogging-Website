export function BlogTitle({post}){
    return <div>
        <h1 className="pl-20 pr-7 pt-20 text-5xl text-black font-bold">{post.title}</h1>
        <h1 className="pl-20 mt-2 text-lg text-gray-400">Posted on {post.date}</h1>
        <p className="mt-5 text-md pl-20 pr-10">{post.content}</p>
    </div>
}