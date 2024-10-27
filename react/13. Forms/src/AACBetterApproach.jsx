// Instead of making a seperate (piece of state and an event handler function) for every single form field, what we can do instead is use a single state object to store all our states in and instead of making seperate handler function like handleFirstName and handleLastName, we can make a single handleChange where we use evt.target.name(we will have to specify name property of every input) to figure out which fields changed.
import { useState } from "react"
export default function AACBetterApproach(){
    const [formData, setFormData] = useState({firstName: "", lastName: ""})
    const handleChange = (evt) => {
        const fieldName = evt.target.name
        const newFormData = {...formData, [fieldName]: evt.target.value} // If I want to update my object's properties using a variable for the property name, we can do that by using computed property name syntax i.e. by enclosing the property name in []. In this syntax the expression inside [] is first computed/evaluated and then used as property name
        setFormData(newFormData)
    }
    return(
        <>
            <label htmlFor="firstname2">First Name</label>
            {/* The name property should exactly match what the property name is in the state object, so we can update the desired property in state object using evt.target.name */}
            <input type="text" placeholder="First name" value={formData.firstName} onChange={handleChange} id="firstname2" name="firstName"/>
            <label htmlFor="lastname2">Last Name</label>
            <input type="text" placeholder="Last name" value={formData.lastName} onChange={handleChange} id="lastname2" name="lastName"/>
            <hr />
        </>
    )
}