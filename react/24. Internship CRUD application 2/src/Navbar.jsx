import {Link} from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
export default function Navbar(){
    return(
        <div className="navbar flex justify-between items-center rounded-div p-4">
            <div className="flex gap-x-5 font-bold w-full justify-between px-2">
                <div className="flex gap-x-4 sm:text-lg md:text-xl">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/CreateUser"}>Create User</Link>
                </div>
                <ThemeToggle />
            </div>
        </div>
    )
}