import { useEffect, useState } from "react"
import { useFirebase } from "../context/Firebase"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" })
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }
    const { signIn, googleSignUp, user } = useFirebase()
    const handleSubmit = (evt) => {
        evt.preventDefault()
        signIn(formData.email, formData.password)
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
            <form className="mx-auto bg-black p-4 h-[500px] w-[320px] bg-opacity-40 backdrop-blur-md rounded-3xl drop-shadow-lg " onSubmit={handleSubmit}>
                <div className="w-full h-full  flex flex-col gap-y-12">
                    <h1 className="font-bold text-center text-xl text-white">Sign In</h1>
                    <div className="flex flex-col gap-y-1 text-white">
                        <label htmlFor="email">Email </label>
                        <input type="email" id="email" className="border border-black text-black" value={formData.email} name="email" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-y-1 text-white">
                        <label htmlFor="password">Password </label>
                        <input type="password" id="password" className="border border-black text-black" value={formData.password} name="password" onChange={handleChange} />
                    </div>
                    <button className="border border-black mx-auto rounded-lg bg-register-button-color w-full py-1 text-white mt-12">Login</button>
                    <div className=" flex w-full justify-center gap-x-4">
                        <p className="text-center">Or Sign In With</p>
                        <button type="button" onClick={googleSignUp}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="google" className="max-h-[22px] max-w-[22px]" />
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )

}
