import { Link } from "react-router-dom"
import { useFirebase } from "../contexts/FirebaseContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function SignIn(){
    const {signIn} = useFirebase()
    const [formData, setFormData] = useState({email: "", password: ""})
    const navigate = useNavigate()
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }
    const [isSigningIn, setIsSigningIn] = useState(false)
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        setIsSigningIn(true)
        try{
            await signIn(formData.email, formData.password)
            navigate("/")
        }catch(err){
            alert("Sign In failed")
        }
        setIsSigningIn(false)
        setFormData({email: "", password: ""})
    }
    return(
        <form className="max-w-[400px] px-4 py-28 mx-auto" onSubmit={handleSubmit}>
            <h1 className="font-bold text-2xl mb-6">Sign In</h1>
            <div className="flex flex-col gap-y-9">
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" className="bg-primary shadow-xl rounded-full border border-input py-2 px-4" value={formData.email} name="email" onChange={handleChange} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="bg-primary shadow-xl rounded-full border border-input py-2 px-4" value={formData.password} name="password" onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-y-4">
                    <button className="bg-button rounded-full text-btnText py-3">
                        {!isSigningIn && <div>Sign In</div>}
                        {isSigningIn && <span className="loading loading-spinner loading-md"></span>}
                    </button>
                    <p>Don't have an account? <Link to="/signUp" className="text-blue-500">Sign Up</Link></p>
                </div>
            </div>
        </form>

    )
}