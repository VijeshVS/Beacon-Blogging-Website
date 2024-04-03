import { useLocation, useSearchParams } from "react-router-dom";
import { AuthorDetails } from "../components/AuthorDetails";
import { BlogTitle } from "../components/BlogTitle";

export function BlogPage(){
    const location = useLocation();
    const post = location.state;
    
    return <div className="flex w-full h-screen">
        <div className="basis-5/6">
        <BlogTitle post={post}/>
        </div>
        <div className="basis-2/6 ">
        <AuthorDetails/>
        </div>
    </div>
}