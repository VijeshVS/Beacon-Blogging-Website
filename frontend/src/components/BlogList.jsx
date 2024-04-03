import { BlogComponent } from "./BlogComponent";

export function BlogList({posts}){
    return <div className="pl-12 pt-6 h-screen flex">
        <div className="flex-1 pr-10">
        {posts.map((p)=>{
            return <BlogComponent post={p}/>
        })}
        </div>
    </div>
} 