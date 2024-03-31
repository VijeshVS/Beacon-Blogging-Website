import { AuthorDetails } from "../components/AuthorDetails";
import { BlogTitle } from "../components/BlogTitle";

export function BlogPage(){
    return <div className="flex w-full h-screen">
        <div className="basis-5/6">
        <BlogTitle title="How to get started with react??"/>
        </div>
        <div className="basis-2/6 ">
        <AuthorDetails/>
        </div>
    </div>
}