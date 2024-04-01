import { CreateBlogPostNavbar } from "../components/CreateBlogNavBar";

export function CreateBlogPost(){
    return <div>    
        <CreateBlogPostNavbar text="Publish"/>
        <div className="mt-5 px-20">
        <textarea className="focus:outline-none w-full h-fit text-5xl font-bold overflow-auto" type="text" placeholder="Title here...." />
        <textarea placeholder="Write small description about the blog!!" className="focus:outline-none mt-3 ml-1 text-xl w-full h-20" type="text"/>
        <textarea placeholder="Write your story here!!" className="focus:outline-none mt-3 ml-1 text-xl w-full h-96" type="text"/>
        </div>
    </div>
}