import { useState } from "react"

export default function Form({updaterFunction}){
    const[formData, setFormData] = useState("")
    const handleChange = (evt) => {
        setFormData(evt.target.value)
    }
    const handleClick = () => {
        updaterFunction(formData)
    }
    return(
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" value={formData} onChange={handleChange}/>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}