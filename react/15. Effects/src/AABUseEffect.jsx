import { useState, useEffect } from "react";
export default function AABUseEffect(){
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count+1)
    }
    // the useEffect hook expects a function
    // By default, the useEffect callback function will be called after every renders
    useEffect(function myEffect() {
        // The first thing we will notice is that we are getting two renders in the beginning instead of just one, this just has to do with how react works behind the scenes in development mode. So ignore that.
        console.log("myEffect was called")
    })
    // It is not very common to have this sort of effect where we have some function run after every render. Whats more common is to have a function run after the first render only or to have a function run only when a specific piece of state changes

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Increment</button>
            <hr />
        </div>

    )
}

