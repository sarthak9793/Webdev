import {useEffect, useState} from "react"
import {useFirebase} from "./context/Firebase"
export default function Google(){
    const signup = useFirebase().signIn
    
    const handleSubmit = (evt) => {
        evt.preventDefault()
        signup()        
    }
    return(
        <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                    <button className="border border-black rounded-full">SignIn with GOOGLE</button>
            </form>
        </div>
    )
}