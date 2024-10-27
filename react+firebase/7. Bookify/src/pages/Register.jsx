import { useState, useEffect } from "react"
import { useFirebase } from "../context/Firebase"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const [formData, setFormData] = useState({ email: "", password: "", name: "", phone: "" })
    const [isSigningUp, setIsSigningUp] = useState(false)
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }
    const { signUp, googleSignUp, user } = useFirebase()
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        setIsSigningUp(true)
        await signUp(formData.email, formData.password, formData.name, formData.phone)
        setIsSigningUp(false)
    }
    const navigate = useNavigate()
    useEffect(() => {
        if (user){
            // If user is logged in, then If user tries to come on the login page, redirect him to the Home page
            navigate("/")
        }
    }, [user])
    return (
        <div className="flex flex-col  h-screen justify-center">
            <form className="mx-auto bg-black p-4   w-[380px] bg-opacity-40 backdrop-blur-md rounded-3xl drop-shadow-lg text-white" onSubmit={handleSubmit}>
                <div className="w-full h-full  flex flex-col gap-y-12">
                    <h1 className="font-bold text-center text-xl">Sign Up</h1>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="border border-black text-black" value={formData.name} name="name" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="border border-black text-black" value={formData.email} name="email" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" className="border border-black text-black" value={formData.phone} name="phone" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="border border-black text-black" value={formData.password} name="password" onChange={handleChange} />
                    </div>
                    <button className="border border-black mx-auto rounded-lg bg-register-button-color w-full py-1 text-white mt-12">Register {isSigningUp && <span class="loading loading-spinner loading-sm"></span>}</button>
                    <div className=" flex w-full justify-center gap-x-4">
                        <p className="text-center">Or Sign Up With</p>
                        <button type="button" onClick={googleSignUp}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="" className="max-h-[22px] max-w-[22px]" />
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )

}