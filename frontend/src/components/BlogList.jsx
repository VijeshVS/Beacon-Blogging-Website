import { BlogComponent } from "./BlogComponent";

export function BlogList({posts}){
    return <div className="pl-6 pt-6 h-screen flex">
        <div className="flex flex-col w-full">
        {posts.map((p)=>{
            return <BlogComponent post={p}/>
        })}
        </div>
    </div>
} 