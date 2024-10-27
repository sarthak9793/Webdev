import {Link} from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import {AiOutlineMenu} from "react-icons/ai"
import { useState } from "react"
import SideDrawerMenu from "./SideDrawerMenu"
import { useFirebase } from "../contexts/FirebaseContext"
export default function Navbar(){
    const [isSideMenuActive, setIsSideMenuActive] = useState(false)
    const handleClick = () => {
        setIsSideMenuActive(!isSideMenuActive)
    }
    const {user, handleSignOut} = useFirebase()
    const handleLogOff = () => {
        handleSignOut()
    }

    return(
        <div>
            <ul className="flex justify-between items-center rounded-div p-4">
                <li><Link to="/" className="font-bold text-2xl">CryptoWatch</Link></li>
                <li className="hidden sm:block"><ThemeToggle /></li>
                <div className="hidden sm:flex items-center gap-x-3 font-bold">
                    {!user && <li className=""><Link to="/signIn">Sign In</Link></li>}
                    {!user && <li className="bg-button text-btnText px-4 py-2 rounded-2xl"><Link to="/signUp">Sign Up</Link></li>}
                    {user && <li className=""><Link to="/account">Account</Link></li>}
                    {user && <li className="bg-button text-btnText px-4 py-2 rounded-2xl"><button onClick={handleLogOff}>Sign Out</button></li>}
                </div>
                <li className="sm:hidden" onClick={handleClick}><AiOutlineMenu size={30}/></li>
                {/* Sidebar menu */}
                <SideDrawerMenu isSideMenuActive={isSideMenuActive} setIsSideMenuActive={setIsSideMenuActive}/>
            </ul>
        </div>
    )

}