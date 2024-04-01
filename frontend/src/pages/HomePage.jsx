import { BlogList } from "../components/BlogList";
import { NavBar } from "../components/NavBar";

export function Homepage(){
    return <div>
        <NavBar/>
        <BlogList/>
    </div>
}