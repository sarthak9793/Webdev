import { useContext, useState } from "react"
import {useFirebase} from "./context/Firebase"

export default function DummyComponent(){
    const [formData, setFormData] = useState({email: "", password: ""})
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }
    const signUp = useFirebase().signUp
    const handleSubmit = (evt) => {
        evt.preventDefault()
        signUp(formData.email, formData.password)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email </label>
            <input type="text" id="email" value={formData.email} name="email" onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} name="password" onChange={handleChange} />
            <button>Sign Up</button>

        </form>
    )
}