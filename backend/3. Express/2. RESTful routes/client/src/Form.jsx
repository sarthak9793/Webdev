import { useState } from "react"
export default function Form(){
    const [formData, setFormData] = useState({email: "", password: ""})
    const handleChange = (evt) => {
        const field = evt.target.name
        const newFormData = {...formData, [field]:evt.target.value}
        setFormData(newFormData)
    }

    return <>
        <h2>GET request</h2>
        <form action="http://localhost:5050/tacos">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={formData.email} onChange={handleChange} name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} name="password" />
            <input type="submit" />
        </form>
        <h2>Post request</h2>
        <form action="http://localhost:5050/tacos" method="post">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={formData.email} onChange={handleChange} name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} name="password" />
            <input type="submit" />
        </form>
    </>
}
