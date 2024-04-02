import { BlogComponent } from "./BlogComponent";

export function MyFeedBlog({posts}){
    return <div className="pl-12 pt-6 h-screen flex">
        <div className="pr-10">
        { posts.map((p)=> <BlogComponent key={p.id} post={p}/> )}
        </div>
    </div>
} 