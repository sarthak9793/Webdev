// We can provide a second argument to useEffect which is an array, called the dependencies array. This array should include all of the values that our side effect relies upon. In this case, I am providing one piece of state in the array. The useEffect callback function will be called only if any pieces of states in the array changes
import { useState, useEffect } from "react";
export default function AACUseEffectDependencies(){
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count+1)
    }
    const [name, setName] = useState("")
    const handleChange = (evt) => {
        setName(evt.target.value)
    }
    // callback function runs after every render
    // useEffect(function myEffect() {
    //     console.log("myEffect was called")
    // })
    
    // callback function runs only after "name" state changes
    useEffect(function myEffect() {
        console.log("myEffect was called")
    }, [name])
    
    // callback funtion runs only when component is mounted i.e. after the first render
    // useEffect(function myEffect() {
    //     console.log("myEffect was called")
    // }, [])
    useEffect
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Increment</button>
            <br />
            <input type="text" onChange={handleChange} value={name} name="name"/>
        </div>

    )
}
// useeffects mein hamne jo states specify kari hain, agar unme se kisi state ne apne component ka re-render trigger kiya then after that re-render useEffect callback function will be called. Agar hamne dependencies array empty chhod di then keval first render ke baad useEffect callback function will be called. Agar hamne dependencies array mention hi nahi kari to har re-render ke baad useEffect callback function will be called

