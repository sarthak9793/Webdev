import { useState } from "react"
export default function AABMultipleInputs(){
    const [firstName, setFirstName] = useState("")
    const handleFirstNameChange = (evt) => {
        const newFirstName = evt.target.value
        setUserName(newFirstName)
    }
    const [lastName, setLastName] = useState("")
    const handleLastNameChange = (evt) => {
        const newLastName = evt.target.value
        setUserName(newLastName)
    }
    return(
        <>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="First name" value={firstName} onChange={handleFirstNameChange} id="firstname"/>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="Last name" value={lastName} onChange={handleLastNameChange} id="lastname"/>            
            <hr />
        </>
    )
}
// This approach is getting a little verbose and clunky to have to make a seperate piece of state and an event handler function for every single form field.