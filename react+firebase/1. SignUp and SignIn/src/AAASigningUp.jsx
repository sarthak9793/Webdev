import { useState } from "react";
import { app } from "./firebase.js"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default function AAAAuthentication(){
    const [formData, setFormData] = useState({email: "", password: ""})
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    // Function to sign up/create a user
    const createUser = async (email, password) => {
        // createUserWithEmailAndPassword() function will create a user with specified email and password in our firebase account. It returns a promise
        const data = await createUserWithEmailAndPassword(auth, email, password)
        console.log(data)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        createUser(formData.email, formData.password)
    }
    
    return(
        <div>
            <h1 className="text-center font-bold">Sign Up</h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="email">Email </label>
                <input type="text" value={formData.email} name="email" className="bg-gray-100 focus:outline" onChange={handleChange} />
                <br />
                <label htmlFor="password">Password </label>
                <input type="password" value={formData.password} name="password" className="bg-gray-100 focus:outline" onChange={handleChange} />
                <br />
                <button className="border border-black rounded-full">SignUp</button>
            </form>
        </div>


    )

}