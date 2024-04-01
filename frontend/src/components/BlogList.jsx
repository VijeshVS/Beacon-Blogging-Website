import { BlogComponent } from "./BlogComponent";
import { HomePageQuote } from "./HomePageQuote";

export function BlogList(){
    return <div className="pl-12 pt-6 h-screen flex">
        <div className="flex-1 pr-10">
        <BlogComponent/> 
        </div>
        <div className="hidden md:flex flex-1  my-auto justify-center items-center ml-8">
            <HomePageQuote/>
        </div>
    </div>
} 