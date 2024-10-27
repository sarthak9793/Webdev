import { useState } from "react";
import { app } from "./firebase.js"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export default function AABLoggingIn(){
    const [formData, setFormData] = useState({email: "", password: ""})
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    // Function to sign in a user
    const signIn = async (email,password) => {
        try {
            const data = await signInWithEmailAndPassword(auth, email, password)
            console.log("Sign In success")
        }catch(err){
            console.log("Sign In failure")
        }
    }


    const handleSubmit = (evt) => {
        evt.preventDefault()
        signIn(formData.email, formData.password)
    }
    return(
        <div>
            <h1 className="text-center font-bold">Sign In</h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="email">Email </label>
                <input type="text" value={formData.email} name="email" className="bg-gray-100 focus:outline" onChange={handleChange} />
                <br />
                <label htmlFor="password">Password </label>
                <input type="password" value={formData.password} name="password" className="bg-gray-100 focus:outline" onChange={handleChange} />
                <br />
                <button className="border border-black rounded-full">Sign In</button>
            </form>
        </div>
    )
}