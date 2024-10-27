import {Link} from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { useFirebase } from "../contexts/FirebaseContext"
export default function SideDrawerMenu({isSideMenuActive, setIsSideMenuActive}){
    const {user, handleSignOut} = useFirebase()
    const handleLogOff = () => {
        handleSignOut()
        setIsSideMenuActive(false)
    }
    return(
        <div className={isSideMenuActive ? "sm:hidden w-full h-full bg-primary fixed top-16 right-0 duration-100 ease-in" :"w-full h-full bg-primary fixed top-16 right-[-100%] duration-100 ease-in"}>
            <ul className="p-4 font-bold h-full relative">
                <li className="border-b py-6"><Link to="/" onClick={()=>{setIsSideMenuActive(false)}}>Home</Link></li>
                {user && <li className="border-b py-6"><Link to="/account" onClick={()=>{setIsSideMenuActive(false)}}>Account</Link></li>}
                <li className="py-6"><ThemeToggle /></li>
                {!user && <div className="flex items-center self-center gap-x-3 font-bold absolute bottom-24">
                    <li className=""><Link to="/signIn" onClick={()=>{setIsSideMenuActive(false)}}>Sign In</Link></li>
                    <li className="bg-button text-btnText px-4 py-2 rounded-2xl"><Link to="/signUp" onClick={()=>{setIsSideMenuActive(false)}}>Sign Up</Link></li>
                </div>}
                {user && <div className="flex items-center self-center gap-x-3 font-bold absolute bottom-24">
                    <li><button onClick={handleLogOff}>Sign Out</button></li>
                </div>}

            </ul>

            
        </div>
        
    )
}