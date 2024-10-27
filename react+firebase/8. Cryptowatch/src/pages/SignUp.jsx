import { Link } from "react-router-dom"
import { useFirebase } from "../contexts/FirebaseContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function SignUp(){
    const {createUser} = useFirebase()
    const [formData, setFormData] = useState({email: "", password: ""})
    const navigate = useNavigate()
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }
    const [isSigningUp, setIsSigningUp] = useState(false)
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        setIsSigningUp(true)
        try{
            await createUser(formData.email, formData.password)
            navigate("/")
        }catch(err){
            alert("Sign Up failed")
        }
        setIsSigningUp(false)
        setFormData({email: "", password: ""})
    }
    return(
        <form className="max-w-[400px] px-4 py-28 mx-auto" onSubmit={handleSubmit}>
            <h1 className="font-bold text-2xl mb-6">Sign Up</h1>
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
                        {!isSigningUp && <div>Sign Up</div>}
                        {isSigningUp && <span className="loading loading-spinner loading-md"></span>}
                    </button>
                    <p>Already have an account? <Link to="/signIn" className="text-blue-500">Sign In</Link></p>
                </div>
            </div>
        </form>

    )
}