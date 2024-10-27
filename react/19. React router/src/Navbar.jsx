import {Link} from "react-router-dom"
// To add navigation into our application we will use the link component
export default function Navbar(){
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutUs">About Us</Link></li>
                <li><Link to="/contactUs">Contact Us</Link></li>
            </ul>
        </div>
        
    )
}